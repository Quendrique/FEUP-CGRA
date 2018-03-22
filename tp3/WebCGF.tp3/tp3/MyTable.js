/**
 * MyTable
 * @constructor
 */
 class MyTable extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);

		this.materialTop = new CGFappearance(this.scene);
		this.materialTop.setAmbient(0.3,0.3,0.3,1);
		this.materialTop.setDiffuse(160.0/250.0,82.0/250.0,45.0/250,1);
		this.materialTop.setSpecular(0.2,0.2,0.2,0.2);
		this.materialTop.setShininess(20);

		this.materialLegs = new CGFappearance(this.scene);
		this.materialLegs.setAmbient(0.3,0.3,0.3,1);
		this.materialLegs.setDiffuse(105.0/250.0,105.0/250.0,105.0/250.0,1);
		this.materialLegs.setSpecular(1,1,1,0.8);
		this.materialLegs.setShininess(200);
		
	};

	display() 
	{
		// legs
		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.materialLegs.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 3.5 / 2, -1);
		this.scene.scale(0.3, 3.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		// table top
		this.scene.pushMatrix();
		this.scene.translate(0, 3.5, 0);
		this.scene.scale(5, 0.3, 3);
		this.materialTop.apply();
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();
	};
 };

