const Helper = require('@codeceptjs/helper');

class ConvertCurrency extends Helper {
  async convertUsdToUah(totalPriceInUsd) {
    const { JSONResponse } = this.helpers;
    const { REST } = this.helpers;
    let response = await REST.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
    JSONResponse.seeResponseCodeIs(200);
    console.log('Response for USD rate is: ' + response.data[0].rate);
    let usdRate = parseFloat(response.data[0].rate);
    return totalPriceInUsd * usdRate;
  }
}
module.exports = ConvertCurrency;
