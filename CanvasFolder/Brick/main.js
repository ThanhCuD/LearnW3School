let canvas = document.getElementById("canvas");
canvas.style.background = "gray";

let ctx = canvas.getContext("2d");
let box = 15;

let shape = {
    x:7*box,
    y:0*box
}
let arr = [];
let d;
document.addEventListener("keydown",direction);
function direction(e){
    var code = e.keyCode;
    if(code == 37){
        d = 'L'
    }
    else if(code ==39){
        d = 'R'
    }
    else if(code==32){
        d='S'
    }
}

// y = 480;
function distaincePointToLine(x,y,a,b,c){
    var result = Math.abs(a*x+b*y+c)/Math.sqrt(a*a+b*b);
    return result;
}
function checkCollision(rect1,rect2){
    var result = (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y <= rect2.y + rect2.height &&
    rect1.y + rect1.height >= rect2.y);
    return result;
}
function draw(){
    ctx.clearRect(0,0,480,480);
    ctx.strokeRect(0,0,480,480);
    ctx.fillStyle = "green";
    ctx.fillRect(shape.x,shape.y,box*2,box*2);
    
    if(d=='L'){
        shape.x-=box;
        d = 'None';
    }
    if(d=='R'){
        shape.x +=box;
        d = 'None';
    }
    
    var dis = distaincePointToLine(shape.x,shape.y,0,1,-480);
    ctx.font = "30px Arial";
    ctx.fillText(dis,5*box,5*box);

    for (let i = 0; i < arr.length; i++) {
        var rect1  = {
            x: shape.x, y: shape.y, width: box*2, height: box*2
        };
        var rect2  = {
            x: arr[i].x, y: arr[i].y, width: box*2, height: box*2
        }
        var result = checkCollision(rect1,rect2);
        console.log(result);
        if(result){
            let nShape = {
                x: shape.x,
                y: shape.y
            }
            arr.push(nShape);
            shape = {
                x:7*box,
                y:0*box
            }        
        }
    }


   if(distaincePointToLine(shape.x,shape.y,0,1,-480)==box*2){
        let nShape = {
            x: shape.x,
            y: shape.y
        }
        arr.push(nShape);
        shape = {
            x:7*box,
            y:0*box
        }
   }
    for (let i = 0; i < arr.length; i++) {
        ctx.fillRect(arr[i].x,arr[i].y,box*2,box*2);
    }
    
    if(d!='S'){
        shape.y+=box;
    }
    

}

let game = setInterval(draw,300);