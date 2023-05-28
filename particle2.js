export class Particle2 {
    constructor(ctx, mouse, canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;;
        this.size = Math.random() * 5 + 2;
        this.color = "white";
        this.weight = 1;
        this.ctx = ctx;
        this.mouse = mouse;
        this.canvas = canvas;
    }
    update() {
        this.size -= 0.05;
        if (this.size < 0) {
            this.x = this.mouse.x + Math.random() * 20 - 10;
            this.y = this.mouse.y + Math.random() * 20 - 10;
            this.size = Math.random() * 5 + 2;
            this.weight = Math.random() * 2 - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.2;
        if (this.y > this.canvas.height) {
            this.weight *= -0.5;
        }
    }
    static connect(particlesArray,ctx) {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                let p1 = particlesArray[i];
                let p2 = particlesArray[j];
                let distance = (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y);
                if (distance < 3800) {
                    ctx.strokeStyle = 'white';
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                    
                }
            }


        }
    }
}