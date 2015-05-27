function Vector2d(x,y){
	var x = x;
	var y = y;

	this.getX = function(){
		return x
	}

	this.getY = function(){
		return y
	}

	this.get_components= function(){
		return {x_c : x,y_c:y}
	}

	this.get_magnitude = function(){
		return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
	}

	this.get_angle = function(vect){
		var vc = vect.get_magnitude();
		var th_v = this.get_magnitude();
		return Math.acos(this.dot_product(vect)/(vc*th_v));
	}

	this.dot_product = function(vect){
		return (x*vect.getX())+(y*vect.getY());
	}

	this.negate = function(){
		x = -x;
		y = -y;
	}

	this.multiply=function(k){
		x *= k;
		y *= k;
	}

	this.add = function(vect){
		x += vect.getX();
		y += vect.getY();
	}

	this.sub = function(vect){
		var tmp_vect = vect.negate();
		this.add(tmp_vect);
	}

	this.normalize = function(){
		var dp = this.dot_product();
		this.multiply(1.0/dp);
	}

	this.toString = function(){
		return "Vector\nintensity : " + this.get_magnitude() + "\ncoord x: " + x +" y:" + y;
	}
}

