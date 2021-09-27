module.exports = {
  url: 'https://www.joyn.de/ueber-joyn',
  elements: {
    mainPageCountryBannerConfirmButton: '//*[@id="__next"]/div[2]/div[2]/div/div[2]/button',
    mainPageAccountIcon: '//*[@id="__next"]/div/div/header/a[3]/div/img',
    mainPageAccountIconAfter: '//*[@id="__next"]/div/div/header/a[3]/div/img',
    mainPagePlusContentButton: '//*[@id="__next"]/div/div/header/button[2]',
    mainPagePlusContentLoginButton: '//*[@id="__next"]/div[2]/div/div/div[2]/button',
  },
  commands: [{

    clickConfirmCountryButton() {
      // clicking confirm on banner about specific country
      return this
        .waitForElementPresent('@mainPageCountryBannerConfirmButton', 5000)
        .click('@mainPageCountryBannerConfirmButton');
    },

    clickAccountIconButton() {
      // clicking to accout image to login
      return this
        .waitForElementPresent('@mainPageAccountIcon', 5000)
        .click('@mainPageAccountIcon');
    },

    clickAccountIconButtonAfter() {
      // clicking to accout image to login
      return this
        .waitForElementPresent('@mainPageAccountIconAfter', 4000)
        .click('@mainPageAccountIconAfter');
    },

    clickPlusContentButton() {
      // clicking to plus content button
      return this
        .waitForElementPresent('@mainPagePlusContentButton', 5000)
        .click('@mainPagePlusContentButton');
    },

    clickPlusContentLoginButton() {
      // clicking to plus content login button
      return this
        .waitForElementPresent('@mainPagePlusContentLoginButton', 5000)
        .click('@mainPagePlusContentLoginButton');
    },
  }],
};
