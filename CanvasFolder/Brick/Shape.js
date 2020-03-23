class Shape{
    constructor(x,y,size,type,ctx){
        this.x = x,
        this.y = y, 
        this.size = size,
        this.type = type,
        this.ctx = ctx,
        this.arrRect=[];
        
    };
    draw(){
        this.arrRect = this.getArrayRect();
        for (let i = 0; i < this.arrRect.length; i++) {
            this.ctx.fillRect(this.arrRect[i].x,this.arrRect[i].y,this.arrRect[i].height,this.arrRect[i].width);            
        }
    }
    getArrayRect(){
            let result = [];
            switch(this.type){
                case "square":
                    var objShape = {
                        x : this.x,
                        y: this.y,
                        height: this.size*2,
                        width : this.size*2
                    }
                    result.push(objShape);
                    break;
                case "I":
                    var objShape = {
                        x : this.x,
                        y: this.y,
                        height: this.size*1,
                        width : this.size*3
                    }
                    result.push(objShape);
                    break;
                case "L":
                    var objShape = {
                        x : this.x,
                        y: this.y,
                        height: this.size*1,
                        width : this.size*3
                    };
                    var objShape2 = {
                        x : this.x+this.size,
                        y: this.y+this.size*2,
                        height: this.size*1,
                        width : this.size*1
                    }
                    result.push(objShape);
                    result.push(objShape2);
                    break;
            }
        return result;
        }
        
}
