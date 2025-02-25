var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene
{
    constructor()
    {
        super();
    };

    init(application)
    {
        super.init(application);

        this.initCameras();

        this.initLights();

        this.enableTextures(true);

        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.axis = new CGFaxis(this);

        // Scene elements
        this.table = new MyTable(this);
        this.wall = new Plane(this);
        this.leftWall = new MyQuad(this, -0.5, 1.5, -0.5, 1.5);
        this.floor = new MyQuad(this, 0, 10, 0, 12);
        this.boardA = new Plane(this, BOARD_A_DIVISIONS, -0.25, 1.25, 0 ,1);
        this.boardB = new Plane(this, BOARD_B_DIVISIONS);

        this.lamp = new MyLamp(this, 60, 20);
        this.cylinder = new MyCylinder(this, -0.5, 1.5, -0.5, 1.5);
        this.prism = new MyPrism(this,6,2);

        // Materials
        this.materialDefault = new CGFappearance(this);

        this.floorAppearance = new CGFappearance(this);
        this.floorAppearance.loadTexture('../resources/images/floor.png');
        this.floorAppearance.setTextureWrap('REPEAT','REPEAT');
        this.floorAppearance.setDiffuse(0.6,0.6,0.6,1);
        this.floorAppearance.setSpecular(0,0.2,0.8,1);
        this.floorAppearance.setShininess(20);

        this.wallAppearance = new CGFappearance(this);
        this.wallAppearance.loadTexture('../resources/images/window.png');
        this.wallAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');

        this.slidesAppearance = new CGFappearance(this);
        this.slidesAppearance.loadTexture('../resources/images/slides.png');
        this.slidesAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');
        this.slidesAppearance.setDiffuse(0.8,0.8,0.8,1);
        this.slidesAppearance.setSpecular(0.2,0.2,0.2,1);
        this.slidesAppearance.setShininess(10);

        this.boardAppearance = new CGFappearance(this);
        this.boardAppearance.loadTexture("../resources/images/board.png");
        this.boardAppearance.setDiffuse(0.2,0.2,0.2,1);
        this.boardAppearance.setSpecular(0.6,0.6,0.6,1);
        this.boardAppearance.setShininess(120);

        this.columnAppearance = new CGFappearance(this);
        this.columnAppearance.loadTexture("../resources/images/column.jpg");
        this.columnAppearance.setDiffuse(0.2,0.2,0.2,1);
        this.columnAppearance.setSpecular(0.6,0.6,0.6,1);
        this.columnAppearance.setAmbient(0.4,0.4,0.4);
        this.columnAppearance.setShininess(120);

        
        this.lampAppearance = new CGFappearance(this);
        this.lampAppearance.loadTexture("../resources/images/lamp.jpg");
        this.lampAppearance.setDiffuse(0.2,0.2,0.2,1);
        this.lampAppearance.setSpecular(0.6,0.6,0.6,1);
        this.lampAppearance.setAmbient(0.6,0.6,0.6);
        this.lampAppearance.setShininess(120);

        this.materialB = new CGFappearance(this);
        this.materialB.setAmbient(0.4,0.4,0.4,1);
        this.materialB.setDiffuse(0.6,0.6,0.6,1);
        this.materialB.setSpecular(0.8,0.8,0.8,1);
        this.materialB.setShininess(20);

    };

    initCameras()
    {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
    };

    initLights()
    {
        this.setGlobalAmbientLight(.5,.5,.5,1);

        // Positions for four lights
        this.lights[0].setPosition(4, 8, 1, 1);
        this.lights[0].setVisible(true); // show marker on light position (different from enabled)

        this.lights[1].setPosition(10.5, 8, 1.0, 1.0);
        this.lights[1].setVisible(true); // show marker on light position (different from enabled)

        this.lights[2].setPosition(10.5, 8, 5.0, 1.0);
        this.lights[2].setVisible(true);

        this.lights[3].setPosition(4, 8, 5.0, 1.0);
        this.lights[3].setVisible(true);

        this.lights[4].setPosition(0, 4, 7.5, 1.0);
        this.lights[4].setVisible(true);
        this.lights[4].setAmbient(0, 0, 0, 1);
        this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[4].setSpecular(1,1,0,1.0);
        this.lights[4].enable();

        this.lights[0].setAmbient(0, 0, 0, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1,1,0,1.0);
        //this.lights[0].enable();

        this.lights[1].setAmbient(0, 0, 0, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        //this.lights[1].enable();

        this.lights[2].setAmbient(0, 0, 0, 1);
        this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setSpecular(1, 1, 1, 1);

        //kq
        this.lights[2].setQuadraticAttenuation(0);

        //kl
        this.lights[2].setLinearAttenuation(1);

        //kc
        this.lights[2].setConstantAttenuation(0);

        //this.lights[2].enable();

        this.lights[3].setAmbient(0, 0, 0, 1);
        this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[3].setSpecular(1,1,0,1.0);

        //kq
        this.lights[3].setQuadraticAttenuation(1);

        //kl
        this.lights[3].setLinearAttenuation(0);

        //kc
        this.lights[3].setConstantAttenuation(0);

        //this.lights[3].enable();
    };

    updateLights()
    {
        for (var i = 0; i < this.lights.length; i++)
            this.lights[i].update();
    }


    display()
    {
        // ---- BEGIN Background, camera and axis setup

        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Initialize Model-View matrix as identity (no transformation)
        this.updateProjectionMatrix();
        this.loadIdentity();

        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Update all lights used
        this.updateLights();

        // Draw axis
        this.axis.display();

        // ---- END Background, camera and axis setup

        // ---- BEGIN Scene drawing section

        this.materialDefault.apply();

        this.pushMatrix();
        this.lampAppearance.apply();
        this.translate(7.25, 8, 3);
        this.rotate(90 * degToRad, 1, 0, 0);
        this.scale(2, 1.5, 1.5);
        this.lamp.display();
        this.popMatrix();

        this.pushMatrix();
        this.columnAppearance.apply();
        this.translate(1.3, 0, 13.5);
        this.scale(1, 1.14, 1);
        this.rotate(-90 * degToRad, 1, 0, 0);
        this.cylinder.display();
        this.popMatrix();


        this.pushMatrix();
        this.columnAppearance.apply();
        this.translate(1.3, 0, 1.3);
        this.scale(1, 1.14, 1);
        this.rotate(-90 * degToRad, 1, 0, 0);
        this.cylinder.display();
        this.popMatrix();

        this.pushMatrix();
        this.columnAppearance.apply();
        this.translate(13.5, 0, 13.5);
        this.scale(1, 1.14, 1);
        this.rotate(-90 * degToRad, 1, 0, 0);
        this.cylinder.display();
        this.popMatrix();

        this.pushMatrix();
        this.columnAppearance.apply();
        this.translate(13.5, 0, 1.3);
        this.scale(1, 1.14, 1);
        this.rotate(-90 * degToRad, 1, 0, 0);
        this.cylinder.display();
        this.popMatrix();


        // Floor
        this.pushMatrix();
        this.floorAppearance.apply();
        this.translate(7.5, 0, 7.5);
        this.rotate(-90 * degToRad, 1, 0, 0);
        this.scale(15, 15, 0.2);
        this.floor.display();
        this.popMatrix();

        // Left Wall
        this.pushMatrix();
        this.translate(0, 4, 7.5);
        this.rotate(90 * degToRad, 0, 1, 0);
        this.scale(15, 8, 0.2);
        this.wallAppearance.apply();
        this.leftWall.display();
        this.popMatrix();

        // Plane Wall
        this.pushMatrix();
        this.translate(7.5, 4, 0);
        this.scale(15, 8, 0.2);
        this.wall.display();
        this.popMatrix();

        // First Table
        this.pushMatrix();
        this.translate(5, 0, 8);
        this.table.display();
        this.popMatrix();

        // Second Table
        this.pushMatrix();
        this.translate(12, 0, 8);
        this.table.display();
        this.popMatrix();

        // Board A
        this.pushMatrix();
        this.slidesAppearance.apply();
        this.translate(4, 4.5, 0.2);
        this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
        this.boardA.display();
        this.popMatrix();

        // Board B
        this.pushMatrix();
        this.boardAppearance.apply();
        this.translate(10.5, 4.5, 0.2);
        this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);

        this.materialB.apply();
        this.boardB.display();
        this.popMatrix();

        // ---- END Scene drawing section
    };
};