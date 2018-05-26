
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) and dimensions 50x50 */
class MyTerrain extends CGFobject{

	constructor(scene, nrDivs, altimetry)
	{
		super(scene);
		this.terrain = new Plane(this.scene, nrDivs, altimetry); 

		this.floorAppearance = new CGFappearance(this.scene);
        this.floorAppearance.loadTexture("../resources/images/floor.jpg");
        this.floorAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.floorAppearance.setSpecular(0.6,0.6,0.6,1);
        this.floorAppearance.setAmbient(0.6,0.6,0.6);
        this.floorAppearance.setShininess(120);
	}

	display(){
	    this.scene.pushMatrix();
			this.floorAppearance.apply();
			this.scene.rotate(-90*degToRad,1,0,0);
			this.scene.scale(50, 50, 1);
			this.terrain.display();
	    this.scene.popMatrix();
	}

};