/**
 * MyCar
 * @constructor
 */
class MyCar extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.materialDefault = new CGFappearance(this.scene);

        this.body = new MyTrapezoid(scene, 0.50, 4, 4, 2, 2);
        this.top = new MyTrapezoid(scene, .8, 2, 4, 1.75, 2);
        this.hood = new MyPyramid(scene, 0.25, 1.5, 2);
        this.front = new MyTrapezoid(scene, 0.25, 1.5, 1.5, 2, 2);
        this.bottom = new MyTrapezoid(scene, 0.25, 5, 5.5, 2, 2);
        this.wheel = new MyWheel(scene);
        this.mirror = new MyMirror(scene);
        this.headlightCover = new MyTrapezoid(scene, 1, 1, 2.25, 1, 1);
        this.headlight = new MyTrapezoid(scene, 0.5, 1.5, 1, 1);
        this.foglight = new MyTrapezoid(scene, 1, 2, 2, 1, 1);
        this.stoplight = new MyTrapezoid(scene, 1, 2, 2, 1, 1);
        this.windshield = new MyTrapezoid(scene, .8, 2, 4, 1.75, 2);

        this.wheelAppearance = new CGFappearance(this.scene);
        this.wheelAppearance.loadTexture("../resources/images/logo.jpeg");

        this.stoplightAppearance = new CGFappearance(this.scene);
        this.stoplightAppearance.loadTexture("../resources/images/stoplight.jpeg");
        this.stoplightAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.stoplightAppearance.setSpecular(0.6,0.6,0.6,1);
        this.stoplightAppearance.setAmbient(0.6,0.6,0.6);
        this.stoplightAppearance.setShininess(120);

        this.headlightAppearance = new CGFappearance(this.scene);
        this.headlightAppearance.loadTexture("../resources/images/headlight.jpeg");
        this.headlightAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.headlightAppearance.setSpecular(0.6,0.6,0.6,1);
        this.headlightAppearance.setAmbient(0.6,0.6,0.6);
        this.headlightAppearance.setShininess(120);

        this.foglightAppearance = new CGFappearance(this.scene);
        this.foglightAppearance.loadTexture("../resources/images/foglight.jpg");
        this.foglightAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.foglightAppearance.setSpecular(0.6,0.6,0.6,1);
        this.foglightAppearance.setAmbient(0.6,0.6,0.6);
        this.foglightAppearance.setShininess(120);

        this.windshieldAppearance = new CGFappearance(this.scene);
        this.windshieldAppearance.loadTexture("../resources/images/tintedWindows.png");
        this.windshieldAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.windshieldAppearance.setSpecular(0.6,0.6,0.6,1);
        this.windshieldAppearance.setAmbient(0.6,0.6,0.6);
        this.windshieldAppearance.setShininess(120);

        this.xPosition = 0;
        this.yPosition = 0;
        this.zPosition = 0;
        this.velocity = 0;
        this.steer = 0;

        this.wheelAngle = 0;
        this.wheelAngleRot = 0;
        this.turnLeft = false;
        this.turnRight = false;

        this.maxVelocity = 4;

    };

    display()
    {
        //chassis

        this.scene.pushMatrix();
            this.scene.translate(-0.5,0.775,0);
            this.top.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.5,0.125,0);
            this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0.25,-0.25,0);
            this.scene.rotate(Math.PI,0,0,1);
            this.bottom.display();
        this.scene.popMatrix();

        //hood

        this.scene.pushMatrix();
            this.scene.translate(2.25,0.25,0);
            this.hood.display();
        this.scene.popMatrix();

        //front

        this.scene.pushMatrix();
            this.scene.translate(2.25,0,0);
            this.front.display();
        this.scene.popMatrix();

        //headlight cover

        this.scene.pushMatrix();
            this.scene.translate(2.85,0.095,-0.75);
            this.scene.rotate(((90 * Math.PI)/180),0,0,1);
            this.scene.scale(0.2,0.2,0.3);
            this.headlightCover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(2.85,0.095,0.75);
            this.scene.rotate(((90 * Math.PI)/180),0,0,1);
            this.scene.scale(0.2,0.2,0.3);
            this.headlightCover.display();
        this.scene.popMatrix();

        //rear-view mirrors

        this.scene.pushMatrix();
            this.scene.translate(1.1,0.56,1.20);
            this.scene.rotate(((90 * Math.PI)/180),0,1,0);
            this.scene.scale(0.35,0.35,0.35);
            this.mirror.display();
        this.scene.popMatrix();

        this.materialDefault.apply();

        this.scene.pushMatrix();
            this.scene.translate(1.1,0.56,-1.20);
            this.scene.rotate(((-90 * Math.PI)/180),1,0,0);
            this.scene.rotate(((90 * Math.PI)/180),0,1,0);
            this.scene.scale(0.35,0.35,0.35);
            this.mirror.display();
        this.scene.popMatrix();

        //front and rear windshields

        this.windshieldAppearance.apply();

        this.scene.pushMatrix();
            this.scene.translate(-0.335,0.775,0);
            this.scene.scale(0.9,0.9,0.9);
            this.windshield.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.335-0.325,0.775,0);
            this.scene.scale(0.9,0.9,0.9);
            this.windshield.display();
        this.scene.popMatrix();

        //side windows

        this.scene.pushMatrix();
            this.scene.translate(-0.5,0.775,0.1);
            this.scene.scale(0.9,0.9,0.9);
            this.windshield.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.5,0.775,-0.1);
            this.scene.scale(0.9,0.9,0.9);
            this.windshield.display();
        this.scene.popMatrix();

        //fog lights

        this.foglightAppearance.apply();

        this.scene.pushMatrix();
            this.scene.translate(2.8,-0.25,-0.75);
            this.scene.scale(0.1,0.1,0.2);
            this.foglight.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(2.8,-0.25,0.75);
            this.scene.scale(0.1,0.1,0.2);
            this.foglight.display();
        this.scene.popMatrix();

        //headlights

        this.headlightAppearance.apply();

        this.scene.pushMatrix();
            this.scene.translate(2.95,0.19,0.75);
            this.scene.rotate(((90 * Math.PI)/180),0,0,1);
            this.scene.scale(0.15,0.1,0.2);
            this.headlight.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
            this.scene.translate(2.95,0.19,-0.75);
            this.scene.rotate(((90 * Math.PI)/180),0,0,1);
            this.scene.scale(0.15,0.1,0.2);
            this.headlight.display();
        this.scene.popMatrix();

        //stop lights

        this.stoplightAppearance.apply();

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

        //front wheels

        this.scene.pushMatrix();
            this.scene.translate(2,-0.45,.575);
            this.scene.rotate(this.wheelAngle,0,1,0);
            this.scene.rotate(this.wheelAngleRot,0,0,1);
            this.scene.rotate(((-90 * Math.PI)/180),0,1,0);
            this.scene.scale(0.45,0.45,0.45);
            this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(2,-0.45,-.575);
            this.scene.rotate(this.wheelAngle,0,1,0);
            this.scene.rotate(this.wheelAngleRot,0,0,1);
            this.scene.rotate(((90 * Math.PI)/180),0,1,0);
            this.scene.scale(0.45,0.45,0.45);
            this.wheel.display();
        this.scene.popMatrix();

        //back wheels

        this.scene.pushMatrix();
            this.scene.translate(-1.5,-0.45,.575);
            this.scene.rotate(this.wheelAngleRot,0,0,1);
            this.scene.rotate(((-90 * Math.PI)/180),0,1,0);
            this.scene.scale(0.45,0.45,0.45);
            this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1.5,-0.45,-.575);
            this.scene.rotate(this.wheelAngleRot,0,0,1);
            this.scene.rotate(((90 * Math.PI)/180),0,1,0);
            this.scene.scale(0.45,0.45,0.45);
            this.wheel.display();
        this.scene.popMatrix();

    };

    setYPosition(y) {
        this.yPosition = y;
    }

    setXPosition(x) {
        this.xPosition = x;

    }

    getXPosition() {
        return this.xPosition;
    }

    setZPosition(z) {
        this.xPosition = z;

    }

    getZPosition() {
        return this.zPosition;
    }

    getSteer() {
        return this.steer;
    }

    setSteer(steer) {
        this.steer = steer;
    }

    resetSteering() {
        this.wheelAngle = 0;
    }

    move(direction, speed, deltaTime) {

        if (direction === 'W' && this.velocity < this.maxVelocity) {
            this.velocity += deltaTime * speed;
        } else if (direction === 'S' && this.velocity > -this.maxVelocity) {
            this.velocity -= deltaTime * speed;
        }

        if (direction === 'D') {
            this.steer += (deltaTime*0.75);
            this.turnRight = true;
            this.turnLeft = false;
        } else if (direction === 'A') {
            this.steer -= (deltaTime*0.75);
            this.turnLeft = true;
            this.turnRight = false;
        } else {
            this.turnLeft = false;
            this.turnRight = false;
        }

        if (this.turnRight) {
            this.wheelAngle = -((20*Math.PI)/180);
        } else if (this.turnLeft) {
            this.wheelAngle = ((20*Math.PI)/180);
        } else {
            this.wheelAngle = 0;
        }


    };

    updatePos(deltaTime) {
        this.xPosition += deltaTime * this.velocity * Math.cos(this.steer);
        this.zPosition += deltaTime * this.velocity * Math.sin(this.steer);
    };

    rotateWheels(deltaTime, velocity) {
        let ang = -(velocity/0.45)*deltaTime;
        this.wheelAngleRot  = (this.wheelAngleRot + ang) % 360;
    };


}
