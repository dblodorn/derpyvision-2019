import { randomNumMinMax, makeRandomColor } from './../scripts';

export default class Circle {
  constructor(x, y, count, ww) {
    this.x = x;
    this.y = y;
    this.width = this.height = (ww / count) * .75;
  }

  draw(ctx) {
    ctx.shadowColor = makeRandomColor();
    ctx.shadowBlur = randomNumMinMax(5, 150);
    ctx.shadowOffsetX = randomNumMinMax(-150, 150);
    ctx.shadowOffsetY = randomNumMinMax(-150, 150);
    ctx.fillStyle = makeRandomColor();
    ctx.lineWidth = randomNumMinMax(1, 10);
    ctx.strokeStyle = makeRandomColor();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}
