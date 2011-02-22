$(function() {
  var currentContentId;
  var oldContentId;
  var contents = [];
  $(".content").each(function(index, element) {
    var top = $(element).offset().top;
    var id = $(element).attr("id");
    contents.push({top: top, id: id});
  });

  var highlightCurrentMenu = function() {
    if (currentContentId === getCurrentContentId()) {
      return;
    }
    oldContentId = currentContentId;
    currentContentId = getCurrentContentId();

    $("#menu li").each(function() {
      var hash = $($(this).children()[0]).attr("href").match(/^#(.*)$/)[1];
      if (currentContentId === hash) {
        $(this).addClass("current");
        $(this).animate({fontSize: "1.5em"}, 100);
      } else if (oldContentId === hash) {
        $(this).removeClass("current");
        $(this).animate({fontSize: "1em"}, 100);
      }
    });

  }

  var getCurrentContentId = function() {
    var offset = $(window).scrollTop() + 200; 
    var currentContentId = contents[0].id;
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].top < offset) {
        currentContentId = contents[i].id;
      }
    }
    return currentContentId;
  }

  $(document).scroll(function() {
    highlightCurrentMenu();
  });

  highlightCurrentMenu();
});
