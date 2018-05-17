/**
 * MyHeadlight
 * @constructor
 */
class MyHeadlight extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.materialDefault = new CGFappearance(this.scene);

        this.top = new MyCircle(scene);
        this.body = new MyCylinder(scene,20,1);

        this.headlightAppearance = new CGFappearance(this.scene);

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
        this.top.display();
        this.scene.popMatrix();


    };

};
