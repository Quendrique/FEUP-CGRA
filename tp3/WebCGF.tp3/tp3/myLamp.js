/**
 * myLamp
 * @constructor
 */

class myLamp extends CGFobject
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

		//radius
		var rdebaixo = 1;
		var rdecima = 1;

		//convert to radian
		alpha = (alpha * Math.PI)/180;

		var sumalpha = 0;

		for (var j = 0; j < this.stacks; j++) {
		    
            for (var i = j*this.slices*4; i < (j+1)*this.slices*4; i += 4) {

                var h = (this.stacks);
                var b = j/h;
                var c = 1 - b*b;

                //calculate the radius of the above part
                rdecima = Math.sqrt(1-b);

                //vertice 1 da face 0
                this.vertices.push(rdebaixo*Math.cos(sumalpha), rdebaixo*Math.sin(sumalpha), j);
                this.normals.push(rdebaixo*Math.cos(sumalpha), rdebaixo*Math.sin(sumalpha), 0);

                //vertice 1 da face 1
                this.vertices.push(rdecima*Math.cos(sumalpha), rdecima*Math.sin(sumalpha), j+1/this.stacks);
                this.normals.push(rdecima*Math.cos(sumalpha), rdecima*Math.sin(sumalpha), 0);

                sumalpha += alpha;

                //vertice 2 da face 0
                this.vertices.push(rdebaixo*Math.cos(sumalpha), rdebaixo*Math.sin(sumalpha), j);
                this.normals.push(rdebaixo*Math.cos(sumalpha), rdebaixo*Math.sin(sumalpha), 0);

                //vertice 2 da face 1
                this.vertices.push(rdecima*Math.cos(sumalpha), rdecima*Math.sin(sumalpha), j+1/this.stacks);
                this.normals.push(rdecima*Math.cos(sumalpha), rdecima*Math.sin(sumalpha), 0);

                this.indices.push(i + 2);
                this.indices.push(i + 1);
                this.indices.push(i);
                this.indices.push(i + 1);
                this.indices.push(i + 2);
                this.indices.push(i + 3);

                rdebaixo = rdecima;

            }

        }

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};