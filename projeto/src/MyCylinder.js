/**
 * MyCylinder
 * @constructor
 */

class MyCylinder extends CGFobject
{
	constructor(scene, slices, stacks, minS, maxS, minT, maxT){
		super(scene);
		this.slices = slices;
		this.stacks = stacks;

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

		//alpha in degrees
		var alpha = 360/this.slices;

		var stepS = (this.maxS-this.minS)/this.slices; 
        var stepT = (this.maxT-this.minT)/this.stacks; 

		//convert to radian
		alpha = (alpha * Math.PI)/180;

		var sumalpha = 0;

		for (var j = 0; j < this.stacks; j++) {

            for (var i = j*this.slices*4; i < (j+1)*this.slices*4; i += 4) {

                //vertice 1 da face 0
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
                this.texCoords.push(this.minS+i*stepS, this.maxT-j*stepT); 
               
                //vertice 1 da face 1
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j+1/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
                this.texCoords.push(this.minS+i*stepS, this.maxT-j*stepT);
        
                sumalpha += alpha;

                //vertice 2 da face 0
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
                this.texCoords.push(this.minS+i*stepS, this.maxT-j*stepT);          

                //vertice 2 da face 1
                this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), j+1/this.stacks);
                this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
                this.texCoords.push(this.minS+i*stepS, this.maxT-j*stepT); 

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