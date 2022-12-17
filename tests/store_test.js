let registrationUser = {
    firstName: 'Katuysha',
    lastName: '12',
    telephoneNumber: '+38096578934',
    password: 'Temp12356', 
};

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegistrationDetails(registrationUser);
    registerPage.clickSubscribeYesButton();
    registerPage.clickAgreePolicyButton();
    registerPage.clickContinueOnRegisterPageButton();
    registerPage.verifySuccessfulRegistrationText();
}).tag('store');
