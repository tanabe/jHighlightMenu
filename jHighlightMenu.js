//http://bonsaiden.github.com/JavaScript-Garden/

$(function() {
  var total = 3;
  var contents = [];
  for (var i = 0; i < total; i++) {
    var content = $("#content" + (i + 1));
    contents.push({top: content.offset().top, id: content.attr("id")});
  }

  function highlightCurrentMenu(id) {
    $("#menu li").each(function() {
      var hash = $($(this).children()[0]).attr("href").match(/^#(.*)$/)[1];
      if (id === hash) {
        $(this).addClass("current");
      } else {
        $(this).removeClass("current");
      }
    });
  }
  
  $(document).scroll(function() {
    var offset = $(window).scrollTop() + 200; 
    var currentContentId = contents[0].id;
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].top < offset) {
        currentContentId = contents[i].id;
      }
    }
    highlightCurrentMenu(currentContentId);
  });
});
