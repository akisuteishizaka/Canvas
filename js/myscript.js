// myscript.js

window.onload = function() {
	draw();
}

function draw() {
	var canvas = document.getElementById('mycanvas');
	if (!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');

	/*
	ctx.strokeStyle = '#ff0000';
	ctx.lineWidth = 15;
	ctx.lineJoin = "miter"; //round";

	ctx.fillStyle = '#ff0000';
	ctx.strokeRect(10,10,50,50);
	*/
	// var g = ctx.createLinearGradient(0,0,100,100);

	/*
	var g = ctx.createRadialGradient(50,50,20,50,50,60);
	g.addColorStop(0.0, "red");
	g.addColorStop(0.5, "yellow");
	g.addColorStop(1.0, "blue");
	ctx.fillStyle = g;
	*/

	/*
	ctx.shadowColor = "#ccc";
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 2;

	ctx.globalAlpha = 0.5;
	*/

	/*
	ctx.scale(0.8,0.8);
	ctx.rotate(30/180*Math.PI);
	ctx.translate(100,10);

	ctx.fillRect(0,0,100,100);
	*/

	/*
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.lineTo(120,20);
	ctx.lineTo(120,120);
	ctx.closePath();
	ctx.fill();*/
	//ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(100,100,50,0/180*Math.PI,270/180*Math.PI);
	ctx.lineWidth = 15;
	ctx.lineCap = 'round';
	ctx.stroke();
	// ctx.fill();

}