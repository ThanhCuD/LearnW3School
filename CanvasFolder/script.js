let canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8"

class Circle{
    constructor(xpos,ypos, radius,color,text,speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;
        this.dx = this.speed*1;
        this.dy = this.speed*1;
    }

    draw(context){
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign ="center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text,this.xpos,this.ypos);

        context.lineWidth = 5;
        context.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI,false);
        context.stroke();
        context.closePath();
    }
    update(){
        this.draw(context);
        if((this.xpos+this.radius)> window_width){
            this.dx = -this.dx;
        }
        if((this.xpos - this.radius) <0){
            this.dx = -this.dx;
        }
        if((this.ypos - this.radius) <0){
            this.dy = -this.dy;
        }
        if((this.ypos + this.radius) >window_height){
            this.dy = -this.dy;
        }
        this.xpos+=this.dx;
        this.ypos+=this.dy;
    }
}

let getDistance = (xpos1,ypos1,xpos2,ypos2) =>{
    let result = Math.sqrt(Math.pow(xpos1-xpos2,2)+Math.pow(ypos1-ypos2,2));
    return result;
}

let createCircle = circle => {
    circle.draw(context);   
}

let random_x = Math.random()*window_width;
let random_y = Math.random()*window_height;
let my_circle = new Circle(random_x,random_y,50,"black","A",3);
let my_circle1 = new Circle(300,300,300,"black","B",0);

let updateCircle = () =>{
    requestAnimationFrame(updateCircle)
    context.clearRect(0,0,canvas.width,canvas.height);
    my_circle.update();
    my_circle1.update();
    if(getDistance(my_circle.xpos,my_circle.ypos,my_circle1.xpos,my_circle1.ypos) < (my_circle1.radius+ my_circle.radius)){
        my_circle1.color = "red";
    }
    if(getDistance(my_circle.xpos,my_circle.ypos,my_circle1.xpos,my_circle1.ypos) > (my_circle1.radius+ my_circle.radius)){
        my_circle1.color = "black";
    }
    console.log(my_circle.color);
}

updateCircle();

// let all_circle = [];
// for(var i=0;i<1;i++){
//     let random_x = Math.random()*window_width;
//     console.log(Math.random);

//     let random_y = Math.random()*window_height;
//     let my_circle = new Circle(random_x,random_y,50,"black",circle_counter,1);
//     all_circle.push(my_circle);
//     createCircle(all_circle[i]);
//     circle_counter++;

// }

