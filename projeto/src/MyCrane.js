/**
 * MyCrane
 * @constructor
 */
class MyCrane extends CGFobject
{
    constructor(scene, carAppearance)
    {
        super(scene);

        this.count = 0;
        this.wait = 0;
        this.isUpdating = false;
        this.movCar = false;

        this.baseangle = Math.PI/2;
        this.armangle = 0;

        var a = Math.PI/4;

        this.base = new MyCylinder(this.scene, 30, 1, 0, 1, 0, 1);
        this.basetop = new MyCircle(this.scene);
        this.basebottom = new MyCircle(this.scene);
        this.basearm = new MyBaseArm(this.scene, a);
        this.cranearm = new MyCraneArm(this.scene, a);
        this.car = new MyCar(this.scene);

        this.materialDefault = new CGFappearance(this.scene);

        this.baseAppearance = new CGFappearance(this.scene);
        this.baseAppearance.loadTexture("../resources/images/craneBase.jpg");

        this.carAppearance = carAppearance;
        this.carTextureLoaded = 0;

    };

    setCarPosition(x, y, z) {
        this.car.setXPosition(x);
        this.car.setYPosition(y);
        this.car.setZPosition(z);
    };

    carMovement() {

      this.materialDefault.apply();

        if (this.carTextureLoaded !== 0) {
            this.carAppearance.apply();
        }

        this.scene.pushMatrix();

        if(this.movCar) {
            this.scene.rotate(this.baseangle - Math.PI, 0, 1, 0);
            this.scene.translate(7*Math.cos(this.armangle), -7*Math.sin(this.armangle), 0);
            this.scene.translate(-7*Math.cos(0.25), 7*Math.sin(0.25), 0);
        }
        this.scene.translate(14, 0, 0);
        this.scene.rotate(this.scene.car.getSteer(), 0, 1, 0);
        this.car.display();
        this.scene.popMatrix();
    }

    display()
    {

        this.baseAppearance.apply();

        //base
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI/2, -1, 0, 0);
            this.base.display();
        this.scene.popMatrix();

        //basetop
        this.scene.pushMatrix();
            this.scene.translate(0, 1, 0, 0);
            this.scene.rotate(Math.PI/2, -1, 0, 0);
            this.basetop.display();
        this.scene.popMatrix();

        //basebottom
        this.scene.pushMatrix();
            this.scene.rotate(-Math.PI/2, -1, 0, 0);
            this.basebottom.display();
        this.scene.popMatrix();

        //basearm
        this.scene.pushMatrix();
            this.scene.translate(0, 0.5, 0);
            //Articulacao da base
            this.scene.rotate(this.baseangle, 0, 1, 0);
            this.basearm.display();
        this.scene.popMatrix();

        //cranearm
        this.scene.pushMatrix();
            this.cranearm.setAngle(this.armangle);
            this.scene.rotate(this.baseangle, 0, 1, 0);
            this.cranearm.display();
        this.scene.popMatrix();

        if(this.isUpdating)
            this.carMovement();

    };

    update(currTime) {

        let step = 0.01;

        if (this.count == 0) {
            this.isUpdating = true;
            if(this.baseangle < Math.PI)
                this.baseangle = this.baseangle + step;
            else {
                this.count++;
            }
        } else if (this.count == 1) {
            if(this.armangle < 0.25) {
                this.armangle = this.armangle + step;
            } else
                this.count++;
        } else if (this.count == 2) {
            this.wait++;
            if (this.wait == 30) {
                this.wait = 0;
                this.count++;
            }
        } else if (this.count == 3) {
            this.movCar = true;
            if(this.armangle > -0.5) {
                this.armangle = this.armangle - step;
            } else
                this.count++;  
        } else if (this.count == 4) {
            if(this.baseangle > 0)
                this.baseangle = this.baseangle - step;
            else {
                this.count++;
            } 
        } else if (this.count == 5) {
            if(this.armangle < 0.3) {
                this.armangle = this.armangle + step;
            } else {
                this.count++; 
                this.movCar = false;
                this.isUpdating = false;
                this.scene.moveCar = false;
                this.scene.justMoved = true;
                this.scene.after = true;
            }
        } else if (this.count == 6) {
            this.wait++;
            if (this.wait == 30) {
                this.wait = 0;
                this.count++;
            }
        } else if (this.count == 7) {
            if(this.armangle > 0) {
                this.armangle = this.armangle - step;
            } else
                this.count++;
        } else if (this.count == 8) {
            if(this.baseangle < Math.PI/2)
                this.baseangle = this.baseangle + step;
            else {
                this.count = 0;
                this.scene.moveCrane = false;
            } 
        }

    }
};