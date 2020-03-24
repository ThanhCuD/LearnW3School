class Shape {
    constructor(x, y, size, type, ctx) {
        this.x = x,
            this.y = y,
            this.size = size,
            this.type = type,
            this.ctx = ctx,
            this.arrRect = [];
    };
    draw() {
        this.arrRect = this.getArrayRect();
        for (let i = 0; i < this.arrRect.length; i++) {
            //this.ctx.fillStyle = getRandomColor();
            this.ctx.fillRect(this.arrRect[i].x, this.arrRect[i].y, this.arrRect[i].width, this.arrRect[i].height);
            this.ctx.strokeRect(this.arrRect[i].x, this.arrRect[i].y, this.arrRect[i].width, this.arrRect[i].height);
        }
    }
    getArrayRect() {
        let result = [];
        switch (this.type) {
            case "square":
                result = genSquare(this.x, this.y, this.size);
                break;
            case "I":
                result = genI(this.x, this.y, this.size);
                break;
            case "Ihori":
                result = genIHorizoltal(this.x, this.y, this.size);
                break;
            case "L":
                result = genL(this.x, this.y, this.size);
                break;
            case "L1":
                result = genL1(this.x, this.y, this.size);
                break;
            case "L2":
                result = genL2(this.x, this.y, this.size);
                break;
            case "L3":
                result = genL3(this.x, this.y, this.size);
                break;
            case "TInverSion":
                result = genTInverSion(this.x, this.y, this.size);
                break;
            case "TInverSion1":
                result = genTInverSion1(this.x, this.y, this.size);
                break;
            case "TInverSion2":
                result = genTInverSion2(this.x, this.y, this.size);
                break;
            case "TInverSion3":
                result = genTInverSion3(this.x, this.y, this.size);
                break;
        }
        return result;
    }
    getDistaince(a, b, c, direct) {
        var result = distaincePointToLine(this.x, this.y, a, b, c);
        switch (this.type) {
            case "square":
                if (direct == "R") {
                    result -= this.size * 2;
                }
                break;
            case "I":
                if (direct == "R") {
                    result -= this.size * 1;
                };
                break;
            case "L":
            case "L2":
                if (direct == "R") {
                    result -= this.size * 2;
                }
                break;
            case "L1":
                if (direct == "R") {
                    result -= this.size * 3;
                }
                break;
            case "L3":
                if (direct == "R") {
                    result -= this.size;
                }
                else if (direct == "L") {
                    result -= this.size * 2;
                }
                break;
            case "Ihori":
                if (direct == "R") {
                    result -= this.size * 3;
                }
                break;
            case "TInverSion":
                if (direct == "R") {
                    result -= this.size * 2;
                } else if (direct == "L") {
                    result -= this.size;
                }
                break;
            case "TInverSion2":
                if (direct == "R") {
                    result -= this.size * 2;
                } else if (direct == "L") {
                    result -= this.size;
                }
                break;
            case "TInverSion1":

                if (direct == "R") {
                    result -= this.size;
                } else if (direct == "L") {
                    result -= this.size;
                }
                break;
            case "TInverSion3":
                if (direct == "R") {
                    result -= this.size*2;
                } else if (direct == "L") {
                }
                break;
        }
        return result;
    }
    Transform() {
        if (this.type == "I") {
            return "Ihori";
        }
        else if (this.type == "Ihori") {
            return "I";
        } else if (this.type == "square") {
            return "square"
        }
        else if (this.type == "L") {
            return "L1"
        }
        else if (this.type == "L1") {
            return "L2"
        }
        else if (this.type == "L2") {
            return "L3"
        } else if (this.type == "L3") {
            return "L"
        }
        else if (this.type == "TInverSion") {
            return "TInverSion1"
        }
        else if (this.type == "TInverSion1") {
            return "TInverSion2"
        }
        else if (this.type == "TInverSion2") {
            return "TInverSion3"
        }
        else if (this.type == "TInverSion3") {
            return "TInverSion"
        }
    }
}
function distaincePointToLine(x, y, a, b, c) {
    var result = Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
    return result;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
