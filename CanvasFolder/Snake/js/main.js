let canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.style.background = "#ff8"
let box = 32;

ctx.fillStyle =  "black";
let score =0;

let snake =  [];
snake[0] = {
  x : 9*box,
  y :10*box
};
let food = {
  x:Math.floor(Math.random()*17+1)*box,
  y:Math.floor(Math.random()*15+3)*box,
}
let d;
document.addEventListener("keydown",direction);
function direction(e){
  let key = e.keyCode;
  if( key == 37 && d != "RIGHT"){
    d = "LEFT";
  }else if(key == 38 && d != "DOWN"){
      d = "UP";
  }else if(key == 39 && d != "LEFT"){
      d = "RIGHT";
  }else if(key == 40 && d != "UP"){
      d = "DOWN";
  }
}
function draw(){
  //requestAnimationFrame(draw)
  ctx.clearRect(0,0,608,608);
  for(let i=0;i<snake.length;i++){
    ctx.fillStyle = (i!=0)? "green":"white";
    ctx.fillRect(snake[i].x,snake[i].y,box,box);

    ctx.strokeStyle ="red";
    ctx.strokeRect(snake[i].x,snake[i].y,box,box);
  }
  ctx.fillRect(food.x,food.y, box, box);
  // old head position
  let  snakeX = snake[0].x;
  let  snakeY = snake[0].y;

  // direction
  if( d == "LEFT") snakeX -= box;
  if( d == "UP") snakeY -= box;
  if( d == "RIGHT") snakeX += box;
  if( d == "DOWN") snakeY += box;
  if(snakeX == food.x && snakeY == food.y){
    score++;
    food = {
        x : Math.floor(Math.random()*17+1) * box,
        y : Math.floor(Math.random()*15+3) * box
    }
    // we don't remove the tail
  }else{
      // remove the tail
      snake.pop();
  }
  
  //new head
  let newHead = {
    x: snakeX,
    y: snakeY
  }
   //remove the tail
  
  snake.unshift(newHead);

  ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}
let game = setInterval(draw,100)
//draw();
