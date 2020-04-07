let canvas = document.getElementById("canvas");
canvas.style.background = "#aaffaa";
let ctx = canvas.getContext("2d");
let box = 10;
let xsize  = 68*box;
let ysize = 68*box;
let xstart = 0*box;
let ystart = 0*box;
let turn = 0;
let mousePosition = {
    x: xstart+ 30*box,
    y: ystart+ysize-box
}
let rootPoint = {
    x: xstart + 30*box,
    y: ystart + ysize-box
}
let flgArrowLeft = false;
let fgInversion = false;
let circle = new Circle(xstart+ 30*box,ystart+ysize-box,box,"pink");
let circle1 = new Circle(xstart+ 30*box,ystart+ysize-box,box,"pink");
let arrCircle = [];
arrCircle.push(circle);
arrCircle.push(circle1);

let fgShooting = false;
let canhDoiStart;
let canhKeStart;
let speedX = box/10;
let speedY = -box/10;
document.addEventListener("mousemove",mouseMove);
document.addEventListener("keydown",shoot);

let game = setInterval(draw,-10);


