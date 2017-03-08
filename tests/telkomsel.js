const assert = require('assert')
const propeller = require('../index');

describe('test output for Telkomsel', function() {
  const TELKOMSEL = 'Telkomsel'

  it('return telkomsel for prefix 0811', function() {
    assert.equal(TELKOMSEL, propeller('0811222'));
  });

  it('return telkomsel for prefix 0812', function() {
    assert.equal(TELKOMSEL, propeller('0812'));
  });

  it('return telkomsel for prefix 0813', function() {
    assert.equal(TELKOMSEL, propeller('0813'));
  });

  it('return telkomsel for prefix 0821', function() {
    assert.equal(TELKOMSEL, propeller('0821'));
  });

  it('return telkomsel for prefix 0822', function() {
    assert.equal(TELKOMSEL, propeller('0822'));
  });

  it('return telkomsel for prefix 0823', function() {
    assert.equal(TELKOMSEL, propeller('0823'));
  });

  it('return telkomsel for prefix 0852', function() {
    assert.equal(TELKOMSEL, propeller('0852'));
  });

  it('return telkomsel for prefix 0853', function() {
    assert.equal(TELKOMSEL, propeller('0853'));
  });
});
