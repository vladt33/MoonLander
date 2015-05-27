function Ship(pos_x,pos_y,fuel,ctx){

	/* private attributes */

	var x = pos_x;
	var y = pos_y;
	var ship_size = 10;
	var angle = 0;
	var fuel = fuel;
	var alt;
	altitude();
	var img = new Image();
	img.src = "./img/SpaceShip.png";
	var final_move = new Vector2d(0,1.6);
	var ctx = ctx;
	ctx.translate(x,y);

	/* private methods */

	function altitude(){
		alt = window.innerHeight - y;
	}

	/* public methods */

	this.getX = function(){
		return x;
	}
	this.getY = function(){
		return y;
	}

	this.setX = function(new_x){
		x = new_x
	}
	this.setY = function(new_y){
		y = new_y
	}

	this.setSize = function(new_size){
		ship_size = new_size;
	}

	this.getAltitude = function(){
		return alt;
	}

	this.setPosition = function(new_x,new_y){
		x = new_x;
		y = new_y;
	}

	this.setAngle = function(new_ang){
		angle = new_ang;
	}

	this.getAngle = function(){
		return angle;
	}

	this.draw = function(){
		// ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		clear();
		// ctx.drawImage(img,x,y,ship_size,ship_size);
		//this.drawRotate(angle);
		ctx.drawImage(img,-(ship_size/2),-(ship_size/2),ship_size,ship_size);
	}

	this.getFinalMove = function(){
		return final_move;
	}

	this.move = function(new_vect){
		this.calculate_move(new_vect);
		var coord = final_move.get_components();
		x += coord["x_c"];
		y += coord["y_c"];
		ctx.translate(0,coord["y_c"]);
		console.log(x+" "+y);
		altitude();
	}

	this.calculate_move = function(new_vect){
		var dist;
		if(new_vect && final_move.getY()>=-3.6){
				final_move.add(new_vect)
		}
		else{
			if(final_move.getY()<0.5){
				final_move.add(new Vector2d(0,0.07));
			}
		}
	}

	this.rotate = function(ang){
		ctx.rotate(ang);
		angle = ang;
	}

	function clear(){
		ctx.save();
		ctx.translate(-(ship_size/2)-5,-(ship_size/2)-5);
		ctx.clearRect(0,0,ship_size+10,ship_size+10);
		ctx.restore();
	}
}