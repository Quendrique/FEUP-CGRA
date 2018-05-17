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

        this.gl.clearColor(0, 0, 0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.Light1=false; 
        this.Light2=false;
        this.Light3=false;
        this.Light4=false; 
        this.speed=3;
        
        this.altimetry = [[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 1.3 ],
                         [ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 1.3 ],
                         [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
                         [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
                         [ 0.0 , 0.0 , 2.0, 4.0, 2.5, 2.4, 0.0, 0.0 ],
                         [ 0.0 , 0.0 , 2.0, 4.0, 3.5, 2.4, 0.0, 0.0 ],
                         [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
                         [ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
                         [ 2.0 , 3.0 , 2.0, 1.0, 2.5, 2.4, 2.3, 1.3 ]];        

        this.axis = new CGFaxis(this);

        // Scene elements
        this.wheel = new MyWheel(this);
        this.terrain = new MyTerrain(this, 8, this.altimetry);
        this.car = new MyCar(this);

        // Materials
        this.materialDefault = new CGFappearance(this);

    };

    initCameras()
    {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
    };

    initLights()
    {
        this.setGlobalAmbientLight(0.6,0.6,0.6, 1.0);

        // Positions for four lights
        this.lights[0].setPosition(4, 6, 1, 1);
        this.lights[0].setVisible(true); // show marker on light position (different from enabled)

        this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
        this.lights[1].setVisible(true); // show marker on light position (different from enabled)

        this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
        this.lights[2].setVisible(true); // show marker on light position (different from enabled)
        this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
        this.lights[3].setVisible(true); // show marker on light position (different from enabled)

        this.lights[0].setAmbient(0, 0, 0, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1,1,1,1);

        this.lights[1].setAmbient(0, 0, 0, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
      
        this.lights[2].setAmbient(0, 0, 0, 1);
        this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setSpecular(1,1,1,1);
        this.lights[2].setLinearAttenuation(1);

        this.lights[3].setAmbient(0, 0, 0, 1);
        this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[3].setSpecular(1,1,1,1);
        this.lights[2].setQuadraticAttenuation(0.2);
    };

    updateLights()
    {
        for (var i = 0; i < this.lights.length; i++){
            this.lights[i].update();
        }

            if(this.Light1){
                this.lights[0].enable();
            } else {
                this.lights[0].disable();
            }

            if(this.Light2){
                this.lights[1].enable();
            } else {
                this.lights[1].disable();
            }

            if(this.Light3){
                this.lights[2].enable();
            } else {
                this.lights[2].disable();
            }

            if(this.Light4){
                this.lights[3].enable();
            } else {
                this.lights[3].disable();
            }
    }

    Deactivate_Axis(){ 
        this.axis = new CGFaxis(this, 0, 0);
        console.log("Erasing axis..."); 
    };

    Activate_Axis(){
       // Draw axis
       this.axis = new CGFaxis(this);
       this.axis.display();
       console.log("Drawing axis...");  
    }

    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;

        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyA")) {
            text+=" A ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyD")) {
            text+=" D ";
            keysPressed=true;
        }

        if (keysPressed) {
            console.log(text);
        }
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

        // Draw axis
        this.axis.display();

        // Update all lights used
        this.updateLights();

        //check Keys
        this.checkKeys();

        this.materialDefault.apply();

        // ---- END Background, camera and axis setup

        // ---- BEGIN Scene drawing section

        this.pushMatrix();
        this.terrain.display();
        this.popMatrix();

        this.pushMatrix();
          this.translate(-4,2.5,0);
        this.car.display();
        this.popMatrix();

        // ---- END Scene drawing section
    };
};
