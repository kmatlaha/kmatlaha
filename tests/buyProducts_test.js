const { newBillingAddressButton, regionStateButton, regionSelectorChoice, continueOnCheckoutPageButton, continueForDeliveryDetails, continueDeliveryMethodButton, termsAndConditionsAgreementButton, continueForPaymentMethod, confirmOrderButtonOnCheckoutPage } = require("../pages/checkout");
const { addToCartButton, basketButton, checkoutButton } = require("../pages/product");

let loginUser = {
    email: 'testkateqa96@gmail.com',
    password: 'Temp1234567890', 
};

let billingDetails = {
    firstName: 'Kate',
    lastName: 'Temp', 
    company: 'Kates',
    address1: 'Alabama1',
    address2: 'Alyasje4',
    city: 'Mandarin',
    postcode: 'A1A1A1',
};


Feature('buy product');

Scenario('buy product', async ({ I, productPage, checkoutPage }) => {
    I.login(loginUser);
    I.see('My Account');
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=32&product_id=43');
    let price = await productPage.getProductPrice();
    console.log(price);
    let priceWithColor = await productPage.getProductPriceWithChosenColor();
    console.log(priceWithColor);
    productPage.clickButton(addToCartButton);
    productPage.clickButton(basketButton);
    productPage.clickButton(checkoutButton);
    checkoutPage.verifyCheckoutPageText();
    checkoutPage.clickButton(newBillingAddressButton);
    checkoutPage.fillCheckoutDetails(billingDetails);
    checkoutPage.clickButton(regionStateButton);
    checkoutPage.clickButton(regionSelectorChoice);
    checkoutPage.clickButton(continueOnCheckoutPageButton);
    checkoutPage.clickButton(continueForDeliveryDetails);
    checkoutPage.clickButton(continueDeliveryMethodButton);
    checkoutPage.clickButton(termsAndConditionsAgreementButton);
    checkoutPage.clickButton(continueForPaymentMethod);
    let flatShippingRatePrice = await checkoutPage.getFlatShippingRatePrice();
    console.log(flatShippingRatePrice);
    let ecoTaxPrice = await checkoutPage.getEcoTaxPrice();
    console.log(ecoTaxPrice);
    let vatPrice = await checkoutPage.getVatPrice();
    console.log(vatPrice);
    let totalPrice = await checkoutPage.getTotalPrice();
    console.log(totalPrice);
    checkoutPage.clickButton(confirmOrderButtonOnCheckoutPage);
    checkoutPage.successfulOrderTextCheck();
    I.assertEqual(price+priceWithColor+flatShippingRatePrice+ecoTaxPrice+vatPrice,totalPrice,'not equal');
    checkoutPage.clickMyAccountButton();
    checkoutPage.clickOrderHistoryButton();
    let lastOrderID = await checkoutPage.getOrderIdText();
    console.log(lastOrderID);
    pause();
}).tag('buy');
