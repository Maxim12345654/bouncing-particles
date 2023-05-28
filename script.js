import { Particle } from "./particle.js";
import { Particle2 } from "./particle2.js";
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const example = 2;
const mouse = { x: undefined, y: undefined };
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x)
});
setInterval(() => {
    mouse.x = undefined;
    mouse.y = undefined;
}, 200);

const particlesArray = [];
if (example === 1) {
    for (let i = 0; i < 500; i++) {
        particlesArray.push(new Particle(mouse.x, mouse.y, ctx, mouse, canvas));
    }
} else {
    for (let i = 0; i < 250; i++) {
        //// console.log(mouse.x)
        particlesArray.push(new Particle2(ctx, mouse, canvas));
    }
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (example === 1) {
        for (let i = 0; i < 500; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
    } else {
        for (let i = 0; i < 250; i++) {
            particlesArray[i].update();

        }
        Particle2.connect(particlesArray, ctx);
    }
    requestAnimationFrame(animate);
}
animate();
