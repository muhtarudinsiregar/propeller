module.exports = function(prefix){
  const TELKOMSEL = 'Telkomsel'
  const AXIS = 'Axis'

  if (/^08[125][123]/.test(prefix)) {
    return TELKOMSEL;
  }

  if (/^08[3][1238]/.test(prefix)) {
    return AXIS
  }

  return false
};
