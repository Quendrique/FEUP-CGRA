/**
 * MyCraneArm
 * @constructor
 */
class MyCraneArm extends CGFobject
{
    constructor(scene, a)
    {
        super(scene);

        this.a = a || Math.PI/4;

        this.angle = 0;

        this.arm = new MyCylinder(this.scene, 4, 1, 0, 1, 0, 1);
        this.armtop = new MyCircle(this.scene, 4);
        this.chain = new MyCylinder(this.scene, 30, 1, 0, 1, 0, 1);
        this.magnet = new MyCylinder(this.scene, 30, 1, 0, 1, 0, 1);
        this.magnettop = new MyCircle(this.scene, 30);
        this.magnetbottom = new MyCircle(this.scene, 30);

        this.armAppearance = new CGFappearance(this.scene);
        this.armAppearance.loadTexture("../resources/images/craneArm.jpg");

        this.metalAppearance = new CGFappearance(this.scene);
        this.metalAppearance.loadTexture("../resources/images/craneBase.jpg");

    };

    setAngle(angle){
	    this.angle = angle;
	}

    display()
    {

        let angle = Math.PI/2 - this.a;
        let ca_size = 7;
        let ba_size = 10;

        this.armAppearance.apply();

        //ARM
        this.scene.pushMatrix();
            this.scene.translate(-(ba_size-0.2)*Math.cos(angle), (ba_size-0.2)*Math.sin(angle)+0.5, 0);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(this.angle, 1, 0, 0);
            this.scene.scale(0.5, 0.5, ca_size);
            this.arm.display();
        this.scene.popMatrix();


        //ARM TOP
        this.scene.pushMatrix();
            this.scene.translate(-(ba_size-0.2)*Math.cos(angle), (ba_size-0.2)*Math.sin(angle)+0.5, 0);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(this.angle, 1, 0, 0);
            this.scene.translate(0, 0, ca_size);
            this.scene.scale(0.5, 0.5, ca_size);
            this.armtop.display();
        this.scene.popMatrix();

        this.metalAppearance.apply();

        //CHAIN
        this.scene.pushMatrix();
            this.scene.translate(-(ba_size-0.2)*Math.cos(angle), (ba_size-0.2)*Math.sin(angle)+0.5, 0);
            this.scene.translate(-ca_size*Math.cos(this.angle), -ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-this.angle, 0, 0, 1);
            this.scene.translate(ca_size*Math.cos(this.angle), ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(this.angle, 1, 0, 0);
            this.scene.translate(0, -4, ca_size-0.1);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.scene.scale(0.05, 0.05, 4);
            this.chain.display();
        this.scene.popMatrix();

        //MAGNET
        this.scene.pushMatrix();
            this.scene.translate(-(ba_size-0.2)*Math.cos(angle), (ba_size-0.2)*Math.sin(angle)+0.5, 0);
            this.scene.translate(-ca_size*Math.cos(this.angle), -ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-this.angle, 0, 0, 1);
            this.scene.translate(ca_size*Math.cos(this.angle), ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(this.angle, 1, 0, 0);
            this.scene.translate(0, -4.5, ca_size-0.1);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.scene.scale(1.5, 1.5, 0.6);
            this.magnet.display();
        this.scene.popMatrix();

        //MAGNET TOP
        this.scene.pushMatrix();
            this.scene.translate(-(ba_size-0.2)*Math.cos(angle), (ba_size-0.2)*Math.sin(angle)+0.5, 0);
            this.scene.translate(-ca_size*Math.cos(this.angle), -ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-this.angle, 0, 0, 1);
            this.scene.translate(ca_size*Math.cos(this.angle), ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(this.angle, 1, 0, 0);
            this.scene.translate(0, -3.9, ca_size-0.1);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.scene.scale(1.5, 1.5, 0);
            this.magnettop.display();
        this.scene.popMatrix();

        //MAGNET BOTTOM
        this.scene.pushMatrix();
            this.scene.translate(-(ba_size-0.2)*Math.cos(angle), (ba_size-0.2)*Math.sin(angle)+0.5, 0);
            this.scene.translate(-ca_size*Math.cos(this.angle), -ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-this.angle, 0, 0, 1);
            this.scene.translate(ca_size*Math.cos(this.angle), ca_size*Math.sin(this.angle), 0);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(this.angle, 1, 0, 0);
            this.scene.translate(0, -4.5, ca_size-0.1);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.scene.rotate(-Math.PI, 1, 0, 0);
            this.scene.scale(1.5, 1.5, 0);
            this.magnetbottom.display();
        this.scene.popMatrix();
    };

};