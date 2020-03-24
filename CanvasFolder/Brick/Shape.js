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
            this.ctx.fillRect(this.arrRect[i].x,this.arrRect[i].y,this.arrRect[i].width,this.arrRect[i].height);
            this.ctx.strokeRect(this.arrRect[i].x,this.arrRect[i].y,this.arrRect[i].width,this.arrRect[i].height);
        }
    }
    getArrayRect(){
            let result = [];
            switch(this.type){
                case "square":
                    result = genSquare(this.x,this.y,this.size);
                    break;
                case "I":
                    result = genI(this.x,this.y,this.size);
                    break;
                case "Ihori":
                    result = genIHorizoltal(this.x,this.y,this.size);
                    break;
                case "L":
                    result = genL(this.x,this.y,this.size);
                    break;
            }
        return result;
    }
    getDistaince(a,b,c,direct){
        var result = distaincePointToLine(this.x,this.y,a,b,c);
        switch(this.type){
            case "square":
                if(direct=="R"){
                    result-=this.size*2;
                }
                break;
            case "I":
                if(direct=="R"){
                    result-=this.size*1;
                };
                break;
            case "L":
                if(direct=="R"){
                    result-=this.size*2;
                }
                break;
            case "Ihori":
                if(direct=="R"){
                    result-=this.size*3;
                }
                break;
        }
        return result;
    }
    Transform(){
        if(this.type=="I"){
            return "Ihori";
        }
        else if(this.type=="Ihori"){
            return "I";
        }else if(this.type=="square"){
            return "square"
        }
        else if(this.type=="L"){
            return "L"
        }
    }
}
function distaincePointToLine(x, y, a, b, c) {
    var result = Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
    return result;
}
function genSquare(x,y,size){
    var rs = [];
    for(let i = 0; i<2;i++){
        for(let j = 0; j<2;j++){
            var temp = {
                x: x+i*size,
                y: y+j*size,
                height: size,
                width: size
            }
            rs.push(temp);
        }
    }
    return rs;
}
function genI(x,y,size)
{
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x,
            y: y+ index*size,
            height: size,
            width: size
        })
    }
    return rs;
}
function genL(x,y,size){
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x,
            y: y+ index*size,
            height: size,
                width: size
        })
    }
    rs.push({
        x:x+size,
        y:y+2*size,
        height: size,
        width: size
    })
    return rs;
}

function genIHorizoltal(x,y,size)
{
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x+ index*size,
            y: y,
            height: size,
            width: size
        })
    }
    return rs;
}