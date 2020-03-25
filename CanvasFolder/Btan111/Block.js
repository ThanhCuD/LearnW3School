
class Block {
    constructor(x, y, type, color) {
        this.x = x,
            this.y = y,
            this.type = type,
            this.color = color,
            this.value = 0;
    }
    draw() {
        switch (this.type) {
            case "square":
                ctx.fillRect(this.x, this.y, box * 4, box * 4);
                ctx.strokeRect(this.x, this.y, box * 4, box * 4);
                
                ctx.fillStyle = "black";
                ctx.font = "20px Georgia";
                ctx.fillText(this.value, this.x + box * 1.4, this.y + box * 2.4);
                break;
            default:
                ctx.strokeRect(this.x, this.y, box * 3, box * 3);
                break;
        }
    }
}