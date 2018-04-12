/**
 * MyLamp
 * @constructor
 */
class MyLamp extends CGFobject
{
    constructor(scene, slices, stacks){
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers()
    {

        this.vertices = [];
        this.normals = [];
        this.indices = [];

        //alpha in degrees
        var alpha = 360/this.slices;

        //convert to radian
        alpha = (alpha * Math.PI)/180;

        //radius of both surfaces
        var radiusTop = 1;
        var radiusBottom = 1;

        //height of each stack
        var stackHeight = 1/this.stacks;

        var sumalpha = 0;
        var heightSum = 0;

        for (var j = 0; j < this.stacks; j++) {
            for (var i = j*this.slices*4; i < (j+1)*this.slices*4; i += 4) {

                //calculating the radius of the top
                radiusTop = Math.sqrt(1-(((j+1)*stackHeight)*((j+1)*stackHeight)));

                //vertice 1 da face 0
                this.vertices.push(radiusBottom*Math.cos(sumalpha),radiusBottom*Math.sin(sumalpha), heightSum);
                this.normals.push(radiusBottom*Math.cos(sumalpha), radiusBottom*Math.sin(sumalpha), 0);

                //vertice 1 da face 1
                this.vertices.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), heightSum+stackHeight);
                this.normals.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), 0);

                sumalpha += alpha;

                //vertice 2 da face 0
                this.vertices.push(radiusBottom*Math.cos(sumalpha), radiusBottom*Math.sin(sumalpha), heightSum);
                this.normals.push(radiusBottom*Math.cos(sumalpha),radiusBottom*Math.sin(sumalpha), 0);

                //vertice 2 da face 1
                this.vertices.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), heightSum+stackHeight);
                this.normals.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), 0);

                this.indices.push(i + 2);
                this.indices.push(i + 1);
                this.indices.push(i);
                this.indices.push(i + 1);
                this.indices.push(i + 2);
                this.indices.push(i + 3);

            }
            
            sumalpha = 0;
            radiusBottom = radiusTop;
            heightSum += stackHeight;

        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    };
};
