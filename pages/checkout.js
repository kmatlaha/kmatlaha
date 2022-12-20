const { I } = inject();

module.exports = {
checkoutHeaderText: 'Checkout',
newBillingAddressButton: {xpath: '//*[@id="collapse-payment-address"]/div/form/div[3]/label'},
firstNameBillingField: {css: '#input-payment-firstname'},
lastNameBillingField: {css: '#input-payment-lastname'},
companyBillingField: {css: '#input-payment-company'},
address1BillingField: {css: '#input-payment-address-1'},
address2BillingField: {css: '#input-payment-address-2'},
cityBillingField: {css: '#input-payment-city'},
postcodeBillingField: {css: '#input-payment-postcode'},
regionStateButton: {xpath: '//a[contains(text(), "--- Please Select ---")]'},
regionSelectorChoice: {xpath: '//a[contains(text(), "Aberdeen")]'},
continueOnCheckoutPageButton: {xpath: '//*[@id="button-payment-address"]'},
continueForDeliveryDetails: {xpath: '//*[@id="button-shipping-address"]'},
continueDeliveryMethodButton: {xpath: '//*[@id="button-shipping-method"]'},
termsAndConditionsAgreementButton: {xpath: '//*[@id="agree1"]'},
continueForPaymentMethod: {xpath: '//*[@id="button-payment-method"]'},
flatShippingRatePriceText: {xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]'},
ecoTaxPriceText: {xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]'},
vatPriceText: {xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[4]/td[2]'},
totalPriceText: {xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[5]/td[2]'},
confirmOrderButtonOnCheckoutPage: {xpath: '//*[@id="button-confirm"]'},
successfulOrderTextForSuccess: 'Your order has been placed!',
orderIdText: {xpath: '//*[@id="content"]/div[1]/table/tbody/tr[1]/td[1]'},
myAccountButtonOnTopPanel: {xpath: '//*[@id="top-links"]/ul/li/span/span'},
orderHistoryButtonInMyAccountDropdown: {xpath: '//*[@id="top-links"]/ul/li/ul/li[2]/a'},

verifyCheckoutPageText() {
  I.see(this.checkoutHeaderText);
},

fillCheckoutDetails(billingDetails) {
  I.fillField(this.firstNameBillingField, billingDetails.firstName);
  I.fillField(this.lastNameBillingField, billingDetails.lastName);
  I.fillField(this.companyBillingField, billingDetails.company);
  I.fillField(this.address1BillingField, billingDetails.address1);
  I.fillField(this.address2BillingField, billingDetails.address2);
  I.fillField(this.cityBillingField, billingDetails.city);
  I.fillField(this.postcodeBillingField,billingDetails.postcode);
},

clickButton(nameOfButton) {
  I.click(nameOfButton);
},

async getFlatShippingRatePrice() {
  return I.parseStringToFloat(await I.grabTextFrom(this.flatShippingRatePriceText));
},

async getEcoTaxPrice() {
  return I.parseStringToFloat(await I.grabTextFrom(this.ecoTaxPriceText));
},

async getVatPrice() {
  return I.parseStringToFloat(await I.grabTextFrom(this.vatPriceText));
},

async getTotalPrice() {
  return I.parseStringToFloat(await I.grabTextFrom(this.totalPriceText));
},

successfulOrderTextCheck() {
  I.see(this.successfulOrderTextForSuccess);
},

clickMyAccountButton() {
  I.click(this.myAccountButtonOnTopPanel);
},

clickOrderHistoryButton() {
  I.click(this.orderHistoryButtonInMyAccountDropdown);
},

async getOrderIdText() {
  return await I.grabTextFrom(this.orderIdText);
},

}
