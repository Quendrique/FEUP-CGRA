 
class MyInterface extends CGFinterface {

	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor (selection) {
 		super();
 		this.selection = selection;
 	}

 	initKeys() {
		this.scene.gui=this;
		this.processKeyboard=function(){};
		this.activeKeys={};
	}

	processKeyDown(event) {
		this.activeKeys[event.code]=true;
	};

	processKeyUp(event) {
		this.activeKeys[event.code]=false;
	};

	isKeyPressed(keyCode) {
		return this.activeKeys[keyCode] || false;
	};

	getCurrentSelection(){
		return this.selection;
	}
	
	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		// add a button:
		// the first parameter is the object that is being controlled (in this case the scene)
		// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
		// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

		this.gui.add(this.scene, 'Deactivate_Axis');

		this.gui.add(this.scene, 'Activate_Axis');	

		// add a group of controls (and open/expand by defult)

		var group=this.gui.addFolder("Lights");
		group.open();

		// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
		// e.g. this.option1=true; this.option2=false;

		group.add(this.scene, 'Light1');
		group.add(this.scene, 'Light2');
		group.add(this.scene, 'Light3');
		group.add(this.scene, 'Light4');

		//adding textures part
		/*var othergroup=this.gui.addFolder("CarTextures");
		othergroup.open();

		othergroup.add(this.scene, 'bubble');
		othergroup.add(this.scene, 'red');
		othergroup.add(this.scene, 'camo');
		othergroup.add(this.scene, 'tiger');*/

		var text =
		{
    	CarTextures: 'CarTextures'
		}

		this.gui.add(text, 'CarTextures', { Bubble: 'bubble', Red: 'red', Camo: 'camo', Tiger: 'tiger', Default: 'default' });

		this.dropdown = text;

		// add a slider
		// must be a numeric variable of the scene, initialized in scene.init e.g.
		// this.speed=3;
		// min and max values can be specified as parameters

		this.gui.add(this.scene, 'speed', -5, 5);
	
		this.initKeys();

		return true;
	};
};

