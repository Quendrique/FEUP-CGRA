/**
 * MyMudguard
 * @constructor
 */
class MyMudguard extends CGFobject
{
    constructor(scene)
    {
        super(scene);
        this.initBuffers();
    };
    
    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var numDivs = 20;
        var angle = (Math.PI) / numDivs;

        this.vertices.push(0.5,0.5,0); //aux vertex (0)
        this.normals.push(0, 0, 1);
        this.vertices.push(-0.5,0.5,0); //aux vertex (1)
        this.normals.push(0, 0, 1);
        this.vertices.push(0.5,0,0); //first vertex
        this.normals.push(0, 0, 1);

        for(var i = 2; i <= numDivs; i++) {
            this.vertices.push((Math.cos(angle))/2, (Math.sin(angle))/2, 0);
            angle += (Math.PI) / numDivs;
            if (i <= numDivs/2) {
                this.indices.push(i + 1, i, 0);
            } else {
                this.indices.push(i + 1, i, 1   );
            }
            this.normals.push(0, 0, 1);
        }


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

    }

}