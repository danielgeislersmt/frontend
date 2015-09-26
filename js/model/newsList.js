define("app/model/newsList", ['backbone'], function(Backbone) {
    return Backbone.Collection.extend({
        url: 'https://damp-island-8619.herokuapp.com/v1/list/1'
    });
});
