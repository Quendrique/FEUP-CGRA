/**
 * MyTable
 * @constructor
 */
class MyTable extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.materialDefault = new CGFappearance(this.scene);

        //tampo material
        this.tableAppearence = new CGFappearance(scene);
        this.tableAppearence.setAmbient(0.1,0.1,0.1,0.1,1);
        this.tableAppearence.setDiffuse(0.2,0.2,0.2,1);
        this.tableAppearence.setSpecular(0.304,0.1608,0.104,0);
        this.tableAppearence.setShininess(0);
        this.tableAppearence.loadTexture('../resources/images/table.png');

        //pernas material
        this.materialB = new CGFappearance(scene);
        this.materialB.setAmbient(0.5,0.5,0.5,0.5,1);
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
        this.tableAppearence.apply();
        this.scene.translate(0, 3.5, 0);
        this.scene.scale(5, 0.3, 3);
        this.myUnitCubeQuad.display();
        this.scene.popMatrix();
    };
};
