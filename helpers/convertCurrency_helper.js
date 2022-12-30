const Helper = require('@codeceptjs/helper');

class ConvertCurrency extends Helper {
  async convertCurrencyTo(linkToCurrencyRate) {
    const { JSONResponse } = this.helpers;
    const { REST } = this.helpers;
    let response = await REST.sendGetRequest(linkToCurrencyRate);
    JSONResponse.seeResponseCodeIs(200);
    console.log('Response is: ' + response.data[0].rate);
    return parseFloat(response.data[0].rate);
  }
}
module.exports = ConvertCurrency;
