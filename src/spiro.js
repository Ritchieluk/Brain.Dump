let spiro = (function (input) {
	
	return {
		load: load
	}
	//  
	function load(dict, canvas){
		let emotionValues = dict;
		input.emotions = emotionValues["Overall"]["emotion"];
		input.sentiment = emotionValues["Overall"]["sentiment"];
		input.sentenceEmotions = emotionValues["Sentences"]["emotion"];
		input.sentenceSentiment = emotionValues["Sentences"]["sentiment"];
		createEmotions();
		
		input.canvas = canvas;
		input.canvasWidth = input.canvas.width;
		input.canvasHeight = input.canvas.height;
		input.origin.x = input.canvasWidth/2;
		input.origin.y = input.canvasHeight/2;
		console.log(input.origin);
		if(input.canvasWidth >= input.canvasHeight){
			input.spiroDiameter = input.canvasHeight;
		}
		else{
			input.spiroDiameter = input.canvasWidth;
		}
		
		
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
		let c = 1;
		
		let thisRotor;
		
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
		let c = 1;
		let i = input.incrementor;

		let thisRad = 0;
		let prevRad = 0;
		let centerRad = 0;
		let thisPitch = 0;
		let prevPitch = 0;
		let prevSpinPitch = 0;
		let prevDrawPitch = 0;
		let pen;

		//clear circles canvas
		let ctx = input.canvas.getContext("2d");
		//ctx.clearRect(0, 0, settings.canvasCircles.width, settings.canvasCircles.height);
		

		//start at the center
		let pt = {
			"x": input.origin.x,
			"y": input.origin.y,
		};
		if(input.frameCount % input.framePartition < 1){
			if(input.frameCount >= input.framePartition){
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
			let mult = input.directions[c];

			//set draw pitch
			let thisPitch = (input.drawPitches[c-1] + prevDrawPitch) * mult;

			//set pen pitch
			//physics here is subjective
			let os = (c > 1) ? 1 : 0;
			if (input.radiiTypes[c] === "h") {
				let penPitch = (input.spinPitches[c-1] + prevSpinPitch) * mult * -1;
			} else {
				let penPitch = (input.spinPitches[c-1] + prevSpinPitch) * mult;
			}

			//draw this rotor
			pt = circlePoint(pt.x, pt.y, centerRad, i * thisPitch);
			//console.log("pt: " + pt.x + " " + pt.y);
			//draw Pen
			//pen pitch set in last circle iteration
			pen = circlePoint(pt.x, pt.y, thisRad, i * thisPitch);
			
			c++;
		}

		//draw Pen
		//pen pitch set in last circle iteration
		
		pen = circlePoint(pt.x, pt.y, input.penWidth, i * thisPitch);
		//console.log("penPT:" + penPt.x + penPt.y + " at Increment: " + input.frameCount);
		//mark our starting point
		if (input.incrementor === 0) {
			input.penStart = pen;
		}
		
		//update curve points for drawCurve()
		//only maintain previous point, so we'll always plot previous to current.
		input.curvePoints.push(pen);
		if (input.curvePoints.length > 2) {
			input.curvePoints.shift();
		}
	}
	// draws a curve based on the next set of arc values
	function drawCurve(){
		let ctx = input.canvas.getContext("2d");
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
			let nd = new Date().getTime() / 1000;
			input.timer = nd - input.timer;
			//console.log(settings.timer);
			input.incrementor = 0;
			return;
		}

		let c = 0;
		let speed = input.speed;

		//loop through the speed iterations without a frame
		//this should run at least once
		while (c < speed) {
			//if we've cycled back to the beginning, then pause
			if (
				(input.curvePoints[1] && input.incrementor > input.iterator &&
				input.curvePoints[1].x === input.penStart.x &&
				input.curvePoints[1].y.toFixed(1) === input.penStart.y.toFixed(1))||input.frameCount > input.frameMax
			) {
				let nd = new Date().getTime() / 1000;
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
			let wAvg = [0,0,0];
			let emotionTrack = 0;
			sentence.forEach(function(emotion){
				if(emotionTrack < 6){
					for (let i = 0; i < 3; i++){
						wAvg[i] += emotion * input.emotionColors[emotionTrack][i];
					}
				}
				emotionTrack++;
			});
			for (let i = 0; i < 3; i++)
				wAvg[i] = parseInt(wAvg[i]);
			let hex = "#" + componentToHex(wAvg[0]) + componentToHex(wAvg[1]) + componentToHex(wAvg[2]);
			input.colors.push(hex);
		});		
		input.framePartition = input.frameMax / input.sentenceEmotions.length;
	}
	// populates the radii array based on the emotions array.
	function setRadii(){
		let i = 0;
		for(let key in input.emotions){
			input.radii[i] = input.spiroDiameter/3*input.emotions[key];
			if (input.emotions[key] > .333)
				input.radiiTypes[i] = "h";
			else
				input.radiiTypes[i] = "c";
			i++;
		}
	}
	function componentToHex(c) {
		let hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	
	// calculates the next point on a circle given its center, radius, and next angle)
	function circlePoint(a, b, r, angle){
		let rad = angle * (Math.PI / 180);
		let yCor = r * Math.sin(rad);
		let xCor = r * Math.cos(rad);
		xCor = a + xCor;
		yCor = b - yCor;
		//console.log("xCor: " + xCor);
		let coor = {
			x: xCor,
			y: yCor
		};
		//console.log("coor: " + coor.x + " " + coor.y);
		return coor;
	}
	// redoes the animation given the same information
	function createEmotions(){
		let emotionsArray = [];
		for (let key in input.sentenceEmotions){
			let tempArray = [];
			for (let emotion in input.sentenceEmotions[key]){
				tempArray.push(input.sentenceEmotions[key][emotion])
			}
			emotionsArray.push(tempArray);
		}
		let i = 0;
		for (let sentence in input.sentenceSentiment){
			for (let sentiment in input.sentenceSentiment[sentence]){
				emotionsArray[i].push(input.sentenceSentiment[sentence][sentiment]);
			}
			i++;
		}
		input.sentenceEmotions = emotionsArray;
	}
	// TODO: implement redraw function
	
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
	frameMax: 100000,
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
	penWidth: .75,
	emotionColors: [
		[255, 0, 0],  // angry
		[255,255,0],	// happy
		[0, 0, 255],	// sad
		[0, 255, 0],	// excited
		[0, 255, 255],	// bored
		[255, 0, 255],	// fear
		[0, 0, 0],		// negative
		[127, 127, 127],	// neutral
		[255,255,255]		// positive
	],	
	sentiment: [
	
	]
	}
);
export default spiro;