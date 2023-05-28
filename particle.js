export class Particle{
    constructor(x,y,ctx,mouse,canvas){
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 2;
    this.color = "white";
    this.weight = 1;
    this.ctx = ctx;
    this.mouse = mouse;
    this.canvas = canvas;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        this.ctx.fill();

    }
    update(){
        this.size -= 0.05;
        if(this.size < 0){
            this.x = this.mouse.x + Math.random() * 50 - 10;
            this.y = this.mouse.y + Math.random() * 50 - 10;
            this.size = Math.random() * 5 + 2;
            this.weight = Math.random() * 2 - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.3;
        if(this.y > this.canvas.height){
            this.weight *= -0.9;
        }
    }
}