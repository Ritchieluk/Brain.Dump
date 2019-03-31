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
	// draws a curve based on the next set of arc values
	function drawCurve(){
		
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
	