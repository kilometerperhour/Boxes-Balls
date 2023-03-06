var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine;

var boxes = [];
var circles = [];

var ground2;

var f = 30;
var ff = 200;
function setup() {
    createCanvas(windowWidth-1, windowHeight-4);

    var g2X = width/2;
    var g2Y = height/4*3+height/40;
    var g2W = width;
    var g2H = height/20;

    var wall1;
    var w1X = 0;
    var w1Y = height/2;
    var w1W = 1;
    var w1H = height;

    var wall2;
    var w2X = width;
    var w2Y = height/2;
    var w2W = 1;
    var w2H = height;

    rectMode(CENTER);
    ellipseMode(CENTER);
    engine = Engine.create();
    //Engine.run(engine);

    ground2 = Bodies.rectangle(g2X, g2Y, g2W, g2H, { isStatic: true });
    Composite.add(engine.world, ground2);

    wall1 = Bodies.rectangle(w1X, w1Y, w1W, w1H, { isStatic: true });
    Composite.add(engine.world, wall1);

    wall2 = Bodies.rectangle(w2X, w2Y, w2W, w2H, { isStatic: true });
    Composite.add(engine.world, wall2);

}

function mousePressed() {
    if (width / 4 < mouseX && mouseX < width / 2 && height / 4 * 3 < mouseY && mouseY < height) {
        //2nd box button
        boxes.push(new Box(random(width), random(height/3), random(width/200+height/200, width/12+height/12), random(width/200+height/200, width/12+height/12)));
    }
    else if (width / 2 < mouseX && mouseX < width / 4 * 3 && height / 4 * 3 < mouseY && mouseY < height) {
        //3rd box button
        circles.push(new Circle(random(width), random(height/3), random(width/200+height/200, width/24+height/24)));
    }

    else {

    }
}

function draw() {
    background(f);
    Engine.update(engine);

    stroke(255);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
    }


    //Clear all
    if (0 < mouseX && mouseX < width / 8 * 2 && height / 4 * 3 < mouseY && mouseY < height) {
        fill(ff);
        if (mouseIsPressed) {
            //1st box button
            for (var i = 0; i < boxes.length; i++) {
                Composite.remove(engine.world, boxes[i].body);
            }
            boxes.splice(0, boxes.length);
         }

    } else {
        fill(f);
    }
    rect(width / 8 * 1, height / 8 * 7, width / 4, height / 4);

    //Box
    if (width / 4 < mouseX && mouseX < width / 2 && height / 4 * 3 < mouseY && mouseY < height) {
        fill(ff);
    } else {
        fill(f);

    }
    rect(width / 8 * 3, height / 8 * 7, width / 4, height / 4);


    //Ball
    if (width / 2 < mouseX && mouseX < width / 4 * 3 && height / 4 * 3 < mouseY && mouseY < height) {
        fill(ff);
    } else {
        fill(f);
    }
    rect(width / 8 * 5, height / 8 * 7, width / 4, height / 4);


    //Bin
    if (width / 4 * 3 < mouseX && mouseX < width && height / 4 * 3 < mouseY && mouseY < height) {
        fill(ff);
        if (mouseIsPressed) {
            //4th box button
            for (var i = 0; i < circles.length; i++) {
                Composite.remove(engine.world, circles[i].body);
            }
            circles.splice(0, circles.length);
        }
    } else {
        fill(f);
    }
    rect(width / 8 * 7, height / 8 * 7, width / 4, height / 4);

    push();
    stroke(255);
    strokeWeight(width/100);
    noFill();
    rect(width / 8 * 3, height / 8 * 7, width / 16, width / 16);

    rect(width / 8 * 1, height / 8 * 7, width / 16, width / 16);
    line(width / 8 * 1 - width / 80, height / 8 * 7 - width / 80, width / 8 * 1 + width / 80, height / 8 * 7 + width / 80);
    line(width / 8 * 1 + width / 80, height / 8 * 7 - width / 80, width / 8 * 1 - width / 80, height / 8 * 7 + width / 80);

    circle(width / 8 * 5, height / 8 * 7, width / 14);

    circle(width / 8 * 7, height / 8 * 7, width / 14);
    line(width / 8 * 7 - width / 80, height / 8 * 7 - width / 80, width / 8 * 7 + width / 80, height / 8 * 7 + width / 80);
    line(width / 8 * 7 + width / 80, height / 8 * 7 - width / 80, width / 8 * 7 - width / 80, height / 8 * 7 + width / 80);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth-1, windowHeight-4);
  }