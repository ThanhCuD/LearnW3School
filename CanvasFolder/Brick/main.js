let canvas = document.getElementById("canvas");
canvas.style.background = "gray";
let ctx = canvas.getContext("2d");
let box = 15;

let shape = new Shape(8 * box, 0 * box, box, "square", ctx);
let arrTypeShape = ["square", "I", "L"];
let arr = [];
let d;
let flgStop = false;
let arrCheckWin = [];
document.addEventListener("keydown", direction);

let game = setInterval(draw, 50);

function draw() {
    drawScreen();
    shape.draw();
    let shapeTemp = new Shape(shape.x, shape.y, shape.size, shape.type, shape.ctx);

    if (d == 'L') {
        shapeTemp.x -= box;
        if (!isCollision1vsArr(shapeTemp, arr) && distaincePointToLine(shape.x, shape.y, 1, 0, -5 * box) >= box) {
            shape.x -= box;
        }
        d = 'None';
    }

    if (d == 'R') {
        shapeTemp.x += box;
        if (!isCollision1vsArr(shapeTemp, arr) && distaincePointToLine(shape.x, shape.y, 1, 0, -18 * box) >= 3 * box) {
            shape.x += box;
        }
        d = 'None';
    }

    var rs = isCollision1vsArr(shape, arr);
    if (rs) {
        let nShape = new Shape(shape.x, shape.y, box, shape.type, ctx);
        // var lst = shape.getArrayRect();
        // for (let index = 0; index < lst.length; index++) {
                
        // }
        arr.push(nShape);
        // checkwin

        shape = newRadomShape();
    }

    let dis = shape.type == "square" ? box * 2 : box * 3;
    if (distaincePointToLine(shape.x, shape.y, 0, 1, -480) == dis) {
        let nShape = new Shape(shape.x, shape.y, box, shape.type, ctx);
        arr.push(nShape);
        // checkwin
        //var rs = CheckWin();
        shape = newRadomShape();
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].draw();
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
        var tempArr = arr[i].getArrayRect();
        for (let j = 0; j < tempArr.length; j++) {
            for (let k = 0; k < tempRect.length; k++) {
                if (checkCollisionRect(tempRect[k], tempArr[j])) {
                    return true;
                }
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
    ctx.lineTo(box * 5, box*32);
    ctx.lineTo(box * 18, box*32);
    ctx.lineTo(box * 18, 0);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "black";
}
function CheckWin(){
    if(arr.length==0) return false;
    for(let h=0;i<32;i++){
        for(let w=0;w<13;w++){
           for(let i=0;i<arr.length;i++){

           } 
        }
    }
}
