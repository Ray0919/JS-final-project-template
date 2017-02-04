var FPS=60;

var bgImg = document.createElement("img");
var enemyImg = document.createElement("img");
var btnImg = document.createElement("img");
var towerIng = document.createElement("img");

bgImg.src = "images/map.png";
enemyImg.src = "images/slime.gif";
btnImg.src = "images/tower-btn.png";
towerIng.src = "images/tower.png";


var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

function draw(){
enemy.move();
	ctx.drawImage(bgImg,0,0);
	ctx.drawImage(enemyImg,enemy.x,enemy.y);
	ctx.drawImage(btnImg,640-64,480-64,64,64);
	if(isBuilding==true){
		ctx.drawImage(towerIng,cursor.x,cursor.y);
	}else{
		ctx.drawImage(towerIng,tower.x,tower.y);
	}

}

setInterval(draw, 1000/FPS);

var enemy={
x:96,
y:480-32,
speedX:0,
speedY:-64,
move:function(){
this.x=this.x+this.speedX/FPS;
this.y=this.y+this.speedY/FPS;
}
}

$("#game-canvas").on("mousemove",mouse)

var cursor={x:0,y:0};
var tower={x:0,y:0};

function mouse(event){
	console.log("x:"+event.offsetX+",y:"+event.offsetY)
	cursor.x=event.offsetX;
	cursor.y=event.offsetY;
}
var isBuilding = false;
$("#game-canvas").on("click", mouseclick);
function mouseclick(){
	if(cursor.x > 576 && cursor.y > 416){
		isBuilding = true;
	} else{
		if(isBuilding==(true)){
			isBuilding = false
			tower.x=cursor.x-cursor.x%32;
			tower.y=cursor.y-cursor.y%32;
		}
		isBuilding = false;

	}
}









































































































































































































































