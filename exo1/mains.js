var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

//murs de la maison
ctx.fillStyle = "blue";
ctx.fillRect(100,200,200,150);
//fenetre gauche
ctx.fillStyle = "grey";
ctx.fillRect(120,240,40,40);
//fenetre droite
ctx.fillRect(240,240,40,40);
//porte
ctx.fillRect(180,290,40,60);
//toit
ctx.fillStyle = "brown";
ctx.moveTo(100,200);
ctx.lineTo(200,100);
ctx.stroke();
ctx.lineTo(299,200);
ctx.stroke();
ctx.fill();
