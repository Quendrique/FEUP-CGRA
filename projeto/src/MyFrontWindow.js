/**
 * MyFrontWindow
 * @constructor
 */
class MyFrontWindow extends CGFobject
{
    constructor(scene)
    {
        super(scene);

        this.quad = new MyQuad(this.scene);
    };

    display()
    {
        //front
        this.scene.pushMatrix();
        this.scene.rotate((90 * Math.PI)/180,0,1,0);
        this.scene.rotate((-45 * Math.PI)/180,1,0,0);
        this.quad.display();
        this.scene.popMatrix();

    };
};
