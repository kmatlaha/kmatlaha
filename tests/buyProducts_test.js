
productLinks = new DataTable (['link']);
productLinks.add (['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40']);
productLinks.add (['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=43']);
productLinks.add (['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=47']);
productLinks.add (['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=74']);

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

const { getArrayOfProductLinkObjects } = require('../helpers/productLinksGetter');
const LinksGetter = require('../helpers/productLinksGetter');
let productLinks2 = LinksGetter.getLinks();
console.log(productLinks2);

Feature('buy product');

Before(({I}) => {
    I.login(loginUser);
});

Data(productLinks2).Scenario('buy product', async ({ I, productPage, checkoutPage, orderHistoryPage, current }) => {
    I.see('My Account');
    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    console.log(price);
    let priceWithColor = await productPage.getProductPriceWithChosenColor();
    console.log(priceWithColor);
    productPage.addProductToCart();
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
}).tag('buy');
