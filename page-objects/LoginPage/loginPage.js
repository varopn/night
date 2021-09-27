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

    typeEmailInInput() {
      // typing email to login form
      return this
        .waitForElementPresent('@loginPageEmailInput', 5000)
        .setValue('@loginPageEmailInput', 'varopn@gmail.com');
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

    typePasswordInInput() {
      // typing password to login form
      return this
        .waitForElementPresent('@loginPagePasswordInput', 500)
        .setValue('@loginPagePasswordInput', 'N+*wi%4?C7NV4&D');
    },

    typeInvalidPasswordInInput() {
      // typing password to login form
      return this
        .waitForElementPresent('@loginPagePasswordInput', 500)
        .setValue('@loginPagePasswordInput', 'N+*wi%4?C7NV4&');
    },

    clickFormSubmitButton(page) {
      // clicking on login button
      return this
        .waitForElementPresent('@loginPageFormSubmitButton', 5000)
        .click('@loginPageFormSubmitButton');
    },

    clickConfirmButton(page) {
      return this
        .waitForElementPresent('@loginPageConfirmButton', 5000)
        .click('@loginPageConfirmButton');
    },

    getMessageOnPage() {
      // get Alert Message when ckick on log in with invalid Password
      return this
        .waitForElementPresent('@loginPageMessageDivWrongPassword', 1000)
        .assert.containsText('@loginPageMessageDivWrongPassword', 'Bitte gib ein gültiges Passwort ein.', 'Verify alert if password is incorrect');
    },
  }],
};
