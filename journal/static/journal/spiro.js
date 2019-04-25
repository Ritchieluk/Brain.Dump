var spiro = (function (input) {
	
	return {
		load: load
	}
	//

	function htmlDecode(input)
	{
  		var doc = new DOMParser().parseFromString(input, "text/html");
  		return doc.documentElement.textContent;
	}

	function load(dict, canvas){
		var emotionValues = htmlDecode(dict);
		emotionValues = JSON.parse(emotionValues);
		input.emotions = emotionValues["Overall"]["emotion"];
		console.log("Overall Emotions: ", input.emotions);
		input.sentiment = emotionValues["Overall"]["sentiment"];
		console.log("Overall Sentiment: ", input.sentiment);
		input.sentenceEmotions = emotionValues["Sentences"]["emotion"];
		input.sentenceSentiment = emotionValues["Sentences"]["sentiment"];
		createEmotions();
		/*
		for (i= 0; i < emotionValues["Sentences"]["emotion"].length; i++){
			input.sentenceEmotions.push(emotionValues["Sentences"]["emotion"][i]+emotionValues["Sentences"]["sentiment"][i]);
			input.sentenceSentiment.push(emotionValues["Sentences"]["sentiment"][i]);
		}*/
		console.log("Sentence Emotions: ", input.sentenceEmotions);
		input.canvas = document.getElementById(canvas);
		input.canvasWidth = input.canvas.width;
		input.canvasHeight = input.canvas.height;
		console.log("Width: ", input.canvasWidth, " Height: ", input.canvasHeight);
		input.origin.x = input.canvasWidth/2;
		input.origin.y = input.canvasHeight/2;
		if(input.canvasWidth >= input.canvasHeight){
			input.spiroDiameter = input.canvasHeight;
		}
		else{
			input.spiroDiameter = input.canvasWidth;
		}
		console.log(input.spiroDiameter);
		
		/*
		input.canvasDiv = document.getElementById(canvas);
		input.canvas = document.createElement("canvas");
		input.canvas.id = input.canvasID;
		input.canvasDiv.appendChild(input.canvas);
		*/
		fillColors();
		setRadii();
		setValues();
		drawCircles();
		requestAnimationFrame(draw);
	}
	// calculates the next set of arc values and circle values
	function setValues(){
		input.pitches = [1];
		input.drawPitches = [];
		input.spinPitches = [];
		
		input.curveColor = input.colors[input.colorIncrement];
		var c = 1;
		
		var thisRotor;
		var thisType;
		
		//build arrays
		while (c < 6) {
			thisRotor = input.radii[c];

			if (input.radiiTypes[c] == "h") {
				if (c > 1) {
					input.drawPitches.push(input.spinPitches[c - 2]);
					input.spinPitches.push((input.radii[c-1] / thisRotor) - 1);
					if (input.radiiTypes[c - 1] === "h") {
						input.directions.push(input.directions[c-1]);
					} else {
						input.directions.push(input.directions[c-1] * -1);
					}
				} else {
					input.directions = [1, 1];
					input.drawPitches.push(1);
					input.spinPitches.push((input.radii[c-1] / thisRotor) - 1);
				}
			} else {
				if (c > 1){
					input.drawPitches.push(input.spinPitches[c - 2]);
					input.spinPitches.push((input.radii[c-1] / thisRotor) + 1);
					if (input.radiiTypes[c-1] === "h") {
						input.directions.push(input.directions[c-1]);
					} else(
						input.directions.push(input.directions[c-1] * -1)
					)
				} else {
					input.directions = [1, 1];
					input.drawPitches.push(1);
					input.spinPitches.push((input.radii[c-1] / thisRotor) + 1);

				}
			}
			c++;
		}
		//create url string for this config
	}
	// 
	function drawCircles(){
		var c = 1;
		var i = input.incrementor;

		var thisRad = 0;
		var prevRad = 0;
		var centerRad = 0;
		var thisPitch = 0;
		var prevPitch = 0;
		var prevSpinPitch = 0;
		var prevDrawPitch = 0;
		var pen;

		//clear circles canvas
		var ctx = input.canvas.getContext("2d");
		//ctx.clearRect(0, 0, settings.canvasCircles.width, settings.canvasCircles.height);
		

		//start at the center
		var pt = {
			"x": input.origin.x,
			"y": input.origin.y,
		};
		if(input.frameCount % input.framePartition < 1){
			if(input.frameCount >= input.framePartition){
				console.log("Changing color from: ", input.colors[input.colorIncrement], " to: ", input.colors[input.colorIncrement+1]);
				input.colorIncrement++;
				input.curveColor = input.colors[input.colorIncrement];
			}
		}
		//draw rotor Circles
		while (c < input.radii.length) {


			//set radii, applying zoom
			thisRad = Number(input.radii[c]);
			prevRad = Number(input.radii[c - 1]);
			if (input.radiiTypes[c] == "h") {
				//hypitrochoid: circle inside
				centerRad = prevRad - thisRad;
			} else {
				//eptrochoid: circle outside
				centerRad = prevRad + thisRad;
			}

			//pitches are cumulative, so extract previous from array.
			if (c > 1) {
				prevPitch = prevPitch + input.pitches[c - 2];
				prevSpinPitch = prevSpinPitch + input.spinPitches[c - 2];
				prevDrawPitch = prevDrawPitch + input.drawPitches[c - 2];
			} else {
				prevPitch = 0;
				prevSpinPitch = 0;
				prevDrawPitch = 0;
			}

			//set travel direction
			var mult = input.directions[c];

			//set draw pitch
			var thisPitch = (input.drawPitches[c-1] + prevDrawPitch) * mult;

			//set pen pitch
			//physics here is subjective
			var os = (c > 1) ? 1 : 0;
			if (input.radiiTypes[c] === "h") {
				var penPitch = (input.spinPitches[c-1] + prevSpinPitch) * mult * -1;
			} else {
				var penPitch = (input.spinPitches[c-1] + prevSpinPitch) * mult;
			}

			//draw this rotor
			var pt = circlePoint(pt.x, pt.y, centerRad, i * thisPitch);
			//console.log("pt: " + pt.x + " " + pt.y);
			//draw Pen
			//pen pitch set in last circle iteration
			var penPt = circlePoint(pt.x, pt.y, thisRad, i * penPitch);
			
			c++;
		}

		//draw Pen
		//pen pitch set in last circle iteration
		
		var penPt = circlePoint(pt.x, pt.y, input.penWidth, i * penPitch);
		//console.log("penPT:" + penPt.x + penPt.y + " at Increment: " + input.frameCount);
		//mark our starting point
		if (input.incrementor === 0) {
			input.penStart = penPt;
		}
		
		//update curve points for drawCurve()
		//only maintain previous point, so we'll always plot previous to current.
		input.curvePoints.push(penPt);
		if (input.curvePoints.length > 2) {
			input.curvePoints.shift();
		}
	}
	// draws a curve based on the next set of arc values
	function drawCurve(){
		var ctx = input.canvas.getContext("2d");
		ctx.beginPath();
		ctx.strokeStyle = input.curveColor;
		ctx.lineWidth = input.penWidth;
		ctx.moveTo(input.curvePoints[0].x, input.curvePoints[0].y);
		ctx.lineTo(input.curvePoints[1].x, input.curvePoints[1].y);
		ctx.stroke();
		ctx.closePath();
	}
	// runs the drawing of the curve, until its finished, calling itself
	function draw(){
		//if we've cycled back to the beginning, then pause
		if (
			(input.curvePoints[1] && input.incrementor > input.iterator &&
			input.curvePoints[1].x === input.penStart.x &&
			input.curvePoints[1].y.toFixed(1) === input.penStart.y.toFixed(1))||input.frameCount > input.frameMax
		) 
		{
			var nd = new Date().getTime() / 1000;
			input.timer = nd - input.timer;
			//console.log(settings.timer);
			input.incrementor = 0;
			console.log("Finished, at frame: ", input.frameCount);
			return;
		}

		var c = 0;
		var speed = input.speed;

		//loop through the speed iterations without a frame
		//this should run at least once
		while (c < speed) {
			//if we've cycled back to the beginning, then pause
			if (
				(input.curvePoints[1] && input.incrementor > input.iterator &&
				input.curvePoints[1].x === input.penStart.x &&
				input.curvePoints[1].y.toFixed(1) === input.penStart.y.toFixed(1))||input.frameCount > input.frameMax
			) {
				var nd = new Date().getTime() / 1000;
				input.timer = nd - input.timer;
				input.incrementor = 0;
				break;
			}
			input.frameCount++;
			drawCircles();
			drawCurve();
			//if we've done 1000 iterations, then call frame here, so there's some initial feedback
			input.incrementor = input.incrementor + input.iterator;
			c = c + input.iterator;
		}

		//draw
		input.frameCount++;
		drawCircles();
		drawCurve();

		//if we're decimal on speed then create timeout
			//or just request frame
		requestAnimationFrame(draw);
	}
	// populates the colors array based on the arrays within the sentences array
	function fillColors(){
		input.sentenceEmotions.forEach(function(sentence){
			wAvg = [0,0,0];
			emotionTrack = 0;
			sentence.forEach(function(emotion){
				for (i = 0; i < 3; i++){
					wAvg[i] += emotion * input.emotionColors[emotionTrack][i];
				}
				emotionTrack++;
			});
			for (i = 0; i < 3; i++)
				wAvg[i] = parseInt(.5*wAvg[i]);
			var hex = "#" + componentToHex(wAvg[0]) + componentToHex(wAvg[1]) + componentToHex(wAvg[2]);
			console.log(hex);
			input.colors.push(hex);
		});
		console.log("Colors: ", input.colors);
		
		input.framePartition = input.frameMax / input.sentenceEmotions.length;
		console.log("framePartition: ", input.framePartition);
	}
	// populates the radii array based on the emotions array.
	function setRadii(){
		i = 0;
		for(var key in input.emotions){
			input.radii[i] = input.spiroDiameter/2*input.emotions[key];
			input.radiiTypes[i] = "h";
			i++;
		}
		console.log(input.radii);
	}
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	
	// calculates the next point on a circle given its center, radius, and next angle)
	function circlePoint(a, b, r, angle){
		var rad = angle * (Math.PI / 180);
		var yCor = r * Math.sin(rad);
		var xCor = r * Math.cos(rad);
		xCor = a + xCor;
		yCor = b - yCor;
		//console.log("xCor: " + xCor);
		var coor = {
			x: xCor,
			y: yCor
		};
		//console.log("coor: " + coor.x + " " + coor.y);
		return coor;
	}
	// redoes the animation given the same information
	function createEmotions(){
		var emotionsArray = [];
		for (var key in input.sentenceEmotions){
			var tempArray = [];
			for (var emotion in input.sentenceEmotions[key]){
				tempArray.push(input.sentenceEmotions[key][emotion])
			}
			emotionsArray.push(tempArray);
		}
		i = 0;
		for (var sentence in input.sentenceSentiment){
			for (var sentiment in input.sentenceSentiment[sentence]){
				emotionsArray[i].push(input.sentenceSentiment[sentence][sentiment]);
			}
			i++;
		}
		input.sentenceEmotions = emotionsArray;
	}
	function redraw(){
		
	}
})(
// input class
	{
	incrementor: 0,
	iterator: .25,
	origin: {
		x: 0,
		y: 0
	},		
	frameCount: 0,
	frameMax: 200000,
	framePartition: 0,
	curvePoints: [],
	curveColor: "#0000FF",
	colorIncrement: 0,
	canvasID: "canvasID",
	// array of arrays, emotion data for each sentence 
	sentenceEmotions: [],
	sentenceSentiment: [],
	// array of emotion data for whole entry
	emotions: [],
	// array of radii for the circles
	radii: [0, 0, 0, 0, 0, 0],
	radiiTypes: [],
	// array of colors, a color for each sentence
	colors: [],
	// an array of (x,y) tuples for each circles
	locations: [],
	// an array of arc values, previous and current. Always draw previous to current
	arcValues: [],
	speed: 200,
	penWidth: .5,
	emotionColors: [
		[255, 0, 0],  // angry
		[255,255,0],	// happy
		[0, 0, 255],	// sad
		[0, 255, 0],	// excited
		[0, 255, 255],	// bored
		[255, 0, 255],	// fear
		[0, 0, 0],		// negative
		[60, 60, 60],	// neutral
		[255,255,255]		// positive
	],	
	sentiment: [
	
	]
	}
);
	