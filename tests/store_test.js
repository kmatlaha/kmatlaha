let registrationUser = {
    firstName: 'Kate',
    lastName: '3',
    telephoneNumber: '+38096578965',
    password: 'Temp12345',
    passwordConfirm: 'Temp12345', 
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
    I.see('Your Account Has Been Created!');
    pause();
});
