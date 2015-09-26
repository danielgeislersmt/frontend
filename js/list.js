require(['app/model/newsList'], function(NewsListModel) {
    var newsList = new NewsListModel();
    var list = $("#news-container");

    newsList.on('sync', function(){
        render();
    });

    var data = newsList.fetch();

    function render() {
        var news = data.responseJSON;
        console.log(news);

        for (i = 0; i < news.length; i++) {
            renderNews(news[i]);
        }
    }

    function renderNews(news) {
        var html = "<div class='news'>";
        html +="<h1><a href='" + news.link + "'>" + news.title +"</a></h1>";
        html +="<div class='content'>" + news.content +"</div>";
        html += "</div>";

        list.html(html);
    }
});
