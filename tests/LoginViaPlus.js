const { expect } = require('chai');

module.exports = {
  '@tags': ['login'],
  before(browser) {
    browser.globals.waitForConditionTimeout = 7000;
  },

  'Login Via Plus Content Button On Main Page': function (browser) {
    const mainPage = browser.page.MainPage.mainPage();
    const loginPage = browser.page.LoginPage.loginPage();
    const accountPage = browser.page.AccountPage.accountInfo();

    mainPage
      .navigate()
      .clickPlusContentButton()
      .clickPlusContentLoginButton();
    loginPage
      .typeEmailInInput();
    browser
      .pause(2000)
      .execute(() => document.querySelector('cmp-banner').shadowRoot
        .querySelector('cmp-dialog').shadowRoot
        .querySelector('cmp-button[variant="primary"]').click(), []);
    loginPage
      .clickFirstSubmitButton()
      .clickPasswordShowButton()
      .typePasswordInInput()
      .clickFormSubmitButton()
      .clickConfirmButton();
    mainPage
      .pause(5000)
      .clickAccountIconButtonAfter();
    accountPage
      .getEmailOnMainInfoTab();
  },
  after(browser) {
    browser.end();
  },
};
