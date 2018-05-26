/**
 * MyPyramid
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPyramid extends CGFobject {

    constructor(scene, height, base, depth) {
        super(scene);
        this.height = height || 1;
        this.base = base || 1;
        this.depth = depth || 1;

        //angles used to calculate normals

        this.angleFront = ((90 * Math.PI)/180) - Math.atan(this.height/this.base);

        this.xFront = Math.cos(this.angleFront);
        this.yFront = Math.sin(this.angleFront);

        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.normals = [];
        this.texCoords = [];
        this.indices = [];

        //each vertex is shared by three faces, hence the duplicates

        this.vertices = [
            -this.base/2, this.height/2, this.depth/2, //0 -> 0
            -this.base/2, this.height/2, this.depth/2, //1 -> 0
            -this.base/2, this.height/2, this.depth/2, //2 -> 0

            this.base/2, -this.height/2, this.depth/2, //3 -> 1
            this.base/2, -this.height/2, this.depth/2, //4 -> 1
            this.base/2, -this.height/2, this.depth/2, //5 -> 1

            -this.base/2, -this.height/2, this.depth/2, //6 -> 2
            -this.base/2, -this.height/2, this.depth/2, //7 -> 2
            -this.base/2, -this.height/2, this.depth/2, //8 -> 2

            -this.base/2, this.height/2, -this.depth/2, //9 -> 3
            -this.base/2, this.height/2, -this.depth/2, //10 -> 3
            -this.base/2, this.height/2, -this.depth/2, //11 -> 3

            this.base/2, -this.height/2, -this.depth/2, //12 -> 4
            this.base/2, -this.height/2, -this.depth/2, //13 -> 4
            this.base/2, -this.height/2, -this.depth/2, //14 -> 4

            -this.base/2, -this.height/2, -this.depth/2, //15 -> 5
            -this.base/2, -this.height/2, -this.depth/2, //16 -> 5
            -this.base/2, -this.height/2, -this.depth/2, //17 -> 5
        ];

        this.normals = [
            0, 0, 1, //0
            -1, 0, 0, //1
            this.xFront, this.yFront, 0, //2
            0, 0, 1, //3
            0, -1, 0, //4
            this.xFront, this.yFront, 0, //5
            0, 0, 1, //6
            -1, 0, 0, //7

            0, -1, 0, //8
            -1, 0, 0, //9
            this.xFront, this.yFront, 0, //10
            0, 0, -1, //11
            0, -1, 0, //12
            this.xFront, this.yFront, 0, //13
            0, 0, -1, //14
            -1, 0, 0, //15

            0, -1, 0, //16
            0, 0, -1, //17
        ];

        this.indices = [
            //right
            6,3,0,

            //back 1 7 9 15
            9,7,1,
            7,9,15,

            //base 4 8 12 16
            4,8,12,
            16,12,8,

            //front 2 5 10 13
            2, 5, 10,
            13, 10, 5,

            //left 11 14 17
            11, 14, 17
        ];

        this.texCoords = [
            0,0, //0 -> 0
            1,0, //1 x
            0,0, //2
            1,1, //3 -> 1
            0,1, //4
            0,1, //5
            0,1, //6 -> 2
            1,1, //7 x
            0,0, //8
            0,0, //9 -> 3 x
            1,0, //10
            0,0, //11
            1,1, //12 -> 4
            1,1, //13
            0,1, //14
            0,1, //15 -> 5 x
            1,0, //16
            1,1, //17

        ];

        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}