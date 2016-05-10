/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'imgtest',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }



  // all settings are optionals
  ENV.imgManager = {
    // how many times to try to load an image (default: 1)
    maxTries: 3,
    // wait 10 milliseconds before trying to load more images (default: 1)
    delay: 1,
    // how many images to try to load in a raw (if 0 then it'll load all at once) (default: 0)
    batchSize: 0,
    // should we start loading a source image only when it appear in the viewport (default: true)
    lazyLoad: true,
    // the image to use while loading the real image (default: null)
    loadingSrc: 'assets/loading-img.png',
    // the image to use when an image has failed to load (default: null)
    errorSrc: 'assets/error-img.png',
    // in the `rules`, you can define specific settings for each image depending on its `src` (default: null)
    rules: [
      {match: 'image', delay: 1000, batchSize: 1}
    ],
    // ------ global only settings (show with their default values) -----
    // css class to use when loading an image
    loadingClass: 'loading',
    // css class to use when the load was successful
    successClass: 'success',
    // css class to use when the load has failed
    errorClass: 'error'
  };

  return ENV;
};
