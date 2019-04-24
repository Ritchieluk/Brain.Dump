<?php
function start_html() {
?>
    <!DOCTYPE html>
	<html lang="en">
    <head>
    <script src="jquery-3.4.0.js"></script>
    <script src = "spiro.js" type = "text/javascript"></script>
    <meta charset = "UTF-8">
	<title>Spirograph Test</title>
	</head>
	<body>
	<div id="pad" style="width:98.5%;height:694px;background:white\">
    <canvas id="canvasPen" height="884" width="829" style="left:136px;top:-92px;position:absolute;z-index:20"></canvas> 
    </div>

    
    <script type = "text/javascript">
    $.getJSON("example_2.json", function(json){
        spiro.load(json, "canvasPen");
    });
    </script>

<?php
}
function end_html() {
	echo "
	</body>
	</html>
	";
}
start_html();
end_html();
?>