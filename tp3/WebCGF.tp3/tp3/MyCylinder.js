/**
 * MyCylinder
 * @constructor
 */

class MyCylinder extends CGFobject
{
	constructor(scene){
		super(scene);
		this.slices = 20;
		this.stacks = 5;
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

		var sumalpha = 0;

		for (var j = 0; j < this.stacks; j++) {

            for (var i = j*this.slices*4; i < (j+1)*this.slices*4; i += 4) {

                //vertice 1 da face 0
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

                //vertice 1 da face 1
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j+1/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

                sumalpha += alpha;

                //vertice 2 da face 0
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

                //vertice 2 da face 1
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j+1/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

                this.indices.push(i + 2);
                this.indices.push(i + 1);
                this.indices.push(i);
                this.indices.push(i + 1);
                this.indices.push(i + 2);
                this.indices.push(i + 3);

            }

        }

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};