
class Circle{
    constructor(x,y,radius,color){
        this.x = x,
        this.y =y,
        this.radius = radius,
        this.color = color,
        this.dirX = true,
        this.dirY = false
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    drawMove(fgShooting,speedX,canhDoiStart,canhKeStart,rootPoint){
        if(fgShooting){
            if(circle.dirX){
                circle.x+=speedX/(canhDoiStart/canhKeStart);
            }else{
                circle.x-=speedX/(canhDoiStart/canhKeStart);
            }
    
            if(circle.dirY){
                circle.y-=speedY;
            }
            else{
                circle.y+=speedY;
            }
            if(circle.y <= circle.radius){
                circle.dirY = true;
            }
            if(circle.y >= ystart+ysize-box){
                rootPoint = {
                    x: circle.x,
                    y: circle.y
                }
                circle.dirY = false;
                fgShooting = false;
            }
            if(circle.x >= xstart+xsize - circle.radius){
                circle.dirX = false;
            }
            if(circle.x <= circle.radius ){
                circle.dirX = true;
            }
        }
        draw();
    }

}