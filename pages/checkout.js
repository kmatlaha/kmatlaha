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
confirmOrderButton: {xpath: '//*[@id="button-confirm"]'},
successfulOrderText: 'Your order has been placed!',
orderIdText: {xpath: '//*[@id="content"]/div[1]/table/tbody/tr[1]/td[1]'},
myAccountButton: {xpath: '//*[@id="top-links"]/ul/li/span/span'},
orderHistoryButton: {xpath: '//*[@id="top-links"]/ul/li/ul/li[2]/a'},

verifyCheckoutPageText() {
  I.see(this.checkoutHeaderText);
},

newBillingAddressButtonClick() {
  I.click(this.newBillingAddressButton);
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

clickregionStateButton() {
I.click(this.regionStateButton);
},

clickregionSelectorChoice() {
  I.click(this.regionSelectorChoice);
},

clickContinueButtonOnCheckoutPage() {
  I.click(this.continueOnCheckoutPageButton);
},

clickContinueForDeliveryDetails() {
  I.click(this.continueForDeliveryDetails);
},

clickContinueDeliveryMethodButton() {
  I.click(this.continueDeliveryMethodButton);
},

clickTermsAndConditionsAgreementButton() {
  I.click(this.termsAndConditionsAgreementButton);
},

clickContinueForPaymentMethod() {
  I.click(this.continueForPaymentMethod);
},

async getFlatShippingRatePrice() {
  return this.parsedInNum(await I.grabTextFrom(this.flatShippingRatePriceText));
},

async getEcoTaxPrice() {
  return this.parsedInNum(await I.grabTextFrom(this.ecoTaxPriceText));
},

async getVatPrice() {
  return this.parsedInNum(await I.grabTextFrom(this.vatPriceText));
},

async getTotalPrice() {
  return this.parsedInNum(await I.grabTextFrom(this.totalPriceText));
},

parsedInNum(str){
  let check = false , temp = "";
    for(let i=0; i<str.length; i++) {
      if(check) temp += str[i];
      if (str[i] == '$') check = true;
    }   
    return str = parseFloat(temp);
},


clickConfirmOrderButton() {
  I.click(this.confirmOrderButton);
},

successfulOrderTextCheck() {
  I.see(this.successfulOrderText);
},

clickMyAccountButton() {
  I.click(this.myAccountButton);
},

clickOrderHistoryButton() {
  I.click(this.orderHistoryButton);
},

async getOrderIdText() {
  return await I.grabTextFrom(this.orderIdText);
},

  // insert your locators and methods here
}
