class Rope {

    constructor(bodyA, bodyB, roofOffset) {

        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB: {x: roofOffset, y: 0},
            stiffness: 0,
            length: 240

        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.roofOffset = roofOffset;
    }

    display() {
        stroke("grey")
        strokeWeight(3);
        //console.log(this.rope.bodyA.position.x && this.rope.bodyA.position.y)
        line(this.rope.bodyA.position.x,
            this.rope.bodyA.position.y,
            // this.rope.bodyB.position.x,
            this.rope.bodyB.position.x + this.roofOffset,
            this.rope.bodyB.position.y
        );
    }
}