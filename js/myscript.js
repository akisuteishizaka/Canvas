// myscript.js

window.onload = function() {
	draw();
}

function draw() {
	var canvas = document.getElementById('mycanvas');
	if (!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');

	var img = new Image();
	img.src = 'img/pratica_form_submit.png';
	img.onload = function() {
		var pattern = ctx.createPattern(img, 'repeat');
		ctx.fillStyle = pattern;
		ctx.fillRect(20, 20, 100, 100);
	}
}