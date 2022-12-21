const { I } = inject();

module.exports = {
  priceText: { xpath: '//div[@class="price"]/span[@class="price-new"]' },
  colorPriceButton: { xpath: '//div[@class="form-group required "]/div/a[@class="sbSelector"]' },
  colorChoosePress: { xpath: '//ul[@class="sbOptions"][not(@style="display: none;")]/li[2]' },
  addToCartButton: { xpath: '//div[@class="quantity"]/button[@id="button-cart"]' },
  basketButton: { xpath: '//*[@id="cart"]/button/i' },
  checkoutButton: { xpath: '//div[@class="cart toggle-wrap"]/ul/li[3]/div/a[2]' },

  async getProductPrice() {
    return I.parseStringToFloat(await I.grabTextFrom(this.priceText));
  },

  async getProductPriceWithChosenColor() {
    I.click(this.colorPriceButton);
    I.click(this.colorChoosePress);
    return I.parseStringToFloat(await I.grabTextFrom(this.colorChoosePress));
  },

  addProductToCart() {
    I.click(this.addToCartButton);
    I.click(this.basketButton);
    I.click(this.checkoutButton);
  },
}
