const { expect } = require('chai');

module.exports = {
  '@tags': ['login'],
  before(browser) {
    browser.globals.waitForConditionTimeout = 7000;
  },

  'Login via Plus Content button on main page': function (browser) {
    const mainPage = browser.page.MainPage.mainPage();
    const loginPage = browser.page.LoginPage.loginPage();
    const accountPage = browser.page.AccountPage.accountInfo();
    const email = 'varopn@gmail.com';
    const password = '+!YfDp%Vzr@yX2V';

    mainPage
      .navigate()
      .clickPlusContentButton()
    try {
      browser
      .pause(2000)
      .execute(() => document.querySelector('cmp-banner').shadowRoot
        .querySelector('cmp-dialog').shadowRoot
        .querySelector('cmp-button[variant="primary"]').click(), []);
    }
    catch(err) {
        console.log(err);
    }
    mainPage
      .clickPlusContentLoginButton();
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
      .getEmailOnMainInfoTab(email, 'Verify email if login worked correct');
  },
  after(browser) {
    browser.end();
  },
};
