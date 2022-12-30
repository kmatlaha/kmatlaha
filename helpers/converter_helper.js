const Helper = require('@codeceptjs/helper');

class Converter extends Helper {
  parseStringToFloat(str) {
    return parseFloat(str.replaceAll(/[^0-9\.]+/g, ''));
  }
}
module.exports = Converter;
