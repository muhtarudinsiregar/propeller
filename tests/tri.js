const assert = require('assert')
const propeller = require('../index')

const TRI = 'Tri'

describe('test output for Tri Operator', function() {
  it('return tri operator for prefix 0895', function() {
    assert.equal(TRI, propeller('0895'))
  });

  it('return tri operator for prefix 0896', function() {
    assert.equal(TRI, propeller('0896'))
  });

  it('return tri operator for prefix 0897', function() {
    assert.equal(TRI, propeller('0897'))
  });

  it('return tri operator for prefix 0898', function() {
    assert.equal(TRI, propeller('0898'))
  });

  it('return tri operator for prefix 0899', function() {
    assert.equal(TRI, propeller('0899'))
  });
});
