requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../js',
        "backbone": 'backbone-min',
        "underscore": 'underscore-min',
        "jquery": 'jquery-1.11.3.min'
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'] // here I would like to load the already loaded library
        }
    }
});
