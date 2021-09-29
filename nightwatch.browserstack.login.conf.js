nightwatch_config = {
    src_folders : [ "tests/login" ],
    page_objects_path: ['page-objects'],
    use_xpath: true,
    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },
    common_capabilities: {
      'build': 'Login And Observing Account Data',
      'browserstack.user': 'bsuser_jFCA0u',
      'browserstack.key': 'a3JqFmudaGyccTh9en98',
      'browserstack.debug': true
    },
    test_settings: {
      default: {},
      env1: {
        desiredCapabilities: {
          "browser": "chrome",
          "browser_version": "94.0",
          "os": "OS X",
          "os_version": "Mojave"
        }
      },
      env2: {
        desiredCapabilities: {
          "browser": "chrome",
          "browser_version": "94.0",
          "os": "OS X",
          "os_version": "Catalina"
        }
      },
      env3: {
        desiredCapabilities: {
          "browser": "chrome",
          "browser_version": "93.0",
          "os": "OS X",
          "os_version": "Catalina"
        }
      },
      env4: {
        desiredCapabilities: {
          "browser": "chrome",
          "browser_version": "93.0",
          "os": "OS X",
          "os_version": "Big Sur"
        }
      },
      env5: {
        desiredCapabilities: {
          "browser": "chrome",
          "browser_version": "94.0",
          "os": "OS X",
          "os_version": "Big Sur"
        }
      }
    }
  };
  // Code to support common capabilities
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for(var j in nightwatch_config.common_capabilities){
      config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
  }
  module.exports = nightwatch_config;