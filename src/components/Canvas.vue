<template>
  <div class="canvas-container">
    <div id="canvas"></div>
  </div>
</template>

<script>
import p5 from "p5";
import Snake from "../models/Snake";
export default {
  data() {
    return {
      canvas: undefined,
      snake: new Snake(),
      food: undefined,
    };
  },
  mounted() {
    const script = (p5) => {
      // These are your typical setup() and draw() methods

      this.p5 = p5;

      p5.setup = () => {
        p5.createCanvas(900, 600);

        p5.background(0);
        p5.noStroke();
        p5.pickLocation();
      };
      p5.draw = () => {
        p5.background(0);

        p5.fill(255);
        p5.update();

        if (p5.eat(this.food)) {
          this.snake.uzunluk++;
          p5.pickLocation();
        }
        for (let i = 0; i < this.snake.uzunluk; i++) {
          //   p5.translate(
          //     this.snake.x + this.snake.width / 2,
          //     this.snake.y + this.snake.height / 2
          //   );
          //    p5.angleMode(p5.DEGREES);

          //p5.rotate(this.snake.angle);

          p5.rect(
            this.snake.x + this.snake.buyumeMiktari * i,
            this.snake.y,
            this.snake.scl,
            this.snake.scl
          );
          //    p5.rotate(-this.snake.angle); //Rotateyi hizalıyoruz arabayı çevirdikten sonra çizgiyide tersi kadar
        }

        p5.rect(this.food.x, this.food.y, 15, 15);
      };

      p5.update = () => {
        this.snake.update(p5);
      };

      p5.eat = (pos) => {
        var d = p5.dist(this.snake.x, this.snake.y, pos.x, pos.y);
   
        if (d <= 20) {
          return true;
        } else {
          return false;
        }
      };

      p5.pickLocation = () => {
        var cols = Math.floor(900 / this.snake.scl);
        var rows = Math.floor(600 / this.snake.scl);
        this.food = p5.createVector(
          Math.floor(p5.random(cols)),
          Math.floor(p5.random(rows))
        );

        this.food.mult(this.snake.scl);
      };
      p5.keyPressed = () => {
        if (p5.keyCode == 87) {
          //w
          this.snake.turn(0, -1);
        }
        if (p5.keyCode == 83) {
          //s
          this.snake.turn(0, 1);
        }
        if (p5.keyCode == 65) {
          //a
          this.snake.turn(-1, 0);
        }
        if (p5.keyCode == 68) {
          //d
          this.snake.turn(1, 0);
        }
      };
    };

    // Attach the canvas to the div
    this.canvas = new p5(script, "canvas");
    console.log(this.canvas);
  },
};
</script>

<style scoped>
.canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
}
</style>