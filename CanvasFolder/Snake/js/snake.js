class Snake {
    constructor(xpos,ypos,color,speed,ctx){
        this.xpos = xpos;
        this.ypos = ypos;
        this.speed = speed;
        this.color =  color;
        this.dx = this.speed*1;
        this.dy = this.speed*1;
        this.ctx = ctx
    }
    
    draw(){
        this.ctx.fillRect(this.xpos,this.ypos,10,10);
    }

    update(move){
        this.draw(context);
        switch (move) {
            case 37: this.xpos -= this.dx;; 
                break; //Left key
            case 38: this.ypos -= this.dy;; 
                break; //Up key
            case 39: this.xpos += this.dx;;
                 break; //Right key
            case 40: this.ypos += this.dy;;
                 break; //Down key
            default:; 
        }
    }

}