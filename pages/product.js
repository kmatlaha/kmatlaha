const { I } = inject();

module.exports = {
  priceText: {xpath: '//div[@class="price"]/span[@class="price-new"]'},
  colorPriceButton: {xpath: '//div[@class="form-group required "]/div/a[@class="sbSelector"]'},
  colorChoosePress: {xpath: '//ul[@class="sbOptions"][not(@style="display: none;")]/li[2]'},
  addToCartButton: {xpath: '//div[@class="quantity"]/button[@id="button-cart"]'},
  basketButton: {xpath: '//*[@id="cart"]/button/i'},
  checkoutButton: {xpath: '//div[@class="cart toggle-wrap"]/ul/li[3]/div/a[2]'},

  async getProductPrice() {
    return this.parsedInNum(await I.grabTextFrom(this.priceText));
  },

  async getProductPriceWithChosenColor() {
    I.click(this.colorPriceButton);
    I.click(this.colorChoosePress);
    return this.parsedInNum(await I.grabTextFrom(this.colorChoosePress));
  },
  
  parsedInNum(str){
    let check = false , temp = "";
      for(let i=0; i<str.length; i++) {
        if(check) temp += str[i];
        if (str[i] == '$') check = true;
      }   
      return str = parseFloat(temp);
  },
  
  clickAddToCartButton(){
    I.click(this.addToCartButton);
  },

  clickBusketButton() {
    I.click(this.basketButton);
  },

  checkoutButtonClick(){
    I.click(this.checkoutButton);
  }


  // insert your locators and methods here
}
