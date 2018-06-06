const Dinosaur = require('./dinosaur.js');

const Park = function(){
  this.enclosure = [];
}

Park.prototype.addToEnclosure = function(dinosaur){
  this.enclosure.push(dinosaur);
};

Park.prototype.removeByType = function(dinosaurtype){
  for (var counter = 0; counter < this.enclosure.length; counter++){
    if (dinosaur.type === dinosaurtype){
      this.enclosure.pop(dinosaur);
    }
  }
};

Park.prototype.checkIfMoreThanTwoOffspring = function(){
  var total = 0;
  for (var i = 0; i < this.enclosure.length; i++){
    dinosaur = this.enclosure[i];
    if (dinosaur.offspringPerYear > 2){
      var total = total + 1;
    }
  } return total;
};


module.exports = Park;
