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
    productPage.clickAddToCartButton();
    productPage.clickBusketButton();
    productPage.checkoutButtonClick();
    checkoutPage.verifyCheckoutPageText();
    checkoutPage.newBillingAddressButtonClick();
    checkoutPage.fillCheckoutDetails(billingDetails);
    checkoutPage.clickregionStateButton();
    checkoutPage.clickregionSelectorChoice();
    checkoutPage.clickContinueButtonOnCheckoutPage();
    checkoutPage.clickContinueForDeliveryDetails();
    checkoutPage.clickContinueDeliveryMethodButton();
    checkoutPage.clickTermsAndConditionsAgreementButton();
    checkoutPage.clickContinueForPaymentMethod();
    let flatShippingRatePrice = await checkoutPage.getFlatShippingRatePrice();
    console.log(flatShippingRatePrice);
    let ecoTaxPrice = await checkoutPage.getEcoTaxPrice();
    console.log(ecoTaxPrice);
    let vatPrice = await checkoutPage.getVatPrice();
    console.log(vatPrice);
    let totalPrice = await checkoutPage.getTotalPrice();
    console.log(totalPrice);
    checkoutPage.clickConfirmOrderButton();
    checkoutPage.successfulOrderTextCheck();
    I.assertEqual(price+priceWithColor+flatShippingRatePrice+ecoTaxPrice+vatPrice,totalPrice,'not equal');
    checkoutPage.clickMyAccountButton();
    checkoutPage.clickOrderHistoryButton();
    let lastOrderID = await checkoutPage.getOrderIdText();
    console.log(lastOrderID);
    pause();
}).tag('buy');
