function Terrain(ctx,x,y){
	var x = x;
	var y = y;
	var img = new Image();
	img.src="./img/Landscape.png";
	var context = ctx;
	var img_width = window.innerWidth;
	var img_height = window.innerHeight;
	var centerX = window.innerWidth/2;
	var centerY = window.innerHeight/2;

	this.setSize = function(new_width,new_height){
		img_width = new_width;
		img_height = new_height;
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

	this.setCenterX = function(new_x){
		centerX = new_x
	}

	this.setCenterY = function(new_y){
		centerY = new_y
	}

	this.draw = function(){
		ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
		ctx.drawImage(img,x-centerX,y-centerY,img_width,img_height);
	}
}