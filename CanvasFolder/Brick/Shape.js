class Shape{
    constructor(x,y,size,type,ctx){
        this.x = x,
        this.y = y, 
        this.size = size,
        this.type = type,
        this.ctx = ctx,
        this.arrRect = [];
        
    };
    draw(){
        this.arrRect = this.setArrayRect();
        console.log(arr)
        for (let i = 0; i < this.arrRect.length; i++) {
            this.ctx.fillRect(this.arrRect[i].x,this.arrRect[i].y,this.arrRect[i].height,this.arrRect[i].width);            
        }
        // switch(this.type){
        //     case "square":
        //         ctx.fillRect(this.x,this.y,this.size*2,this.size*2);
        //         break;
        //     case "I":
        //         ctx.fillRect(this.x,this.y,this.size*1,this.size*3);
        //         break;
        //     case "L":
        //         ctx.fillRect(this.x,this.y,this.size*1,this.size*3);
        //         ctx.fillRect(this.x+this.size,this.y+this.size*2,this.size*1,this.size*1);
        //         break;
        // }
    }
    setArrayRect(){
            let result = [];
            switch(this.type){
                case "square":
                    var objShape = {
                        x : this.x,
                        y: this.y,
                        height: this.size*2,
                        width : this.size*2
                    }
                    result.push[objShape];
                    break;
                case "I":
                    var objShape = {
                        x : this.x,
                        y: this.y,
                        height: this.size*1,
                        width : this.size*3
                    }
                    result.push[objShape];
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
                    result.push[objShape];
                    result.push[objShape2];
                    break;
            }
        return result;
        }
        
}
