const Helper = require('@codeceptjs/helper');

class ConvertCurrency extends Helper {
  async convertUsdToUah() {
    const { JSONResponse } = this.helpers;
    const { REST } = this.helpers;
    let response = await REST.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
    JSONResponse.seeResponseCodeIs(200);
    console.log('Response is: ' + response.data[0].rate);
    return parseFloat(response.data[0].rate);
  }
}
module.exports = ConvertCurrency;
