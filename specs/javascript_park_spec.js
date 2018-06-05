// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2

const assert = require('assert');

const Dinosaur = require('../dinosaur.js');
const Park = require('../javascript_park.js');

beforeEach(function(){
    dinosaur1 = new Dinosaur("Velociraptor", 10);
    dinosaur2 = new Dinosaur("Brachiosaurus", 5);
    dinosaur3 = new Dinosaur("T-Rex", 2);
    park = new Park();
  })

  it('should start empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add a dinosaur to enclosure', function(){
    park.addToEnclosure(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });
