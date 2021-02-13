class Ball{
    constructor(){
        this.body=Bodies.circle(400,500,50,{density:3});
        World.add(world,this.body);
        
    }
    display(){
        ellipseMode(RADIUS);
        var t = this.body.position;
        ellipse(t.x,t.y,50,50);
    }
}