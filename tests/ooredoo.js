const assert = require('assert')
const propeller = require('../index')

describe('test output for Mentar Ooredoo', function() {
  const Ooredoo = 'Mentari Ooredoo'

  it('return Ooredoo for prefix 0814', function() {
    assert.equal(propeller('0814'), Ooredoo);
  });

  it('return Ooredoo for prefix 0815', function() {
    assert.equal(propeller('0815'), Ooredoo);
  });

  it('return Ooredoo for prefix 0816', function() {
    assert.equal(propeller('0816'), Ooredoo);
  });

  it('return Ooredoo for prefix 0855', function() {
    assert.equal(propeller('0855'), Ooredoo);
  });

  it('return Ooredoo for prefix 0856', function() {
    assert.equal(propeller('0856'), Ooredoo);
  });

  it('return Ooredoo for prefix 0857', function() {
    assert.equal(propeller('0857'), Ooredoo);
  });

  it('return axis for prefix 0858', function() {
    assert.equal(propeller('0858'), Ooredoo);
  });
});
