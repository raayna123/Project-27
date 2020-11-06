class Bob{
    constructor(x, y, radius, name) {
        var options = {
            'restitution':1.0,
            // isStatic: true,
            'friction':0,
            'density':1.0
        }
        this.name = name;
        this.body = Bodies.circle(x, y,radius , options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("pink")
        ellipseMode(CENTER)
        //console.log(`${this.name}: ${this.body.position}`)
        ellipse(this.body.position.x, this.body.position.y, this.radius*2);
        //pop();
      }
}