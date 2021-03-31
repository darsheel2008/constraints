class Chain{
    constructor(bodyA,bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.8,
            lenght:10
        }
        this.Chain=Constraint.create(options);

        World.add(world,this.Chain);
    }

    display(){
        var pointa=this.Chain.bodyA.position;
        var pointb=this.Chain.bodyB.position;
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x,pointb.y);
    }

}