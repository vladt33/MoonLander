var canvas = document.getElementById("ship");
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
var terra;
var zoomed;
var inGame;

function start(){
	ship = new Ship(10,10,300,ctx);
	ship.rotate(-Math.PI/6)
	terra = new Terrain(ter_ctx,(window.innerWidth/2),(window.innerHeight/2));
	key = [];
	ship.draw();
	terra.draw();
	inGame=true;
	render();
}

document.addEventListener("keydown",onKeyDown);
document.addEventListener("keyup",onKeyUp);


function onKeyDown(evt){
	key[evt.key]=true;
}

function onKeyUp(evt){
	key[evt.key]=false;
}

function moving_ship(){
	if(key["ArrowUp"]){
		if(ship.get_moving()<5){
			ship.moving(0.036);
			ship.setSpeed(ship.getSpeed()-0.036);
		}
	}
	else if(ship.get_moving()>0){
		ship.moving(-0.036);
		ship.setSpeed(ship.getSpeed()+0.036);
	}
	if(key["ArrowLeft"]){
		ship.rotate(-1.5*Math.PI/180);
	}
	else if(key["ArrowRight"]){
		ship.rotate(1.5*Math.PI/180);
	}
}

function render(){
	if(inGame){
		ship.draw();
		moving_ship();
		ship.move();
				
		if (ship.getAltitude()<250 && !zoomed){
			zoom();
		}
		else if (ship.getAltitude()>window.innerHeight-30 && zoomed){
			unzoom();
		}
		requestAnimationFrame(render);	
	}
}

function zoom(){
	terra.setCenterX(ship.getX()*2);
	terra.setCenterY(ship.getY()*2);

	ship.setPosition(window.innerWidth/2,window.innerHeight/2);
	ship.setSize(ship.getSize()*2);
	
	ship.draw(true);

	terra.setSize(window.innerWidth*2,window.innerHeight*2);
	
	terra.draw();

	//inGame = false;
	zoomed=true;
}


function unzoom(){
	terra.setCenterX(window.innerWidth/2);
	terra.setCenterY(window.innerHeight/2);
	terra.setSize(window.innerWidth,window.innerHeight);
	terra.draw();

	ship.setPosition(ship.getX(),window.innerHeight-260);
	ship.setSize(ship.getSize()/2)
	ship.draw();


	zoomed = false;

}