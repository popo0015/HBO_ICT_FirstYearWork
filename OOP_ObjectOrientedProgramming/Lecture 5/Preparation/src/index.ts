import CanvasRenderer from './CanvasRenderer.js';

const canvas: HTMLCanvasElement = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

CanvasRenderer.fillCanvas(canvas, 'lightgreen');

ctx.strokeStyle = 'blue';
ctx.strokeRect(80, 100, 300, 240);

CanvasRenderer.fillCircle(canvas, 90, 100, 80, 'red');

CanvasRenderer.writeText(canvas, 'Hello world', 90, 105, 'center', 'Arial', 20, 'white');

const smiley: HTMLImageElement = CanvasRenderer.loadNewImage('Smiley.svg.png');
smiley.onload = (): void => {
  ctx.drawImage(smiley, 70, 100);
};