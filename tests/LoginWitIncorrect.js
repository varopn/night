const { expect } = require('chai');

module.exports = {
  '@tags': ['login'],
  before(browser) {
    browser.globals.waitForConditionTimeout = 7000;
  },

  'Login Via Icon Button With Incorrect Data  On Main Page': function (browser) {
    const mainPage = browser.page.MainPage.mainPage();
    const loginPage = browser.page.LoginPage.loginPage();
    const accountPage = browser.page.AccountPage.accountInfo();

    mainPage
      .navigate()
      .clickAccountIconButton();
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
      .typeInvalidPasswordInInput()
      .clickFormSubmitButton()
      .getMessageOnPage();
  },
  after(browser) {
    browser.end();
  },
};
