let canvas = document.getElementById("canvas");
canvas.style.background = "gray";

let ctx = canvas.getContext("2d");
let box = 15;

let shape = new Shape(8*box,0*box,box,"square",ctx);
let arrTypeShape = ["square","I"];
let arr = [];
let d;
let flgStop=false;
document.addEventListener("keydown",direction);

let game = setInterval(draw,250);

function draw(){
    ctx.clearRect(0,0,480,480);
    ctx.strokeRect(0,0,480,480);
    ctx.fillStyle = "green";
    shape.draw();
    
    let shapeTemp  = {
        x: shape.x, y: shape.y
    };
    switch(shape.type){
        case "square":
            shapeTemp.width = box*2;
            shapeTemp.height = box*2;
            break;
        case "I":
            shapeTemp.width = box*1;
            shapeTemp.height = box*3;
            break;
    }

    if(d=='L'){
            shapeTemp.x -= box;
            if(!isCollision1vsArr(shapeTemp,arr)){
                shape.x-=box;
            }
            d = 'None';
    }

    if(d=='R'){
            shapeTemp.x +=box;
            if(!isCollision1vsArr(shapeTemp,arr)){
                shape.x+=box;
            }
            d = 'None';
    }

    for (let i = 0; i < arr.length; i++) {
        shapeTemp.x = shape.x;
        shapeTemp.y = shape.y;
        if(shape.type=="square") {
            shapeTemp.width = box*2;
            shapeTemp.height = box*2;
        }
        else if(shape.type=="I") {
            shapeTemp.width = box*1;
            shapeTemp.height = box*3;
        }

        let itemTemp = {
            x: arr[i].x,
            y: arr[i].y
        }
        if(arr[i].type=="square") {
            itemTemp.width = box*2;
            itemTemp.height = box*2;
        }else if(arr[i].type=="I") {
            itemTemp.width = box*1;
            itemTemp.height = box*3;
        }
        var result = checkCollisionRect(shapeTemp,itemTemp);
        if(result){
            let nShape = new Shape(shape.x,shape.y,box,shape.type,ctx);
            arr.push(nShape);
            shape = newRadomShape();
            break;
        }
        
    }

    let dis = shape.type == "I"?box*3:box*2;
   if(distaincePointToLine(shape.x,shape.y,0,1,-480)==dis){
        let nShape = new Shape(shape.x,shape.y,box,shape.type,ctx);
        arr.push(nShape);
        shape = newRadomShape();
   }
    for (let i = 0; i < arr.length; i++) {
        arr[i].draw();
    }
    
    if(!flgStop){
        shape.y+=box;
    }
}
function direction(e){
    var code = e.keyCode;
    if(code == 37){
        d = 'L'
    }
    else if(code ==39){
        d = 'R'
    }
    else if(code==32){
        flgStop = !flgStop;
    }
}

function distaincePointToLine(x,y,a,b,c){
    var result = Math.abs(a*x+b*y+c)/Math.sqrt(a*a+b*b);
    return result;
}
function checkCollisionRect(rect1,rect2){
    var result = (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y <= rect2.y + rect2.height &&
    rect1.y + rect1.height >= rect2.y);
    return result;
}
function isCollision1vsArr(rect1,arr){
    for (let i = 0; i < arr.length; i++) {
        var rect2  = {
            x: arr[i].x, y: arr[i].y, width: box*2, height: box*2
        }
        var result = checkCollisionRect(rect1,rect2);
        if(result){
            return true;     
        }
    }
    return false;
}


function newRadomShape(){
    var numRandom = Math.floor(Math.random()*arrTypeShape.length);
    var result = new Shape(8*box,0*box,box,arrTypeShape[numRandom],ctx);
    return result;
}

