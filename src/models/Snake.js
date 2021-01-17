export default class Snake {
    x = 50;
    y = 20;
    width = 15;
    height = 15;
    buyumeMiktari = 16;
    uzunluk = 3;
    xspeed = 1;
    yspeed = 0;
    scl = 8;
    acc = 0.5;
    

    eat(){

    }

    turn(x, y) {
        this.xspeed = x;

        this.yspeed = y
    }

    update() {
        // const radian = 1* Math.PI / 180
        this.x = this.x + this.xspeed * this.scl
        this.y = this.y + this.yspeed * this.scl

        // this.x = p5.constrain(this.x, 0, this.width - this.scl)

        // this.y = p5.constrain(this.y, 0, this.height - this.scl)
    }
}