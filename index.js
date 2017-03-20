module.exports = function(prefix){
  const TELKOMSEL = 'Telkomsel'
  const AXIS = 'Axis'
  const TRI = 'Tri'
  const XL = 'XL'
  const OOREDOO = 'Mentari Ooredoo'

  if (/^08[125][123]/.test(prefix)) {
    return TELKOMSEL;
  }

  if (/^08[3][1238]/.test(prefix)) {
    return AXIS
  }

  if (/^08[9][56789]/.test(prefix)) {
    return TRI
  }

  if (/^08[1][789]/.test(prefix) || /^08[5][9]/.test(prefix) || /^08[7][89]/.test(prefix)) {
    return XL
  }

  if (/^08[1][456]/.test(prefix) || /^08[5][5678]/.test(prefix)) {
    return OOREDOO
  }

  return false
};
