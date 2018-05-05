/**
 * MyWheel
 * @constructor
 */

class MyWheel extends CGFobject
{
	constructor(scene){
		super(scene);
		this.cylinder = new MyCylinder(this.scene,100,1);
		this.circle = new MyCircle(this.scene);
	}

	display(){

        var degToRad = Math.PI / 180.0;

	    this.scene.pushMatrix();
	    this.scene.rotate(90*degToRad,0, 1,0);
		this.cylinder.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(90*degToRad,0, 1,0);
		this.circle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1, 0, 0);
		this.scene.rotate(90*degToRad,0, 1,0);
		this.circle.display();
		this.scene.popMatrix();
	}
};