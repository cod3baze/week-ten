module.exports = {
   parseStringAsArray(array) {
      return array.split(',').map(item => item.trim())
   }
}