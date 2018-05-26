/**
 * MyMirror
 * @constructor
 */
class MyMirror extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.materialDefault = new CGFappearance(this.scene);

        this.top = new MyCircle(scene);
        this.body = new MySemiSphere(scene);
        this.bar = new MyCylinder(scene, 50, 3);
        this.mirror = new MyCylinder(scene, 50, 1);
        this.mirrorFace = new MyCircle(scene);

        this.mirrorAppearance = new CGFappearance(this.scene);
        this.mirrorAppearance.loadTexture("../resources/images/mirrors.jpg");
        this.mirrorAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.mirrorAppearance.setSpecular(0.6,0.6,0.6,1);
        this.mirrorAppearance.setAmbient(0.6,0.6,0.6);
        this.mirrorAppearance.setShininess(120);

        this.metalAppearance = new CGFappearance(this.scene);
        this.metalAppearance.setDiffuse(0.5,0.5,0.5,1);
        this.metalAppearance.setSpecular(1,1,1,1);
        this.metalAppearance.setAmbient(0.1,0.1,0.1);
        this.metalAppearance.setShininess(200);

    };

    display()
    {

        this.metalAppearance.apply();

        //body
        this.scene.pushMatrix();
            this.scene.scale(0.5, 0.5, 0.5);
            this.body.display();
        this.scene.popMatrix();

        //face
        this.scene.pushMatrix();
            this.scene.rotate(((-180 * Math.PI)/180),0,1,0);
            this.scene.scale(0.5, 0.5, 0.5);
            this.top.display();
        this.scene.popMatrix();

        //bar
        this.scene.pushMatrix();
            this.scene.translate(0.7,-0.6,0.43);
            this.scene.rotate(((50 * Math.PI)/180),0,0,1);
            this.scene.scale(0.05, 0.8, 0.05);
            this.scene.rotate(((-90 * Math.PI)/180),1,0,0);
            this.bar.display();
        this.scene.popMatrix();

        //mirror

        this.mirrorAppearance.apply();

        this.scene.pushMatrix();
            this.scene.translate(0,0,-0.025);
            this.scene.scale(0.45, 0.45, 0.1);
            this.mirror.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(0,0,-0.025);
            this.scene.rotate(((-180 * Math.PI)/180),0,1,0);
            this.scene.scale(0.45, 0.45, 0.1);
            this.mirrorFace.display();
        this.scene.popMatrix();

    };

};