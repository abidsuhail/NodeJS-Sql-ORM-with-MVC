var randomstring = require('randomstring')
module.exports = {
  generateAuthtoken () {
    return randomstring.generate(64)
  }
}
