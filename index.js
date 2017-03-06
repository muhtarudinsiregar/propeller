module.exports = function(prefix){
  const TELKOMSEL = 'Telkomsel'

  if (/^08[125][123]/.test(prefix)) {
    return TELKOMSEL;
  }

  return false
};
