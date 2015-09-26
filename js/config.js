requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../js',
        "backbone": 'backbone-min',
        "underscore": 'underscore-min',
        "jquery": 'jquery-1.11.3.min'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});
