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
			wAvg = [0,0,0];
			for(j = 0; j < sentences[i].length; j++){
				for (k = 0; k < emotionColors[j].length; k++)
					wAvg[k] += sentences[i][j] * emotionColors[j][k];
			}
			for(j = 0; j < wAvg.length; j++){
				wAvg[j] *= 1/100;
			}
			colors.push(wAvg);
		}
	}
	// populates the radii array based on the emotions array.
	function setRadii(){
		
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
	canvasID: "canvasID",
	// array of arrays, emotion data for each sentence 
	sentenceEmotions: [],
	// array of emotion data for whole entry
	emotions: [],
	// array of radii for the circles
	radii: [0, 0, 0, 0, 0, 0],
	// array of colors, a color for each sentence
	colors: [],
	// an array of (x,y) tuples for each circles
	locations: [],
	// an array of arc values, previous and current. Always draw previous to current
	arcValues: [],
	speed: 200,
	penWidth: .1,
	emotionColors: [
		fear: [255, 255, 0],
		anger: [255,0,0],
		bored: [0, 255, 255],
		sad: [0, 0, 255],
		happy: [255, 0, 255],
		excited: [0, 255, 0]
	},	
	}
);
	