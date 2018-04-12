/**
 * MyClockHand
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene, angle){
		super(scene);
		this.angle = angle;
		this.cylinder = new MyCylinder(this.scene);
	}

	setAngle(angle){
	    this.angle = angle;
	}

	display()
	{
	    var degToRad = Math.PI / 180.0;

	    this.scene.pushMatrix();
	    this.scene.scale(0.005, 0.005, 0.005);
	    this.scene.rotate(-90 * degToRad, 1, 0, 0);
	    this.cylinder.display();
	    this.scene.popMatrix();
	}
};