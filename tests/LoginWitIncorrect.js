const { expect } = require('chai');

module.exports = {
  '@tags': ['login'],
  before(browser) {
    browser.globals.waitForConditionTimeout = 7000;
  },

  'Login via Account Icon button with incorrect data on main page': function (browser) {
    const mainPage = browser.page.MainPage.mainPage();
    const loginPage = browser.page.LoginPage.loginPage();
    const accountPage = browser.page.AccountPage.accountInfo();
    const email = 'varopn@gmail.com';
    const password = 'N+*wi%4?C7NV4&';

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
      .getMessageOnPage('Bitte gib ein gültiges Passwort ein.', 'Verify alert if password is incorrect');
  },
  after(browser) {
    browser.end();
  },
};
