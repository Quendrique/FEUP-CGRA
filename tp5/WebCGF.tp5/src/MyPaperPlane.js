/**
 * MyPaperPlane
 * @constructor
 */
class MyPaperPlane extends CGFobject
{
	constructor(scene){
		super(scene);
		this.x = 0;
		this.y = 0;
		this.initBuffers();
	}

	initBuffers() 
	{
        this.vertices = [
            0, 0.2, 0,
            0, 1, 0,
            0.3, 1, 0,
            0.3, 0, 0,
            0, 1.2, 0,
            0.3, 0, 1,
            0.3, 0, -1
        ];

        this.indices = [
            0, 1, 2,
            2, 3, 0,
            1, 2, 4,
            3, 5, 2,
            3, 6, 2,
            0, 2, 1,
            2, 0, 3,
            1, 4, 2,
            3, 2, 5,
            3, 2, 6
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 1, 0,
            0, 1, 0
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
		        
    };

    display()
    {
    	this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, 8);
        this.scene.popMatrix()
    }
    
    update(currTime){
    	let time = currTime/1000; //working with ms
    	let Xpercent = 12/100;
    	let Ypercent = 4/100;

    	while(this.y != 0){
    		this.x = (this.x + time*Xpercent/60)%360;
    		this.y = (this.y + time*Ypercent/60)%360;
    	}
    }
};