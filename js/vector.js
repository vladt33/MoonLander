function Vettore(ang, inte) {

	/* private attributes */
	var ang = ang;
	var intensity = inte;
	
	/* private functions */

	function getAngle(a, b) {
		return Math.atan((a[1] + b[1]) / (a[0] + b[0]));
	}

	function getDistance(a, b) {
		return Math.sqrt(Math.round(a[0] - b[0], 2) + Math.round(a[0] - b[0], 2));
	}

	/* public methods */
	this.getAngle = ang;

	this.getIntensity = intensity;

	this.setAngle = function (num) {
		ang = num;
	}

	this.setIntensity = function (num) {
		intensity = num;
	}

	this.get = function() {
		return {angle : ang, intensity : intensity};
	}

	this.set = function(Vector) {
		ang = Vector.angle;
		intensity = Vector.intensity;
	}

	this.getComponents = function(){
		return {x : (Math.cos(ang) * intensity), y : (Math.sin(ang) * intensity)};
	};

	this.add = function(v) {
		var vc = v.getComponents();
		var sc = this.getComponents();
		var angle = getAngle(sc,vc);
		var intensit = Math.sqrt(Math.pow(sc[0], 2) + Math.pow(sc[1], 2)); //
	};

	this.symmetricalTo = function(ang_asse) {
		ang = ang_asse - ang + ang_asse;
	};

	this.equals = function(vect){
		var vc = vect.getComponents();
		var sc = this.getComponents();
		if(sc[0]==vc[0] && sc[1]==vc[1]){
			return true;
		}
		return false;
	}

	this.toString = function(){
		var s = "";
		var coord = this.getComponents()
		return "Vector \nang :" + ang +"\nintensity : " + intensity + "\ncoord: " + coord[0] +" " + coord[1];
	}

	return this;
};