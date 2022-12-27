const { I } = inject();
const Helper = require('../helpers/helper.js'); 

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerLink: { xpath: '//a[.="Register"]' },
  emptyCartText: { xpath: "//p[text() = 'Your shopping cart is empty!']" },
  cartIcon: { css: "i.linearicons-cart" },

  openRegistrationPage() {
    I.click(this.myAccountSpoiler);
    I.click(this.registerLink);
  },

  clickCartIcon(){
    I.click(this.cartIcon);
  },

  async checkCartIsEmpty() {
    return await Helper.checkElementIsVisible(this.emptyCartText);
  },

  async emptyCart() {
    let isCartEmpty = await this.checkCartIsEmpty();
    if (isCartEmpty==false) {
      let attributesArray = await I.grabAttributeFromAll({css: 'i.linearicons-trash'}, 'class');
      console.log("Array size:" + attributesArray.length);
      for(let i=attributesArray.length; i>0; i--) {
            I.click({xpath: `(//i[@class="linearicons-trash"])[${i}]`});
        };
    }
  },
}
