function draw(){
    drawScreen();
    //drawSquare();
    if(fgShooting){
        circle.y-=box/10;
        if(circle.y==box) {
            fgShooting=false;
        }
    }
    circle.draw();
    let block = new Block(xstart+5*box,ystart+5*box,"square",);
    block.draw();
}

function drawScreen() {
    ctx.clearRect(0,0, 2000, 2000);
    ctx.beginPath();
    ctx.moveTo(xstart, ystart);
    ctx.lineTo(xstart, ystart+ysize);
    ctx.lineTo(xstart+ xsize, ystart+ysize);
    ctx.lineTo(xstart+xsize, ystart);
    ctx.lineTo(xstart, ystart);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "red";
    drawArrow(mousePosition.x,mousePosition.y,rootPoint.x,rootPoint.y);
}

function drawSquare(){
    for (let index = xstart; index < xstart+xsize; index+=box) {
        for (let i = ystart; i < ystart + ysize; i+=box) {
            ctx.strokeRect(index,i,box,box);            
        }        
    }
}

function drawArrow(mouseX,mouseY,rootX,rootY){
    var ptdd = ptddThrough2Point(mouseX,mouseY,rootX,rootY);
    let pointMeet = {
        x : xsize,
        y : (-ptdd.a*xsize-ptdd.c)/ptdd.b
    }
    ctx.beginPath();
    ctx.moveTo(rootX,rootY);
    ctx.lineTo(pointMeet.x,pointMeet.y);
    ctx.stroke();
    ctx.closePath();

    let d = distaincePointToLine(rootX,rootY,1,0,-xstart-xsize);
    let k = distaincePointToLine(pointMeet.x,pointMeet.y,0,1,-ystart-ysize);

    let angleDeg = getAngleDeg(d,k);
    var ptdd2 = ptdd1ConerAnd1Point(Math.tan(angleDeg),pointMeet.x,pointMeet.y);
    let pointMeet2 = {
        x : 0,
        y : ptdd2.b
    }
    ctx.fillText(pointMeet.y-Math.tan(angleDeg)*pointMeet.x,200,200);
    ctx.beginPath();
    ctx.moveTo(pointMeet.x,pointMeet.y);
    ctx.lineTo(pointMeet2.x,pointMeet2.y);
    ctx.stroke();
    ctx.closePath();
}
// event 
function shoot(event){
    if(event.keyCode == 32){
        fgShooting = true;
    }
}
function mouseMove(event){
    mousePosition.x = event.pageX,
    mousePosition.y = event.pageY;
}
function ptddThrough2Point(x1,y1,x2,y2){
    let a = (y1-y2)/(x1-x2);
    let b = y1 -a*x1;
    return {
        a :a,
        b :-1,
        c :b
    }
}
function ptdd1ConerAnd1Point(tanX,x1,y1){
    // y = ax+b;
    let b = y1-tanX*x1;
    return {
        a :tanX,
        b :-1,
        c :b
    }
}

function distance2Point(x1,y1,x2,y2){
   var result = Math.sqrt((Math.pow(x1-x2,2))+Math.pow(y1-y2,2));
   return result;
}
function getAngleDeg(d,k) {
    var angleRad = Math.atan(d/k);
    var angleDeg = angleRad * 180 / Math.PI;
    return(angleDeg);
  }
  
function distaincePointToLine(x,y,a,b,c){
    var result = Math.abs(a*x+b*y+c)/Math.sqrt(a*a+b*b);
    return result;
}