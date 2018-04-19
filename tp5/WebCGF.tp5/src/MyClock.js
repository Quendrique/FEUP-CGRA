/**
 * MyClock
 * @constructor
 */
class MyClock extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.materialDefault = new CGFappearance(this.scene);

        this.top = new MyCircle(this.scene);
        this.body = new MyCylinder(this.scene);
        this.minutes = new MyClockHand(this.scene, 0.055, 180);
        this.seconds = new MyClockHand(this.scene, 0.05, 270);
        this.hours = new MyClockHand(this.scene, 0.03, 90);

        this.topAppearance = new CGFappearance(this.scene);
        this.topAppearance.loadTexture('../resources/images/clock.png');

    };

    display()
    {
        //body
        this.scene.pushMatrix();
        this.scene.scale(0.1, 0.1, 0.1);
        this.body.display();
        this.scene.popMatrix();

        //face
        this.scene.pushMatrix();
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.translate(0,0,1);
        this.topAppearance.apply();
        this.top.display();
        this.scene.popMatrix();

        //hands
        this.scene.pushMatrix();
        this.materialDefault.apply();
        this.scene.translate(0,0,0.1);
        this.seconds.display();
        this.minutes.display();
        this.hours.display();
        this.scene.popMatrix();

    };

    update(currTime) {

        let time = currTime/1000; //working with ms

        let secAngle = (this.seconds.angle + time*360/60)%360;
        let minAngle = (this.minutes.angle + time*360/60/60)%360;
        let hourAngle = (this.hours.angle + time*360/60/60/12)%360;

        this.seconds.setAngle(secAngle);
        this.minutes.setAngle(minAngle);
        this.hours.setAngle(hourAngle);

    }
};
