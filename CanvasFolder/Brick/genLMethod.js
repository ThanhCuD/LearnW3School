// Gen L
function genL(x, y, size) {
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x,
            y: y + index * size,
            height: size,
            width: size
        })
    }
    rs.push({
        x: x + size,
        y: y + 2 * size,
        height: size,
        width: size
    })
    return rs;
}
function genL1(x, y, size) {
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x + index * size,
            y: y,
            height: size,
            width: size
        })
    }
    rs.push({
        x: x,
        y: y + size,
        height: size,
        width: size
    });
    return rs;
}
function genL2(x, y, size) {

    var rs = [];
    rs.push({
        x: x,
        y: y,
        height: size,
        width: size
    });
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x + size,
            y: y + index * size,
            height: size,
            width: size
        })
    }
    return rs;
}
function genL3(x, y, size) {
    var rs = [];
    rs.push({
        x: x,
        y: y,
        height: size,
        width: size
    });
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x - size * index,
            y: y + size,
            height: size,
            width: size
        })
    }

    return rs;
}
// Gen I 
function genI(x, y, size) {
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x,
            y: y + index * size,
            height: size,
            width: size
        })
    }
    return rs;
}
function genIHorizoltal(x, y, size) {
    var rs = [];
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x + index * size,
            y: y,
            height: size,
            width: size
        })
    }
    return rs;
}
// Gen Square
function genSquare(x, y, size) {
    var rs = [];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            var temp = {
                x: x + i * size,
                y: y + j * size,
                height: size,
                width: size
            }
            rs.push(temp);
        }
    }
    return rs;
}
// Gen TInserSion
function genTInverSion(x, y, size) {
    var rs = [];
    var temp = {
        x: x,
        y: y,
        height: size,
        width: size
    };
    rs.push(temp);
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x - size + index * size,
            y: y + size,
            height: size,
            width: size
        });
    }
    return rs;
}
function genTInverSion1(x, y, size) {
    var rs = [];
    var temp = {
        x: x,
        y: y,
        height: size,
        width: size
    };
    rs.push(temp);
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x - size,
            y: y + size - index*size,
            height: size,
            width: size
        });
    }
    return rs;
}
function genTInverSion2(x, y, size) {
    var rs = [];
    var temp = {
        x: x,
        y: y,
        height: size,
        width: size
    };
    rs.push(temp);
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x - size + index*size,
            y: y - size ,
            height: size,
            width: size
        });
    }
    return rs;
}
function genTInverSion3(x, y, size) {
    var rs = [];
    var temp = {
        x: x,
        y: y,
        height: size,
        width: size
    };
    rs.push(temp);
    for (let index = 0; index < 3; index++) {
        rs.push({
            x: x + size ,
            y: y + size - index*size,
            height: size,
            width: size
        });
    }
    return rs;
}