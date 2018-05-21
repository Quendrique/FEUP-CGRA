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
        this.bar = new MyCylinder(scene, 12, 3);

        //this.mirrorAppearance = new CGFappearance(this.scene); 

    };

    display()
    {

        //this.mirrorAppearance.apply(); 

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
        this.scene.scale(0.05, 0.45, 0.05);
        this.scene.rotate(((-90 * Math.PI)/180),1,0,0);
        this.bar.display();
        this.scene.popMatrix();


    };

};