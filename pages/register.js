const { I } = inject();

module.exports = {
  registerHeaderText: 'Register Account',
  firstNameField: { css: '#input-firstname' },
  lastNameField: {css: '#input-lastname'},
  emailField: {css: '#input-email' },
  telephoneNumberField: {css: '#input-telephone'},
  passwordField: {css: '#input-password'},
  passwordConfirmField: {css: '#input-confirm'},
  subscribeYesButton: {xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]'},
  readAndAgreePolicyButton: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
  continueOnRegisterPageButton: {xpath: '//*[@id="content"]/form/div/div/input[2]'},
  

  verifyRegisterAccountText() {
    I.see(this.registerHeaderText);
  },

  fillRegistrationDetails(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneNumberField, user.telephoneNumber);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordConfirmField, user.passwordConfirm);
  },

  clickSubscribeYesButton() {
    I.click(this.subscribeYesButton);
  },

  clickAgreePolicyButton() {
    I.click(this.readAndAgreePolicyButton);
  },

  clickContinueOnRegisterPageButton() {
    I.click(this.continueOnRegisterPageButton);
  }
}
