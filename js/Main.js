var canvas = document.getElementById("canvas");
var terrain = document.getElementById("terrain");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

terrain.width = window.innerWidth;
terrain.height = window.innerHeight;

var ctx = canvas.getContext("2d");
var ter_ctx = terrain.getContext("2d");

if(ctx && ter_ctx){
	start();
}
else{
	alert("contesto non supportato");
}


var ship;
var key;
var pressing_time = 0;
var timer;
var start_timer = null;
var moves = null;
var terra;
var zoomed = false;

function start(){
	ship = new Ship((window.innerWidth/2),(window.innerHeight/2),300,ctx);
	terra = new Terrain(ter_ctx,0,0);
	key = [];
	ship.draw();
	terra.draw();
	render();
}

document.addEventListener("keydown",onKeyDown);
document.addEventListener("keyup",onKeyUp);


function onKeyDown(evt){
	key[evt.key]=true;
	time_elapsed(timer)
}

function onKeyUp(evt){
	key[evt.key]=false;
	pressing_time=0;
	moves = null;
	start_timer=null;
}

function moving_ship(){
	if(key["ArrowUp"]){
		moves = new Vector2d(0,-0.02*pressing_time);
	}
	if(key["ArrowLeft"]){
		//ship.setAngle(ship.getAngle()+(1.5*Math.PI/180));
		ship.rotate(1.5*Math.PI/180);
	}
	else if(key["ArrowRight"]){
		ship.rotate(-1.5*Math.PI/180);
	}
}

function moving_terrain(){
	if(key["ArrowUp"]){
		moves = new Vector2d(0,+0.02*pressing_time);
	}
	if(key["ArrowLeft"]){
		terra.setAngle(terra.getAngle()-(1.5*Math.PI/180));
	}
	else if(key["ArrowRight"]){
		terra.setAngle(terra.getAngle()+(1.5*Math.PI/180));
	}
}

function render(timestamp){
	timer = timestamp;
	if(!zoomed){
		moving_ship();
		ship.move(moves);
		ship.draw();
		
	}
	else{
		moving_terrain();
		terra.move(moves);
		terra.draw();
	}
	if (ship.getAltitude()<10 && !zoomed){
		zoom();
	} 
	else{
		requestAnimationFrame(render);	
	}
	
}

function time_elapsed(timestamp){
	if(!start_timer) start_timer = timestamp;
	pressing_time = (timestamp - start_timer)/100;
}

function zoom(){

	ship.setX(window.innerWidth/2);
	ship.setY(window.innerHeight/2);
	ship.setSize(50);
	ship.setAngle(0);
	ship.draw();

	terra.setSize(window.innerWidth*2,window.innerHeight*2);
	terra.setX(-(ship.getX()));
	terra.setY(-(ship.getY()));

	zoomed=true;
}