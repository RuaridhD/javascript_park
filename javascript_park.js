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


module.exports = Park;
