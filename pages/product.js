const { I } = inject();
const Helper = require('../helpers/helper.js');

module.exports = {
  priceText: { xpath: '//div[@class="price"]/span[1]' },
  colorPriceButton: { xpath: '//div[@id="product"]/div/div[@class="sbHolder"]/a[2]' },
  colorChoosePress: { xpath: '//ul[@class="sbOptions"][not(@style="display: none;")]/li[2]' },
  addToCartButton: { xpath: '//div[@class="quantity"]/button[@id="button-cart"]' },
  basketButton: { xpath: '//*[@id="cart"]/button/i' },
  checkoutButton: { xpath: '//div[@class="cart toggle-wrap"]/ul/li/div/a[@class="btn-primary btn-r"]' },

  async getProductPrice() {
    return I.parseStringToFloat(await I.grabTextFrom(this.priceText));
  },

  async checkColorForProduct() {
    return await Helper.checkElementIsVisible(this.colorPriceButton);
  },

  async getProductPriceWithChosenColor() {
    if (await Helper.checkElementIsVisible(this.colorPriceButton)) {
    I.click(this.colorPriceButton);
    I.click(this.colorChoosePress);
    return I.parseStringToFloat(await I.grabTextFrom(this.colorChoosePress));
    } else {
      return 0;
    }
  },

  addProductToCart() {
    I.click(this.addToCartButton);
    I.click(this.basketButton);
    I.click(this.checkoutButton);
  },
}
