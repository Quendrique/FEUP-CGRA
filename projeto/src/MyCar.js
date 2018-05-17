/**
 * MyCar
 * @constructor
 */
class MyCar extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.body = new MyTrapezoid(scene, 1, 5, 5, 2, 2);
        this.top = new MyTrapezoid(scene, 1, 2, 2.5, 1.50, 2);
        this.wheel = new MyWheel(scene);
        this.headlight = new MyHeadlight(scene);
        this.mirror = new MySemiSphere(scene);
    };

    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.top.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.body.display();
        this.scene.popMatrix();

        //front wheels

        this.scene.pushMatrix();
        this.scene.translate(1.5,-0.45,.575);
        this.scene.rotate(((-90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.45,0.45,0.45);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5,-0.45,-.575);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.45,0.45,0.45);
        this.wheel.display();
        this.scene.popMatrix();

        //back wheels

        this.scene.pushMatrix();
        this.scene.translate(-1.5,-0.45,.575);
        this.scene.rotate(((-90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.45,0.45,0.45);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.5,-0.45,-.575);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.45,0.45,0.45);
        this.wheel.display();
        this.scene.popMatrix();

        //headlights

        this.scene.pushMatrix();
        this.scene.translate(2.45,0.25,0.75);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.headlight.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.45,0.25,-0.75);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.headlight.display();
        this.scene.popMatrix();

        //rear-view mirrors

        this.scene.pushMatrix();
        this.scene.translate(1.20,0.65,1.15);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.15,0.15,0.15);
        this.mirror.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.20,0.65,-1.15);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.15,0.15,0.15);
        this.mirror.display();
        this.scene.popMatrix();

        //antenna
    };
};
