const { expect } = require('chai');

module.exports = {
  '@tags': ['login'],
  before(browser) {
    browser.globals.waitForConditionTimeout = 7000;
  },

  'Observing Account Page agter login with correct data': async function (browser) {
    const mainPage = browser.page.MainPage.mainPage();
    const loginPage = browser.page.LoginPage.loginPage();
    const accountPage = browser.page.AccountPage.accountInfo();
    const email = 'varopn@gmail.com';
    const password = '+!YfDp%Vzr@yX2V';
    const dateOfBirth = '06.03.1999';
    const sex = 'männlich';


    mainPage
      .navigate()
      .clickAccountIconButton();
    loginPage
      .typeEmailInInput(email);
    browser
      .pause(2000)
      .execute(() => document.querySelector('cmp-banner').shadowRoot
        .querySelector('cmp-dialog').shadowRoot
        .querySelector('cmp-button[variant="primary"]').click(), []);
    loginPage
      .clickFirstSubmitButton()
      .clickPasswordShowButton()
      .typePasswordInInput(password)
      .clickFormSubmitButton()
      .clickConfirmButton();
    mainPage
      .pause(5000)
      .clickAccountIconButtonAfter();
    accountPage
      .getEmailOnPage(email, 'Verify email if login worked correct')
      .getEmailOnMainInfoTab(email, 'Verify email if login worked correct')
      .getSexOnMainInfoTab(sex, 'Verify sex if login worked correct')
      .getDateOfBirthOnMainInfoTab(dateOfBirth, 'Verify date of birth if login worked correct');
  },
  after(browser) {
    browser.end();
  },
};
