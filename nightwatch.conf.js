module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  use_xpath: true,
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9999,
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'tests_output/screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          //args: ['--headless'],
        },
      },
    },
  },
};
