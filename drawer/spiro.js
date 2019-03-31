var spiro = (function (input) {
	
	return {
		load: load
	}
	// 
	function load(emotionValues, canvas){
		emotions = emotionValues[0];
		for (i= 1; i < emotionValues.length; i++)
			sentences.push(emotionValues[i]);
		canvasID = document.getElementById(canvas);
	}
	// calculates the next set of arc values and circle values
	function setValues(){

		//settings.types = [""];
		input.pitches = [1];
		input.drawPitches = [];
		input.spinPitches = [];

		var c = 0;
		
		var thisRotor;
		var thisType;
		
		//build arrays
		while (c < 6) {
			thisRotor = radii[c];

			if (input.radiiTypes[c] == "h") {
				if (c > 0) {
					input.drawPitches.push(input.spinPitches[c - 1]);
					input.spinPitches.push((input.radii[c] / thisRotor) - 1);
					if (input.radiiTypes[c - 1] === "h") {
						input.directions.push(input.directions[c]);
					} else {
						input.directions.push(input.directions[c] * -1);
					}
				} else {
					input.directions = [1, 1];
					input.drawPitches.push(1);
					input.spinPitches.push((input.radii[c] / thisRotor) - 1);
				}
			} else {
				if (c > 0) {
					input.drawPitches.push(input.spinPitches[c - 1]);
					input.spinPitches.push((input.radii[c] / thisRotor) + 1);
					if (input.radiiTypes[c] === "h") {
						input.directions.push(input.directions[c]);
					} else(
						input.directions.push(input.directions[c] * -1)
					)
				} else {
					input.directions = [1, 1];
					input.drawPitches.push(1);
					input.spinPitches.push((input.radii[c] / thisRotor) + 1);

				}
			}
			c++;
		}

		//create url string for this config
	}
	// 
	function drawCircles(){
		var c = 0;
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
		ctx.clearRect(0, 0, settings.canvasCircles.width, settings.canvasCircles.height);
		

		//start at the center
		var pt = {
			"x": input.origin.x,
			"y": input.origin.y,
		};

		//draw rotor Circles
		while (c < input.radii.length) {


			//set radii, applying zoom
			thisRad = Number(input.radii[c]);
			prevRad = Number(input.radii[c - 1]);
			if (input.inputTypes[c] === "h") {
				//hypitrochoid: circle inside
				centerRad = prevRad - thisRad;
			} else {
				//eptrochoid: circle outside
				centerRad = prevRad + thisRad;
			}

			//pitches are cumulative, so extract previous from array.
			if (c > 0) {
				prevPitch = prevPitch + input.pitches[c - 1];
				prevSpinPitch = prevSpinPitch + input.spinPitches[c - 1];
				prevDrawPitch = prevDrawPitch + input.drawPitches[c - 1];
			} else {
				prevPitch = 0;
				prevSpinPitch = 0;
				prevDrawPitch = 0;
			}

			//set travel direction
			var mult = input.directions[c];

			//set draw pitch
			var thisPitch = (input.drawPitches[c] + prevDrawPitch) * mult;

			//set pen pitch
			//physics here is subjective
			var os = (c > 0) ? 1 : 0;
			if (input.radiiTypes[c] === "h") {
				var penPitch = (input.spinPitches[c] + prevSpinPitch) * mult * -1;
			} else {
				var penPitch = (input.spinPitches[c] + prevSpinPitch) * mult;
			}

			//draw this rotor
			var pt = circlePoint(pt.x, pt.y, centerRad, i * thisPitch);

			//draw Pen
			//pen pitch set in last circle iteration
			var penPt = circlePoint(pt.x, pt.y, thisRad, i * penPitch);
			
			c++;
		}

		//draw Pen
		//pen pitch set in last circle iteration
		var penPt = circlePoint(pt.x, pt.y, input.penWidth, i * penPitch);

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
		
	}
	// populates the colors array based on the arrays within the sentences array
	function fillColors(){
		for(i = 0; i < sentences.length; i++){
			prevAvg = [0, 0, 0];
			wAvg = [0,0,0];
			for(j = 0; j < sentences[i].length; j++){
				for (k = 0; k < emotionColors[j].length; k++)
					wAvg[k] += sentences[i][j] * emotionColors[j][k];
			}
			if (i > 0){
				for(j = 0; j < wAvg.length; j++){
					wAvg[j] = (wAvg[j] + prevAvg[j]) * .5 * (sentiment[1] + sentiment[2]);
				}
			}
			prevAvg = wAvg;
			colors.push(wAvg);
		}
	}
	// populates the radii array based on the emotions array.
	function setRadii(){
		for(i = 0; i < emotions.length; i++){
			radii[i] == 50*emotions[i];
			radiiTypes[i].push("h");
		}
	}
	// calculates the next point on a circle given its center, radius, and next angle)
	function circlePoint(a, b, r, angle){
		var rad = angle * (Math.PI / 180);
		var y = r * Math.sin(rad);
		var x = r * Math.cos(rad);
		x = a + x;
		y = b - y;
		return {
			"x": x,
			"y": y
		}
	}
	// redoes the animation given the same information
	function redraw(){
		
	}
})(
// input class
	{
	incrementor: 1,
	origin: {
		x: 0,
		y: 0
	},		
	curvePoints: [],
	curveColor: "",
	canvasID: "canvasID",
	// array of arrays, emotion data for each sentence 
	sentenceEmotions: [],
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
	penWidth: .1,
	emotionColors: [
		fear: [1, 1, 0],
		anger: [1,0,0],
		bored: [0, 1, 1],
		sad: [0, 0, 1],
		happy: [1, 0, 1],
		excited: [0, 1, 0]
	],	
	sentiment: [0, 0, 0]
	}
);
	