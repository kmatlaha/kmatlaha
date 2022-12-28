const Helper = require('@codeceptjs/helper');

class Converter extends Helper {
  parseStringToFloat(str) {
    return parseFloat(str.replaceAll(/[^0-9\.]+/g, ''));
  }

  

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = Converter;
