const { I } = inject();

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerLink: { xpath: '//a[.="Register"]' },
  emptyCartText: { xpath: "//p[text() = 'Your shopping cart is empty!']" },
  cartIcon: { css: "i.linearicons-cart" },
  trashBin: {css: 'i.linearicons-trash'},

  openRegistrationPage() {
    I.click(this.myAccountSpoiler);
    I.click(this.registerLink);
  },

  async emptyCart() {
    I.click(this.cartIcon);
    let numOfElements = await I.grabNumberOfVisibleElements(this.trashBin);
      for(let i=numOfElements; i>0; i--) {
            I.click({xpath: `(//i[@class="linearicons-trash"])[${i}]`});
        };
  },
}
