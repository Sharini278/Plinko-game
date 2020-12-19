class Plinko  {
    constructor(x,y){
     
  }
  
    display() {

      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(255,255,255);
      World.add(world, this.body);


    }
  }