function setPoint(x = 39.807222, y = -76.984722) {
   const point = {
      type: 'Point',
      coordinates: [parseFloat(x), parseFloat(y)]
   }
   
   return point
}


module.exports = setPoint