$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function() {
    mixpanel.track($(this).attr("track"))
  });

  $(window).one( "scroll", function() {
    console.log('scrollin');
    mixpanel.track('~page scrolled');
  });

  var nominatorFormHandlerURL = 'https://go.pardot.com/l/156821/2016-06-03/39g9f';
    $('#nominator_btn').on('click', function () {
    $('body').append("<iframe id='pardot-nominator-handler' height='0' width='0' style='position:absolute; left:-100000px; top:-100000px' src='" + nominatorFormHandlerURL + "?firstname=" + $('#nominator_first_name').val() + "&lastname=" + $('#nominator_last_name').val() + "&email=" + $('#nominator_email').val() + "'></iframe>");
    $('#pardot-nominator-handler').submit();
    $('#nominator_container').hide()
    $('#nominee_container').show()
  });


  var nomineeFormHandlerURL = 'https://go.pardot.com/l/156821/2016-06-03/39g9h';
  $('#nominee_btn').on('click', function () {
    $('#nominee_success').hide()
    $('body').append("<iframe id='pardot-nominator-handler' height='0' width='0' style='position:absolute; left:-100000px; top:-100000px' src='" + nomineeFormHandlerURL + "?firstname=" + $('#nominee_first_name').val() + "&lastname=" + $('#nominee_last_name').val() + "&email=" + $('#nominee_email').val() + "&referredby=" + $('#nominator_first_name').val() + " " + $('#nominator_last_name').val() + "&referringmessage=" + $('#nominee_message').val() + "'></iframe>");
    $('#pardot-nominee-handler').submit();
    setTimeout(function(){
      $('#nominee_container form :input').val("")
      $('#nominee_success').show()
    }, 1000);
  });

  jQuery(function() {
    var menu = jQuery(".navbar.navbar-default.navbar-fixed-top");
    var btn = $('.btn-nav')
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 10) {
         menu.addClass("navbar-fill");
    } else {
        menu.removeClass("navbar-fill");
      }
    });
  });

});