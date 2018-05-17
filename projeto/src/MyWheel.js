/**
 * MyWheel
 * @constructor
 */

class MyWheel extends CGFobject
{
	constructor(scene){
		super(scene);
		this.cylinder = new MyCylinder(this.scene,20,1);
		this.circle = new MyCircle(this.scene);

		this.wheelAppearance = new CGFappearance(this.scene);
        this.wheelAppearance.loadTexture("../resources/images/tire.jpg");
        this.wheelAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.wheelAppearance.setSpecular(0.6,0.6,0.6,1);
        this.wheelAppearance.setAmbient(0.6,0.6,0.6);
        this.wheelAppearance.setShininess(10);

        this.circleAppearance = new CGFappearance(this.scene);
        this.circleAppearance.loadTexture("../resources/images/rims.jpg");
        this.circleAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.circleAppearance.setSpecular(0.6,0.6,0.6,1);
        this.circleAppearance.setAmbient(0.6,0.6,0.6);
        this.circleAppearance.setShininess(10);
	}

	display(){

        var degToRad = Math.PI / 180.0;

	    this.scene.pushMatrix();
	    this.scene.rotate(90*degToRad,0, 1,0);
	    this.wheelAppearance.apply();
		this.cylinder.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(90*degToRad,0, 1,0);
		this.circleAppearance.apply();
		this.circle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1, 0, 0);
		this.scene.rotate(90*degToRad,0, 1,0);
		this.circleAppearance.apply();
		this.circle.display();
		this.scene.popMatrix();
	}
};