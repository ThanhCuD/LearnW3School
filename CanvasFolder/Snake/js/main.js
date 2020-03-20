let canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8"

let snake = new Snake(50,50,"black",5,context);

let UpdateSnake = (code) =>{
    requestAnimationFrame(UpdateSnake);
    context.clearRect(0,0,canvas.width,canvas.height);
    console.log(code)
    snake.update(code);
}
// event
window.addEventListener('keydown',this.check,false);
var code = 39;
function check(e) {
  var code = e.keyCode;

}
UpdateSnake(code<41?code:39);

