var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.style.background = "yellow";

let box = 32;

let snake = [];
snake[0] = { 
    x: 9*box,
    y:10*box
}

let food = {
    x: Math.floor(Math.random()*15+1)*box,
    y: Math.floor(Math.random()*17+3)*box,
}

let d;
document.addEventListener("keydown",direction);
function direction(e){
    var key = e.keyCode;
        if(key==37 && d!='R'){
            d='L';
        }
        if(key==38 && d!='D'){
            d='U';
        }
        if(key==39 && d!='L'){
            d='R'
        }
        if(key==40 && d!='U'){
            d='D'
        }
}
function draw(){
    ctx.clearRect(0,0,608,608);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "black";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    ctx.fillStyle = "green";
    ctx.fillRect(food.x,food.y,box,box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(d=='L'){
        snakeX-=box;
    }
    if(d=='R'){
        snakeX+=box;
    }
    if(d=='U'){
        snakeY-=box;
    }
    if(d=='D'){
        snakeY+=box;
    }
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

    if(snake[0].x == food.x && snake[0].y == food.y){
        food = {
            x: Math.floor(Math.random()*15+1)*box,
            y: Math.floor(Math.random()*17+3)*box,
        }    
    }
    else{
        snake.pop();
    }
}

let game = setInterval(draw,200);
