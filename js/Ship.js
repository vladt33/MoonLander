function Ship(pos_x,pos_y,fuel,ctx){

	/* private attributes */

	var ctx = ctx;
	var x = pos_x;
	var y = pos_y;
	var ship_size = 10;
	var angle = 0;
	var fuel = fuel;
	var speed = 0;
	var alt;
	altitude();
	var isMoving = 0;
	var img = new Image();

	img.onLoad = function(){
		ctx.drawImage(img,0,0,window.innerWidth,window.innerHeight);
	}

	img.src = "./img/SpaceShip.png";
	var final_move = new Vector2d(0,speed);
	
	ctx.translate(x,y);
	ctx.save();

	/* private methods */

	function altitude(){
		alt = window.innerHeight - y;
	}

	function clear(){
		ctx.save();
		ctx.translate(-ship_size,-ship_size);
		ctx.clearRect(0,0,ship_size*3,ship_size*3);
		ctx.restore();
	}

	/* public methods */

	this.getX = function(){
		return x;
	}
	this.getY = function(){
		return y;
	}

	this.getSpeed = function(){
		return speed;
	}

	this.setSpeed = function(new_speed){
		speed = new_speed;
	}

	this.setX = function(new_x){
		x = new_x
	}

	this.moving = function(n){
		isMoving+=n;
	}

	this.get_moving = function(){
		return isMoving;
	}

	this.setY = function(new_y){
		y = new_y
	}

	this.setSize = function(new_size){
		ship_size = new_size;
	}

	this.getSize=function(){
		return ship_size;
	}

	this.getAltitude = function(){
		return alt;
	}

	this.setPosition = function(new_x,new_y){
		clear();
		ctx.restore();
		ctx.save()
		ctx.translate(new_x,new_y);
		ctx.rotate(angle);
		x = new_x;
		y = new_y;
	}

	this.setAngle = function(new_ang){
		angle = new_ang;
	}

	this.getAngle = function(){
		return angle;
	}

	this.draw = function(zoomed){
		clear();
		ctx.drawImage(img,-(ship_size/2),-(ship_size/2),ship_size,ship_size);
		
	}

	this.getFinalMove = function(){
		return final_move;
	}


	this.set_final_move=function(vect){
		final_move = vect;
	}

	this.falling = function(){
		ctx.rotate(-angle);
		ctx.translate(0,0.6);
		ctx.rotate(angle);
	}

	this.move = function(){ 
		final_move.setY(speed);
		var coord = final_move.get_components();
		x = ctx["mozCurrentTransform"][4];
		y = ctx["mozCurrentTransform"][5];
		if(isMoving>0){
			ctx.translate(0,coord["y_c"]);
		}
		this.falling();
		altitude();
	}

	this.rotate = function(ang){
		ctx.rotate(ang);
		angle += ang;
	}

}