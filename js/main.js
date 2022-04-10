// Navlink Scroll
$('nav a').click(function(){
    $(yourSelector).removeClass('enable');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700, function(){
        $(yourSelector).addClass('enable');
    });
    return true;
  });
