var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

//carosserie
ctx.fillStyle="green";
ctx.fillRect(50,220,300,100);
ctx.fillRect(100,150,230,100);
//roues
ctx.lineWidth="2"
ctx.fillStyle="lightgrey";
ctx.strokeStyle="grey";
ctx.beginPath();
ctx.arc(120,315,40,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(290,315,40,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
