

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
}
function draw(){
    
    drawScreen();
    drawSquare();
    let circle = new Circle(xstart+ 30*box,ystart+ysize-box,box,"pink");
    circle.draw();
}
function drawSquare(){
    for (let index = xstart; index < xstart+xsize; index+=box) {
        for (let i = ystart; i < ystart + ysize; i+=box) {
            ctx.strokeRect(index,i,box,box);            
        }        
    }
}
