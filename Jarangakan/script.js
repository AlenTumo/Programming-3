let matrix = [];
let rows = 50;
let columns = 50;


for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 85);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0;
        }
        if (a >= 20 && a < 55) {
            matrix[y][x] = 1;
        }
        else if (a >= 55 && a < 60) {
            matrix[y][x] = 2;
        }
        else if (a >= 60 && a < 70) {
            matrix[y][x] = 3;
        }
        else if (a >= 70 && a < 77) {
            matrix[y][x] = 4;
        }
        else if (a >= 77 && a < 85) {
            matrix[y][x] = 5;


        }
    }
}



var grassArr = [];
var grassEaterArr = [];
var gishatichArr = []
var gaylArr = []
var gerhzorArr = []
var side = 60;


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);
            }
            else if (matrix[y][x] == 3) {
                var gs = new Gishatich(x, y, 3);
                gishatichArr.push(gs);
            }
            else if (matrix[y][x] == 4) {
                var ge = new Gerhzor(x, y, 4);
                gerhzorArr.push(ge);

            }
            else if (matrix[y][x] == 5) {
                var gl = new Gayl(x, y, 5);
                gaylArr.push(gl);
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side + 1, y * side + 1, side - 1, side - 1);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side + 1, y * side + 1, side - 1, side - 1);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side + 1, y * side + 1, side - 1, side - 1);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side + 1, y * side + 1, side - 1, side - 1);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side + 1, y * side + 1, side - 1, side - 1);
            }
            else if (matrix[y][x] == 5) {
                fill("brown");
                rect(x * side + 1, y * side + 1, side - 1, side - 1);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        gishatichArr[i].move();
        gishatichArr[i].mul();
        gishatichArr[i].die()
    }
    for (var i in gerhzorArr) {
        gerhzorArr[i].eat()
        //gerhzorArr[i].move()
        gerhzorArr[i].mul()
        gerhzorArr[i].die()
    }
    for (var i in gaylArr) {
        gaylArr[i].eat()
        //gaylArr[i].move()
        gaylArr[i].mul()
        gaylArr[i].die()
    }
}


