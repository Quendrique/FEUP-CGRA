/**
 * MyPrism
 * @constructor
 */
class MyPrism extends CGFobject
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

		this.indices = [0, 1, 2,
						3, 2, 1];

		this.normals = [];

		//alpha in degrees
		var alpha = 360/this.slices;

		//convert to radian
		alpha = (alpha * Math.PI)/180;

		var sumalpha = 0;

		//CICLO PARA INCLUÍR OS VÉRTICES DA FACE Z = 0
		for(var i = 1; i <= this.slices; i++){

			if(i == 1) {
			
			//vertice 1 da face 0
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
			this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

			//vertice 1 da face 1
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);
			this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);

			//vertice 1 cópia para a normal inversa da face 0
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
			this.normals.push(Math.cos(-sumalpha), Math.sin(-sumalpha), 0);

			//vertice 1 cópia para a normal inversa da face 1
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);
			this.normals.push(Math.cos(-sumalpha), Math.sin(-sumalpha), 1);
			
			sumalpha += alpha;

			//vertice 2 da face 0
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
			this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

			//vertice 2 da face 1
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);
			this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);

			//vertice 2 cópia para a normal inversa da face 0
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
			this.normals.push(Math.cos(-sumalpha), Math.sin(-sumalpha), 0);

			//vertice 2 cópia para a normal inversa da face 1
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);
			this.normals.push(Math.cos(-sumalpha), Math.sin(-sumalpha), 1);

			sumalpha += alpha;

			}

			else {
			
			//vertice 1 da face 0
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
			this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);

			//vertice 1 da face 1
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);
			this.normals.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);

			//vertice 1 cópia para a normal inversa da face 0
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 0);
			this.normals.push(Math.cos(-sumalpha), Math.sin(-sumalpha), 0);

			//vertice 1 cópia para a normal inversa da face 1
			this.vertices.push(Math.cos(sumalpha), Math.sin(sumalpha), 1);
			this.normals.push(Math.cos(-sumalpha), Math.sin(-sumalpha), 1);

			sumalpha += alpha;

			}
		}

		//Todos os vertices adicionados, agora fazer a ligação

		/*for(var a = 0; a < this.vertices.length*4; a = a + 4){
			this.indices.push(i);
			this.indices.push(i+1);
			this.indices.push(i+2);
			this.indices.push(i+3);
			this.indices.push(i+2);
			this.indices.push(i+1);
		}*/

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
