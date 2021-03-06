import { store } from './../state/store';
import { randomNumMinMax, makeRandomColor } from './../scripts';
import Circle from './Circle';
import CanvasImage from './CanvasImage';

export default () => {
  class Canvas {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext('2d');
      this.window = store.getState().resizeState;
      this.canvas.width = this.window.window_width;
      this.canvas.height = this.window.window_height;
      this.circle_count = 50;
      this.tick = 0;
      this.tick_rate = 1;
      this.title = false;
      
      this.state = {
        ww: this.window.window_width,
        wh: this.window.window_height,
        circles: []
      };

      this.updateState = this.updateState.bind(this);
      this.update = this.update.bind(this);
      this.drawCircles = this.drawCircles.bind(this);
      
      this.init();
    };

    updateState() {
      this.resize_state = store.getState().resizeState;
      this.state.ww = store.getState().resizeState.window_width;
      this.state.wh = store.getState().resizeState.window_height;
    };

    drawCircles() {
      let i;
      this.state.circles = [];
      this.circle_count = randomNumMinMax(0, 500)
      for (i = 0; i < this.circle_count; i++) {
        this.state.circles.push(
          new Circle(
            randomNumMinMax(0, this.state.ww),
            randomNumMinMax(0, this.state.wh),
            this.circle_count,
            this.state.ww
          )
        )
      };
      this.state.circles.forEach((circle) => {
        circle.draw(this.ctx);
      });
    }

    fillCanvas() {
      this.ctx.fillStyle = makeRandomColor();
      this.ctx.fillRect(0, 0, this.state.ww, this.state.wh);
    }

    init() {
      this.fillCanvas();
      this.drawCircles();
      this.update();
    }

    update() {
      this.tick = (this.tick <= this.tick_rate) ? this.tick + 1 : 0;
      if (this.tick === this.tick_rate) {
        this.ctx.clearRect(0, 0, this.state.ww, this.state.ww);
        this.fillCanvas();
        this.drawCircles();
      };
      this.updateState();
      requestAnimationFrame(() => {
        this.update();
      });
    }
  }

  new Canvas();
};
