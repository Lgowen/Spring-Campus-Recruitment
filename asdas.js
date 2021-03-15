const rgba = 'rgba(117,43,174, 1)'
console.log(rgba.split(','));
function getHexColor (color) {
    const values = color
      .replace(/rgba?\(/, '')
      .replace(/\)/, '')
      .replace(/[\s+]/g, '')
      .split(',')
    console.log(values)
    const a = parseFloat(values[3] || 1)
    const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255)
    console.log(a * parseInt(values[0]));
    const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255)
    const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
    const result = '#' +
      ('0' + r.toString(16)).slice(-2) +
      ('0' + g.toString(16)).slice(-2) +
      ('0' + b.toString(16)).slice(-2)
    console.log(result, 'asdasdadaad')
    return result
  }

  console.log(getHexColor(rgba));