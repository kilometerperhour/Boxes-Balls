function Circle(x, y, d) {
    this.body = Bodies.circle(x, y, d);
    this.d = d * 2;
    Composite.add(engine.world, this.body);
    var r = random(255);
    var g = random(255);
    var b = random(255);

    this.removeFromWorld = function () {
        World.remove(world, this.body);
    }

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        noStroke();
        fill(r, g, b);
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.d);
        pop();
    }
}