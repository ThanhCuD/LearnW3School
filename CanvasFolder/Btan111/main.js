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
    y:ystart+ysize-box
}
let rootPoint = {
    x: xstart+ 30*box,
    y:ystart+ysize-box
}
let circle = new Circle(xstart+ 30*box,ystart+ysize-box,box,"pink");
let fgShooting = false;
let canhDoiStart;
let canhKeStart;
document.addEventListener("mousemove",mouseMove);
document.addEventListener("keydown",shoot);

let game = setInterval(draw,1);


