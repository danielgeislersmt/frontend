define("app/model/news", ['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            title: '',
            content: '',
            lang: '',
            created_at: '',
            link: ''
        },
        initialize: function(){

        }
    });
});
