// myscript.js

window.onload = function() {
	draw();
}

function draw() {
	var canvas = document.getElementById('mycanvas');
	if (!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');

	ctx.font = 'bold 20px Verdana';
	ctx.textAlign = 'left';
	ctx.fillStyle = 'red';
	ctx.strokeStyle = 'red';

	ctx.fillText('taitiakisute',20, 20, 200);
	ctx.strokeText('taitiate',20, 60, 200)
}