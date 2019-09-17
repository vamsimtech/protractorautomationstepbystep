let HtmlScreenshotReporter = require('C:/Users/vamsipc/AppData/Roaming/npm/node_modules/protractor-jasmine2-screenshot-reporter');

let reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['E:/vamsi_programs_2019/Protractor_framework/Raghav_Protractor_tutorials/tests/example2_spec.js'],

  //specs:['../tests/example2_spec.js'],
  specs:['../tests/caluclator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
// Setup the report before any tests start
beforeLaunch: function() {
  return new Promise(function(resolve){
    reporter.beforeLaunch(resolve);
  });
},

// Assign the test reporter to each running instance
onPrepare: function() {
  jasmine.getEnv().addReporter(reporter);
  var AllureReporter = require('jasmine-allure-reporter');
  jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: 'allure-results'
  }));
},

// Close the report after all tests finish
afterLaunch: function(exitCode) {
  return new Promise(function(resolve){
    reporter.afterLaunch(resolve.bind(this, exitCode));
  });
},

};
