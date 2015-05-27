function Terrain(ctx,x,y){
	var x = x;
	var y = y;
	var img = new Image();
	img.src="./img/Landscape.png";
	var context = ctx;
	ctx.drawImage(img,0,0);
	var img_width = window.innerWidth;
	var img_height = window.innerHeight;
	var final_move = new Vector2d(0,-1.6);
	var angle = 0;
	
	this.setSize = function(width,height){
		img_width = width;
		img_height = height;
	}

	this.getWidth = function(){
		return img_width;
	}

	this.getHeight = function(){
		return img_height;
	}

	this.getX = function(){
		return x;
	}

	this.getY = function(){
		return y;
	}

	this.setX = function(new_x){
		x = new_x;
	}

	this.setY = function(new_y){
		y = new_y;
	}

	this.getAngle = function(){
		return angle;
	}

	this.setAngle = function(new_ang){
		angle = new_ang;
	}

	this.draw = function(){
		context.clearRect(0,0,window.innerWidth,window.innerHeight);
		this.drawRotate(angle);
	}

	this.move = function(new_vect){
		this.calculate_move(new_vect)
		var coord = final_move.get_components();
		x += coord["x_c"];
		y += coord["y_c"];
	}

	this.calculate_move = function(new_vect){
		var dist;
		if(new_vect && final_move.getY()<=3.6){
				final_move.add(new_vect);
		}
		else{
			if(final_move.getY()>-1.6){
				final_move.add(new Vector2d(0,-0.02));
			}
		}
	}

	this.drawRotate = function(ang){
		ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		ctx.save();
		ctx.translate(x,y);
		ctx.translate(img_width/2,img_height/2);
		ctx.rotate(-ang);
		ctx.drawImage(img,-(img_width/2),-(img_height/2),img_width,img_height);
		ctx.restore();
	}
}