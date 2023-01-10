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

const productLinks = require('../helpers/productLinksGetter');

let productLinks2 = productLinks.getLinks();
console.log(productLinks2);

Feature('buy product');

Before(async ({I, homePage}) => {
    I.login(loginUser);
    await homePage.emptyCart();
});

Data(productLinks2).Scenario('buy product', async ({ I, productPage, checkoutPage, orderHistoryPage, current }) => {
    
    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    console.log('Price is: ' + price);
    let priceWithColor = await productPage.getProductPriceWithChosenColor();
    console.log('Price with color is: ' + priceWithColor);
    productPage.addProductToCart();
    let isProductAvailableForPurchase = !(await checkoutPage.checkProductIsNotAvailable());
    if (isProductAvailableForPurchase) {
        checkoutPage.verifyCheckoutPageText();
        checkoutPage.clickNewBillingAddressButton();
        checkoutPage.fillCheckoutDetails(billingDetails);
        checkoutPage.clickButtonsByStepsOnForm();
        let flatShippingRatePrice = await checkoutPage.getFlatShippingRatePrice();
        console.log('Flat shipping rate price is: ' + flatShippingRatePrice);
        let ecoTaxPrice = await checkoutPage.getEcoTaxPrice();
        console.log('Eco tax price is: ' + ecoTaxPrice);
        let vatPrice = await checkoutPage.getVatPrice();
        console.log('VAT price is: ' + vatPrice);
        let totalPriceInUsd = await checkoutPage.getTotalPrice();
        console.log('Total price in USD is: ' + totalPriceInUsd);
        let totalPriceInUah = await I.convertUsdToUah(totalPriceInUsd);
        console.log("Total price in UAH is: " + totalPriceInUah);
        checkoutPage.clickConfirmOrderButton();
        checkoutPage.checkTextOfSuccessfulOrder();
        I.assertEqual(price + priceWithColor + flatShippingRatePrice + ecoTaxPrice + vatPrice, totalPriceInUsd, 'not equal');
        orderHistoryPage.checkIdOfLastOrder();
        let lastOrderID = await orderHistoryPage.getOrderIdText();
        console.log('Last order ID is: ' + lastOrderID);
    }
}).tag('buy');
