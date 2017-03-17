module.exports = function(prefix){
  const TELKOMSEL = 'Telkomsel'
  const AXIS = 'Axis'
  const TRI = 'Tri'
  const XL = 'XL'

  if (/^08[125][123]/.test(prefix)) {
    return TELKOMSEL;
  }

  if (/^08[3][1238]/.test(prefix)) {
    return AXIS
  }

  if (/^08[9][56789]/.test(prefix)) {
    return TRI
  }

  if (/^08[157][789]/.test(prefix)) {
    return XL
  }

  return false
};
