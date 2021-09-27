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
      .typePasswordInInput()
      .clickFormSubmitButton()
      .clickConfirmButton();
    mainPage
      .pause(5000)
      .clickAccountIconButtonAfter();
    accountPage
      .getEmailOnPage()
      .clickMainInfoTab()
      .getEmailOnMainInfoTab()
      .getSexOnMainInfoTab()
      .getDateOfBirthOnMainInfoTab();
  },
  after(browser) {
    browser.end();
  },
};
