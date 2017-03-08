const assert = require('assert')
const propeller = require('../index')

describe('test output for Axis', function() {
  const AXIS = 'Axis'
  it('return axis for prefix 0838', function() {
    assert.equal(AXIS, propeller('0838'));
  });

  it('return axis for prefix 0831', function() {
    assert.equal(AXIS, propeller('0831'));
  });

  it('return axis for prefix 0832', function() {
    assert.equal(AXIS, propeller('0832'));
  });

  it('return axis for prefix 0833', function() {
    assert.equal(AXIS, propeller('0833'));
  });
});
