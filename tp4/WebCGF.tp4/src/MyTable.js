/**
 * MyTable
 * @constructor
 */
 class MyTable extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);

        this.materialDefault = new CGFappearance(this);

		//tampo material
		this.materialA = new CGFappearance(scene);
		this.materialA.setAmbient(109,57,27.3,1);
		this.materialA.setDiffuse(0.6,0.6,0.6,1);
		this.materialA.setSpecular(0.304,0.1608,0.104,0);
		this.materialA.setShininess(0);

		//pernas material
		this.materialB = new CGFappearance(scene);
		this.materialB.setAmbient(109,57,27.3,1);
		this.materialB.setDiffuse(0.6,0.6,0.6,1);
		this.materialB.setSpecular(20,20,20,1);
		this.materialB.setShininess(20);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
	};

	display()
	{

       // this.materialDefault.apply();

		// legs
		this.scene.pushMatrix();
		this.materialB.apply();
		this.scene.translate(2, 3.5 / 2, 1);
		this.scene.scale(0.3, 3.5, 0.3);
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
		this.materialA.apply();
		this.scene.translate(0, 3.5, 0);
		this.scene.scale(5, 0.3, 3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();
	};
 };

