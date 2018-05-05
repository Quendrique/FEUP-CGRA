/**
 * MyVehicle
 * @constructor
 */

class MyVehicle extends CGFobject
{
	constructor(scene){
		super(scene);
		this.wheel = new MyWheel(this.scene);
		this.chassis = new MyChassis(this.scene);
		this.rearViewMirror = new MySemiSphere(this.scene, 100, 100);
	}

	display(){
	    
	}
};