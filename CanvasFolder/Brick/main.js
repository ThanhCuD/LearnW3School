let canvas = document.getElementById("canvas");
canvas.style.background = "gray";
let ctx = canvas.getContext("2d");
let box = 15;

let shape = new Shape(8 * box, 0 * box, box, "square", ctx);
let arrTypeShape = ["square", "I", "L","Ihori"];
//let arrTypeShape = ["Ihori"];
let arr = [];
let d;
let flgStop = false;
let arrCheckWin = [];
document.addEventListener("keydown", direction);

let game = setInterval(draw, 100);

function draw() {
    drawScreen();
    shape.draw();
    let shapeTemp = new Shape(shape.x, shape.y, shape.size, shape.type, shape.ctx);

    if (d == 'L') {
        shapeTemp.x -= box;
        if (!isCollision1vsArr(shapeTemp, arr) && shape.getDistaince(1, 0, -5 * box,"L") >0) {
            shape.x -= box;
        }
        d = 'None';
    }

    else if (d == 'R') {
        shapeTemp.x += box;
        if (!isCollision1vsArr(shapeTemp, arr) && shape.getDistaince(1, 0, -18 * box,"R") > 0) {
            shape.x += box;
        }
        d = 'None';
    }

    var rs = isCollision1vsArr(shape, arr);
    if (rs) {
        var lst = shape.getArrayRect();
        for (let index = 0; index < lst.length; index++) {
            arr.push(lst[index]);
        } 
        var arrWin = CheckWin();
        if(arrWin.length!=0){
            for (let index = 0; index < arrWin.length; index++) {
                arr = pushDownTheArr(arrWin[index],arr);
            }
        }
        shape = newRadomShape();
    }


    let dis = shape.type == "square" ? box * 2 : box * 3;
    switch(shape.type){
        case "square":
            dis = box*2;
            break;
        case "I":
            dis = box*3;
            break;
        case "L":
            dis=box*3;
            break;
        case "Ihori":
            dis=box;
            break;
        }
    if (distaincePointToLine(shape.x, shape.y, 0, 1, -480) == dis) {
        var lst = shape.getArrayRect();
        for (let index = 0; index < lst.length; index++) {
            arr.push(lst[index]);
        }
        var arrWin = CheckWin();
        if(arrWin.length!=0){
            for (let index = 0; index < arrWin.length; index++) {
                arr = pushDownTheArr(arrWin[index],arr);
            }
        }
        shape = newRadomShape();
    }
    for (let i = 0; i < arr.length; i++) {
        drawBox(arr[i].x,arr[i].y);
    }

    if (!flgStop) {
        shape.y += box;
    }
}
function direction(e) {
    var code = e.keyCode;
    if (code == 37) {
        d = 'L'
    }
    else if (code == 39) {
        d = 'R'
    }
    else if (code == 32) {
        flgStop = !flgStop;
    }
}

function distaincePointToLine(x, y, a, b, c) {
    var result = Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
    return result;
}
function checkCollisionRect(rect1, rect2) {
    var result = (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y <= rect2.y + rect2.height &&
        rect1.y + rect1.height >= rect2.y);
    return result;
}
function isCollision1vsArr(rect1, arr) {
    var tempRect = rect1.getArrayRect();
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < tempRect.length; k++) {
            if (checkCollisionRect(tempRect[k], arr[i])) {
                return true;
            }
        }
    }
    return false;
}

function newRadomShape() {
    var numRandom = Math.floor(Math.random() * arrTypeShape.length);
    var result = new Shape(8 * box, 0 * box, box, arrTypeShape[numRandom], ctx);
    return result;
}

function drawScreen() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
    ctx.moveTo(box * 5, 0);
    ctx.lineTo(box * 5, box * 32);
    ctx.lineTo(box * 18, box * 32);
    ctx.lineTo(box * 18, 0);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "black";
}
function drawBox(x,y){
    ctx.fillRect(x,y,box,box);
    ctx.strokeRect(x,y,box,box);
}
function CheckWin() {
    if (arr.length == 0) return [];
    var rs = [];
    for (let index = 0; index <= 32; index++) {
        var winCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].y/15==index){
                winCount++;
            }            
        }        
        if(winCount==13) 
        {
            rs.push(index)
        }
    }
    return rs;
}
function pushDownTheArr(n,arr){
    var arr = arr.filter(_=>_.y/15<n);
    var arr2 = arr.filter(_=>_.y/15>n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = {
          x: arr[i].x,
          y: arr[i].y+box,
          height: box,
          width: box
        }        
    }
    var rs = arr.concat(arr2);
    return rs;
}
