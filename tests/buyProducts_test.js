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
const checkout = require('../pages/checkout');
let productLinks2 = productLinks.getLinks();
console.log(productLinks2);

Feature('buy product');

Before(async ({I, helper, homePage}) => {
    I.login(loginUser);
    I.see('My Account');
    homePage.clickCartIcon();
    console.log(await homePage.checkCartIsEmpty());
    await homePage.emptyCart();
});

Data(productLinks2).Scenario('buy product', async ({ I, productPage, checkoutPage, orderHistoryPage, current }) => {
    
    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    console.log(price);
    console.log(await productPage.checkColorForProduct());
    let priceWithColor = await productPage.getProductPriceWithChosenColor();
    console.log(priceWithColor);
    productPage.addProductToCart();
    let isProductAvailableForPurchase = !(await checkoutPage.checkProductIsNotAvailable());
    if (isProductAvailableForPurchase) {
        checkoutPage.verifyCheckoutPageText();
        checkoutPage.clickNewBillingAddressButton();
        checkoutPage.fillCheckoutDetails(billingDetails);
        checkoutPage.clickButtonsByStepsOnForm();
        let flatShippingRatePrice = await checkoutPage.getFlatShippingRatePrice();
        console.log(flatShippingRatePrice);
        let ecoTaxPrice = await checkoutPage.getEcoTaxPrice();
        console.log(ecoTaxPrice);
        let vatPrice = await checkoutPage.getVatPrice();
        console.log(vatPrice);
        let totalPrice = await checkoutPage.getTotalPrice();
        console.log(totalPrice);
        checkoutPage.clickConfirmOrderButton();
        checkoutPage.checkTextOfSuccessfulOrder();
        I.assertEqual(price + priceWithColor + flatShippingRatePrice + ecoTaxPrice + vatPrice, totalPrice, 'not equal');
        orderHistoryPage.checkIdOfLastOrder();
        let lastOrderID = await orderHistoryPage.getOrderIdText();
        console.log(lastOrderID);
    }
}).tag('buy');
