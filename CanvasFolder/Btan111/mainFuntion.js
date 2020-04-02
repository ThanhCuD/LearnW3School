function draw(){
    drawScreen();
    //drawSquare();
    if(fgShooting){
        if(!flgArrowLeft){
            circle.y+=speedY;
            circle.x+=speedX/(canhDoiStart/canhKeStart);
        }
        else{
            circle.y+=speedY;
            circle.x-=speedX/(canhDoiStart/canhKeStart);
        }
      
        if(circle.y <= 0){
            speedY=-speedY;
        }
        if(circle.x >= xstart+xsize || circle.x <= 0){
            speedX=-speedX;
        }
        
        if(circle.y >= ystart+ysize-box){
            fgShooting=false;
            rootPoint = {
                x: circle.x,
                y: circle.y
            }
            speedY=-speedY;
        }
        
        ctx.fillText(circle.x,200,200)
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
    let pointMeetR = {
        x : xsize,
        y : (-ptdd.a*xsize-ptdd.c)/ptdd.b
    }
    let pointMeetL = {
        x : 0,
        y : -ptdd.c/ptdd.b
    }
    ctx.beginPath();
    ctx.moveTo(rootX,rootY);
    let pointChoosed = mouseX<=rootX?pointMeetL:pointMeetR
    ctx.lineTo(pointChoosed.x,pointChoosed.y);
    ctx.stroke();
    ctx.closePath();
    
    if(pointChoosed.x<= rootPoint.x){
        flgArrowLeft = true;
        canhKeStart = distance2Point(rootPoint.x,rootPoint.y,xstart,ystart+ysize);
        canhDoiStart =  distance2Point(xstart,ystart+ysize-box,pointChoosed.x,pointChoosed.y);
    }
    else {
        flgArrowLeft = false;
        canhKeStart = distance2Point(rootPoint.x,rootPoint.y,xstart+xsize,ystart+ysize);
        canhDoiStart =  distance2Point(xstart+xsize,ystart+ysize-box,pointChoosed.x,pointChoosed.y);
    }
   
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
function ptdd1ConerAnd1Point(tanX,x0,y0){
    return {
        a : tanX,
        b : -1,
        c :y0-tanX*x0
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