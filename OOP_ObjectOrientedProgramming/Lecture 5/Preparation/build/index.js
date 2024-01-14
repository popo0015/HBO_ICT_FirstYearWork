import CanvasRenderer from './CanvasRenderer.js';
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
CanvasRenderer.fillCanvas(canvas, 'lightgreen');
ctx.strokeStyle = 'blue';
ctx.strokeRect(80, 100, 300, 240);
CanvasRenderer.fillCircle(canvas, 90, 100, 80, 'red');
CanvasRenderer.writeText(canvas, 'Hello world', 90, 105, 'center', 'Arial', 20, 'white');
const smiley = CanvasRenderer.loadNewImage('Smiley.svg.png');
smiley.onload = () => {
    ctx.drawImage(smiley, 70, 100);
};
//# sourceMappingURL=index.js.map