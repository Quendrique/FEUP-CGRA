/**
 * MyCrane
 * @constructor
 */
class MyBaseArm extends CGFobject
{
    constructor(scene, angle)
    {
        super(scene);

        this.angle = angle || Math.PI/4;

        this.arm = new MyCylinder(this.scene, 4, 1, 0, 1, 0, 1);

        this.joint = new MyCylinder(this.scene, 30, 1, 0, 1, 0, 1);
        this.jointtop = new MyCircle(this.scene);
        this.jointbottom = new MyCircle(this.scene);

        this.armAppearance = new CGFappearance(this.scene);
        this.armAppearance.loadTexture("../resources/images/craneArm.jpg");

        this.metalAppearance = new CGFappearance(this.scene);
        this.metalAppearance.loadTexture("../resources/images/craneBase.jpg");
    };

    display()
    {

        this.armAppearance.apply();

        //ARM
        this.scene.pushMatrix();
            this.scene.rotate(this.angle, 0, 0, 1);
            this.scene.rotate(Math.PI/2, -1, 0, 0);
            this.scene.scale(0.5, 0.5, 10);
            this.arm.display();
        this.scene.popMatrix();

        this.metalAppearance.apply();

        //joint
        this.scene.pushMatrix();
            this.scene.rotate(this.angle, 0, 0, 1);
            this.scene.translate(0, 9.8, 0.6);
            this.scene.scale(1, 1, 1.2);
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.joint.display();
        this.scene.popMatrix();

        //jointtop
        this.scene.pushMatrix();
            this.scene.rotate(this.angle, 0, 0, 1);
            this.scene.translate(0, 9.8, 0.6);
            this.jointtop.display();
        this.scene.popMatrix();

        //jointbottom
        this.scene.pushMatrix();
            this.scene.rotate(this.angle, 0, 0, 1);
            this.scene.translate(0, 9.8, -0.6);
            this.scene.rotate(Math.PI, 1, 0, 0);
            this.jointbottom.display();
        this.scene.popMatrix();
    };
};