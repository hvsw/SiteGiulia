
function getFacebookPicture() {
    $.getJSON("https://graph.facebook.com/giulia.giozza?fields=cover", function (data) {
        var coverURL = data.cover.source;
        $('#cover').css('background-image', 'url(' + coverURL + ')');
    });
}