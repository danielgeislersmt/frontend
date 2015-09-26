define("app/model/newsList", ['backbone'], function(Backbone) {
    return Backbone.Collection.extend({
        url: 'list-news.json'
    });
});
