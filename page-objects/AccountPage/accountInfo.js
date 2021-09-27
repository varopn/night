module.exports = {
  elements: {
    accountPageMainInfoTab: '//*[@id="__next"]/div/div[2]/div[1]/nav/ul/a[2]',
    accountPageInfoTabEmail: '//*[@id="__next"]/div/div[2]/div[2]/section/div/section/table/tbody/tr[1]/td[2]',
    accountPageInfoTabSex: '//*[@id="__next"]/div/div[2]/div[2]/section/div/section/table/tbody/tr[2]/td[2]',
    accountPageInfoTabDateOfBirth: '//*[@id="__next"]/div/div[2]/div[2]/section/div/section/table/tbody/tr[3]/td[2]',
    accountPageEmail: '//*[@id="__next"]/div/div[2]/div[1]/div[2]',
  },
  commands: [{
    getEmailOnMainInfoTab() {
      // get email on main info tab
      return this
        .waitForElementPresent('@accountPageInfoTabEmail', 2000)
        .assert.containsText('@accountPageInfoTabEmail', 'varopn@gmail.com', 'Verify email if login worked correct');
    },

    getSexOnMainInfoTab() {
      // get sex on main info tab
      return this
        .waitForElementPresent('@accountPageInfoTabSex', 2000)
        .assert.containsText('@accountPageInfoTabSex', 'männlich', 'Verify sex if login worked correct');
    },

    getDateOfBirthOnMainInfoTab() {
      // get date of birth on main info tab
      return this
        .waitForElementPresent('@accountPageInfoTabDateOfBirth', 2000)
        .assert.containsText('@accountPageInfoTabDateOfBirth', '06.03.1999', 'Verify date of birth if login worked correct');
    },

    getEmailOnPage() {
      return this
        .waitForElementPresent('@accountPageEmail', 5000)
        .assert.containsText('@accountPageEmail', 'varopn@gmail.com', 'Verify email if login worked correct');
    },

    clickMainInfoTab() {
      return this
        .waitForElementPresent('@accountPageMainInfoTab', 5000)
        .click('@accountPageMainInfoTab');
    },
  }],
};
