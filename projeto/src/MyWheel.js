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

        this.rimAppearance = new CGFappearance(this.scene);
        this.rimAppearance.loadTexture("../resources/images/rims.jpg");
        this.rimAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.rimAppearance.setSpecular(0.6,0.6,0.6,1);
        this.rimAppearance.setAmbient(0.6,0.6,0.6);
        this.rimAppearance.setShininess(10);
	}

	display(){

        var degToRad = Math.PI / 180.0;

        this.wheelAppearance.apply();
        
        //tire

	    this.scene.pushMatrix();
            this.scene.rotate(90*degToRad,0, 1,0);
            this.cylinder.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
            this.scene.rotate(-90*degToRad,0, 1,0);
            this.circle.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
            this.scene.translate(1, 0, 0);
            this.scene.rotate(90*degToRad,0, 1,0);
            this.circle.display();
		this.scene.popMatrix();
		
		//rims

        this.rimAppearance.apply();

        this.scene.pushMatrix();
            this.scene.translate(-0.05,0,0);
            this.scene.rotate(90*degToRad,0, 1,0);
            this.scene.scale(0.85 ,0.85, 1.1);
            this.cylinder.display();
        this.scene.popMatrix();

        this.rimAppearance.apply();

        this.scene.pushMatrix();
            this.scene.translate(-0.05, 0, 0);
            this.scene.rotate(-90*degToRad,0, 1,0);
            this.scene.scale(0.85 ,0.85, 1.1);
            this.circle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1.05, 0, 0);
            this.scene.rotate(90*degToRad,0, 1,0);
            this.scene.scale(0.85 ,0.85, 1.1);
            this.circle.display();
        this.scene.popMatrix();
		
		
	}
};