/**
 * MyCar
 * @constructor
 */
class MyCar extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.body = new MyTrapezoid(scene, 0.75, 4, 4, 2, 2);
        this.top = new MyTrapezoid(scene, .8, 2, 4, 2, 2);
        this.hood = new MyTrapezoid(scene, 0.45,0.1,3.75,2,2);
        this.front = new MyTrapezoid(scene, 0.5, 2, 2, 2, 2);
        this.wheel = new MyWheel(scene);
        this.mirror = new MyMirror(scene);
        this.headlight = new MyTrapezoid(scene, 1, 1, 2.25, 1, 1);
        this.foglight = new MyTrapezoid(scene, 1, 2, 2, 1, 1);
        this.stoplight = new MyTrapezoid(scene, 1, 2, 2, 1, 1);

        this.wheelAppearance = new CGFappearance(this.scene);
        this.wheelAppearance.loadTexture("../resources/images/logo.jpeg");

    };

    display()
    {

        //chassis

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0.775,0);
        this.top.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.body.display();
        this.scene.popMatrix();

        //hood

        this.scene.pushMatrix();
        this.scene.translate(1.125,0.35,0);
        this.hood.display();
        this.scene.popMatrix();

        //front

        this.scene.pushMatrix();
        this.scene.translate(2,-0.125,0);
        this.front.display();
        this.scene.popMatrix();

        //headlights

        this.scene.pushMatrix();
        this.scene.translate(2.85,0.095,-0.75);
        this.scene.rotate(((90 * Math.PI)/180),0,0,1);
        this.scene.scale(0.2,0.2,0.3);
        this.headlight.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.85,0.095,0.75);
        this.scene.rotate(((90 * Math.PI)/180),0,0,1);
        this.scene.scale(0.2,0.2,0.3);
        this.headlight.display();
        this.scene.popMatrix();

        //fog lights

        this.scene.pushMatrix();
        this.scene.translate(2.925,-0.25,-0.75);
        this.scene.scale(0.1,0.1,0.2);
        this.foglight.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.925,-0.25,0.75);
        this.scene.scale(0.1,0.1,0.2);
        this.foglight.display();
        this.scene.popMatrix();

        //stop lights

        this.scene.pushMatrix();
        this.scene.translate(-2.45,0.235,-0.875);
        this.scene.scale(0.075,0.3,0.3);
        this.stoplight.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.45,0.235,0.875);
        this.scene.scale(0.075,0.3,0.3);
        this.stoplight.display();
        this.scene.popMatrix();

        //rear-view mirrors

        this.scene.pushMatrix();
        this.scene.translate(1.1,0.625,1.20);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.35,0.35,0.35);
        this.mirror.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.1,0.625,-1.20);
        this.scene.rotate(((-90 * Math.PI)/180),1,0,0);
        this.scene.rotate(((90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.35,0.35,0.35);
        this.mirror.display();
        this.scene.popMatrix();

        //front wheels

        this.scene.pushMatrix();
        this.scene.translate(2,-0.45,.575);
        this.scene.rotate(((-90 * Math.PI)/180),0,1,0);
        this.scene.scale(0.45,0.45,0.45);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-0.45,-.575);
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
    };
};
