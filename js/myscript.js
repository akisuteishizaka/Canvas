// myscript.js

window.onload = function() {
	draw();
}

function draw() {
	var canvas = document.getElementById('mycanvas');
	if (!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');
}