module.exports = {
  url: 'https://www.google.com/advanced_search?hl=en',
  elements: {
    loginPageEmailInput: '//*[@id="email"]',
    loginPageFirstSubmitButton: '//*[@id="identifier-first-submit"]',
    loginPagePasswordShowIcon: '//*[@id="signin-form"]/div[2]/div/div[1]/img',
    loginPagePasswordInput: '//*[@id="password"]',
    loginPageFormSubmitButton: '//*[@id="signin-form-submit"]',
    loginPageConfirmButton: '//*[@id="confirmButton"]',
    loginPageFirstBannerButton: '//?/cmp-button[@innertext=\'Akzeptieren\']',
    loginPageMessageDivWrongPassword: '//*[@id="signin-form"]/div[2]/div[2]/small',
  },
  commands: [{

    typeEmailInInput(email) {
      // typing email to login form
      return this
        .waitForElementPresent('@loginPageEmailInput', 5000)
        .setValue('@loginPageEmailInput', email);
    },

    clickFirstBannerButton() {
      return this
        .execute(() => document.querySelector('cmp-banner').shadowRoot
          .querySelector('cmp-dialog').shadowRoot
          .querySelector('cmp-button[variant="primary"]').click(), []);
    },

    clickFirstSubmitButton() {
      // clicking on login button
      return this
        .waitForElementPresent('@loginPageFirstSubmitButton', 500)
        .click('@loginPageFirstSubmitButton');
    },

    clickPasswordShowButton() {
      // clicking on login button
      return this
        .waitForElementPresent('@loginPagePasswordShowIcon', 5000)
        .click('@loginPagePasswordShowIcon');
    },

    typePasswordInInput(password) {
      // typing password to login form
      return this
        .waitForElementPresent('@loginPagePasswordInput', 500)
        .setValue('@loginPagePasswordInput', password);
    },

    clickFormSubmitButton() {
      // clicking on login button
      return this
        .waitForElementPresent('@loginPageFormSubmitButton', 5000)
        .click('@loginPageFormSubmitButton');
    },

    clickConfirmButton() {
      return this
        .waitForElementPresent('@loginPageConfirmButton', 5000)
        .click('@loginPageConfirmButton');
    },

    getMessageOnPage(message, title) {
      // get Alert Message when ckick on log in with invalid Password
      return this
        .waitForElementPresent('@loginPageMessageDivWrongPassword', 1000)
        .assert.containsText('@loginPageMessageDivWrongPassword', message, title);
    },
  }],
};
