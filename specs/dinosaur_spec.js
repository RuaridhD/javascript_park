// should have a type
// should have a number of offspring per year

const assert = require('assert');

const Dinosaur = require('../dinosaur.js');

beforeEach(function(){
    dinosaur = new Dinosaur("Velociraptor", 10);
  })

  it('should have a type', function(){
    assert.strictEqual(dinosaur.type, "Velociraptor");
  });

  it('should have a number of offspring per year', function(){
    assert.strictEqual(dinosaur.offspringPerYear, 10);
  });
