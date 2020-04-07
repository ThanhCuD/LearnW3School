class Block 
{
    constructor(x,y,w,h){
        this.x = x, 
        this.y = y,
        this.w = w,
        this.h = h
        this.fall = false;
        this.jump = false;
        this.stand= true;
    }
    draw(){
            ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}