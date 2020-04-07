let canvas = document.getElementById("canvas");
canvas.style.background = "#aaffaa";
let ctx = canvas.getContext("2d");
var bg = new Block(10,120,30,30);

function draw() {
    ctx.clearRect(0,0,650,150);
    if(!bg.stand){
        if(bg.jump){
            bg.y  -= 10;
        }
        else if (bg.fall){
            bg.y+=10;
        }
        if(bg.y<=0){
            bg.fall = true;
            bg.jump = false;
        }
        if(bg.y>=120){
            bg.stand = true;
        }
    }
    bg.draw();
}
function jump(event){
    let key = event.keyCode;
    if(key==38){
        bg.stand = false;
        bg.jump = true;
    }
}
document.addEventListener("keydown",jump);

let game = setInterval(draw,100);


