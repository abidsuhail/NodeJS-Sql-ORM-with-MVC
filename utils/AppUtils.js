var randomstring = require('randomstring')
module.exports = {
  cleanText: function (text) {
    // clean it and return
  },

  isWithinRange (text, min, max) {
    // check if text is between min and max length
  },
  generateAuthtoken () {
    return randomstring.generate(64)
  }
}
