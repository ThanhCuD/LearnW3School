let canvas = document.getElementById("canvas");
canvas.style.background = "gray";
let ctx = canvas.getContext("2d");
let box = 15;

let shape = new Shape(8 * box, 0 * box, box, "square", ctx);
//let arrTypeShape = ["square", "I", "L","Ihori","TInverSion",
//"TInverSion1","TInverSion2","TInverSion3","TInverSion4","L1","L2","L3"];
let arrTypeShape = ["TInverSion2"];
let score = 0;
let arr = [];
let d;
let flgStop = false;
let flgTrainform = false;
let arrCheckWin = [];
let isSpeed = false;
document.addEventListener("keydown", direction);

let game = setInterval(draw,100);

function draw() {
    drawScreen();
    shape.draw();
    ctx.fillText("score :", 10, 2 * box, 5000);
    ctx.fillText(score, 10, 4 * box, 5000);
    ctx.font = "20px Arial";
    if (flgTrainform) {
        var temp = new Shape(shape.x, shape.y, shape.size, shape.Transform(), shape.ctx);
        if (!isCollision1vsArr(temp, arr)) {
            shape = temp;
        }
        flgTrainform = false;
    }
    let shapeTemp = new Shape(shape.x, shape.y, shape.size, shape.type, shape.ctx);
    if (d == 'L') {
        shapeTemp.x -= box;
        if (!isCollision1vsArr(shapeTemp, arr) && shape.getDistaince(1, 0, -5 * box, "L") > 0) {
            shape.x -= box;
        }
        d = 'None';
    }

    else if (d == 'R') {
        shapeTemp.x += box;
        if (!isCollision1vsArr(shapeTemp, arr) && shape.getDistaince(1, 0, -18 * box, "R") > 0) {
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
        if (arrWin.length != 0) {
            for (let index = 0; index < arrWin.length; index++) {
                arr = pushDownTheArr(arrWin[index], arr);
                score++;
            }
        }
        shape = newRadomShape();
    }


    let dis = shape.type == "square" ? box * 2 : box * 3;
    switch (shape.type) {
        case "square":
        case "L3":
            dis = box * 2;
            break;
        case "I":
            dis = box * 3;
            break;
        case "L":
            dis = box * 3;
            break;
        case "L1":
            dis = box * 2;
            break;
        case "Ihori":
            dis = box;
            break;
        case "TInverSion":
        case "TInverSion1":
        case "TInverSion3":
            dis = box * 2;
            break;
        case "TInverSion2":
            dis = box;
            break;
    }
    if (distaincePointToLine(shape.x, shape.y, 0, 1, -480) == dis) {
        var lst = shape.getArrayRect();
        for (let index = 0; index < lst.length; index++) {
            arr.push(lst[index]);
        }
        var arrWin = CheckWin();
        if (arrWin.length != 0) {
            for (let index = 0; index < arrWin.length; index++) {
                arr = pushDownTheArr(arrWin[index], arr);
                score++;
            }
        }
        shape = newRadomShape();
    }
    for (let i = 0; i < arr.length; i++) {
        drawBox(arr[i].x, arr[i].y);
    }

    if (!flgStop) {
        shape.y += box;
        if(isSpeed){
            shape.y+=box;
            isSpeed = false;
        }
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
    else if (code == 83) {
        flgStop = !flgStop;
    }
    else if (code == 32) {
        flgTrainform = true;
    }
    else if (code == 40) {
        isSpeed= true;
    }
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
function drawBox(x, y) {
    ctx.fillRect(x, y, box, box);
    ctx.strokeRect(x, y, box, box);
}
function CheckWin() {
    if (arr.length == 0) return [];
    var rs = [];
    for (let index = 0; index <= 32; index++) {
        var winCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].y / 15 == index) {
                winCount++;
            }
        }
        if (winCount == 13) {
            rs.push(index)
        }
    }
    return rs;
}
function pushDownTheArr(n, arr) {
    var arr1 = arr.filter(_ => _.y / 15 < n);
    var arr2 = arr.filter(_ => _.y / 15 > n);
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = {
            x: arr1[i].x,
            y: arr1[i].y + box,
            height: box,
            width: box
        }
    }
    var rs = arr1.concat(arr2);
    return rs;
}
