module.exports ={
   stringAsArray(string) {
      return string.split(',').map(item => item.trim())
   }
}