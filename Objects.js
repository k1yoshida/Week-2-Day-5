var car = {
  make: "Lexus",
  modelYear: 2015,
  color: "silver",
  carInformation: function(){return this.make +", "+ this.modelYear +", "+ this.color},
  speed: 0,
  getspeed: function (){
    return this.speed;
  },
  accelerate: function(){
        if (this.speed>79){
          this.speed=85;
        } else {
          this.speed += 10;
        }
  },
  brake: function(){
        if (this.speed <7) {
          this.speed=0;
        } else {
          var slippery = this.speed / 2;
          this.speed -= Math.floor(Math.random() * (slippery));
        }
  }
};

function decrease (car){
  while (car.speed>0){
    car.brake();
  }
}
function increase(car){
  while(car.speed<85){
    car.accelerate();
  }
}
