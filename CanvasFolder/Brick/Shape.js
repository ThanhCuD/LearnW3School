class Shape{
    constructor(x,y,size,type,ctx){
        this.x = x,
        this.y = y, 
        this.size = size,
        this.type = type,
        this.ctx = ctx
    }
    draw(){
        switch(this.type){
            case "square":
                ctx.fillRect(this.x,this.y,this.size*2,this.size*2);
                break;
            case "I":
                ctx.fillRect(this.x,this.y,this.size*1,this.size*3);
                break;
        }
    }
}