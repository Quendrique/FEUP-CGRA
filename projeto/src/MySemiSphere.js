/**
 * MySemiSphere
 * @constructor
 */
class MySemiSphere extends CGFobject
{
    constructor(scene, slices, stacks, minS, maxS, minT, maxT){
        super(scene);
        this.slices = 20;
        this.stacks = 20;

        this.minS = minS || 0.0;
        this.minT = minT || 0.0;
        this.maxS = maxS || 1.0;
        this.maxT = maxT || 1.0;

        this.initBuffers();
    }

    initBuffers()
    {

        this.vertices = [];
        this.normals = [];
        this.indices = [];
        this.texCoords = [];

        var stepS = (this.maxS-this.minS)/this.slices;
        var stepT = (this.maxT-this.minT)/this.slices;


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
                this.texCoords.push(this.minS+i*stepS, this.maxT+j*stepT);

                //vertice 1 da face 1
                this.vertices.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), heightSum+stackHeight);
                this.normals.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), 0);
                this.texCoords.push(this.maxS+i*stepS, this.maxT+j*stepT);

                sumalpha += alpha;

                //vertice 2 da face 0
                this.vertices.push(radiusBottom*Math.cos(sumalpha), radiusBottom*Math.sin(sumalpha), heightSum);
                this.normals.push(radiusBottom*Math.cos(sumalpha),radiusBottom*Math.sin(sumalpha), 0);
                this.texCoords.push(this.minS+i*stepS, this.minT+j*stepT);

                //vertice 2 da face 1
                this.vertices.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), heightSum+stackHeight);
                this.normals.push(radiusTop*Math.cos(sumalpha), radiusTop*Math.sin(sumalpha), 0);
                this.texCoords.push(this.maxS+i*stepS, this.minT+j*stepT);

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
