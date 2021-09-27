module.exports = {
  elements: {
    accountPageMainInfoTab: '//*[@id="__next"]/div/div[2]/div[1]/nav/ul/a[2]',
    accountPageInfoTabEmail: '//*[@id="__next"]/div/div[2]/div[2]/section/div/section/table/tbody/tr[1]/td[2]',
    accountPageInfoTabSex: '//*[@id="__next"]/div/div[2]/div[2]/section/div/section/table/tbody/tr[2]/td[2]',
    accountPageInfoTabDateOfBirth: '//*[@id="__next"]/div/div[2]/div[2]/section/div/section/table/tbody/tr[3]/td[2]',
    accountPageEmail: '//*[@id="__next"]/div/div[2]/div[1]/div[2]',
  },
  commands: [{
    getEmailOnMainInfoTab(email, title) {
      // get email on main info tab
      return this
        .waitForElementPresent('@accountPageInfoTabEmail', 2000)
        .assert.containsText('@accountPageInfoTabEmail', email, title);
    },

    getSexOnMainInfoTab(sex, title) {
      // get sex on main info tab
      return this
        .waitForElementPresent('@accountPageInfoTabSex', 2000)
        .assert.containsText('@accountPageInfoTabSex', sex, title);
    },

    getDateOfBirthOnMainInfoTab(dateOfBirth, title) {
      // get date of birth on main info tab
      return this
        .waitForElementPresent('@accountPageInfoTabDateOfBirth', 2000)
        .assert.containsText('@accountPageInfoTabDateOfBirth', dateOfBirth, title);
    },

    getEmailOnPage(email, title) {
      return this
        .waitForElementPresent('@accountPageEmail', 5000)
        .assert.containsText('@accountPageEmail', email, title);
    },

    clickMainInfoTab() {
      return this
        .waitForElementPresent('@accountPageMainInfoTab', 5000)
        .click('@accountPageMainInfoTab');
    },
  }],
};
