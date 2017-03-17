const assert = require('assert')
const propeller = require('../index')

describe('test output for XL', function() {
  const XL = 'XL'
  it('return XL for prefix 0817', function() {
    assert.equal(XL, propeller('0817'));
  });

  it('return XL for prefix 0818', function() {
    assert.equal(XL, propeller('0818'));
  });

  it('return XL for prefix 0819', function() {
    assert.equal(XL, propeller('0819'));
  });

  it('return XL for prefix 0859', function() {
    assert.equal(XL, propeller('0859'));
  });

  it('return XL for prefix 0878', function() {
    assert.equal(XL, propeller('0878'));
  });
});
