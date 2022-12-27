const { I } = inject();

module.exports = {

  orderIdText: { xpath: '//*[@id="content"]/div[1]/table/tbody/tr[1]/td[1]' },
  myAccountButtonOnTopPanel: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  orderHistoryButtonInMyAccountDropdown: { xpath: '//*[@id="top-links"]/ul/li/ul/li[2]/a' },

  checkIdOfLastOrder() {
    I.click(this.myAccountButtonOnTopPanel);
    I.click(this.orderHistoryButtonInMyAccountDropdown);
  },

  async getOrderIdText() {
    return await I.grabTextFrom(this.orderIdText);
  },
}
