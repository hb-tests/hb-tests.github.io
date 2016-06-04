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
  console.log('doo doo')
  $('#submit_btn').on('click', function () {
    console.log('herro')

    $('body').append("<iframe id='pardot-nominator-handler' height='0' width='0' style='position:absolute; left:-100000px; top:-100000px' src='" + nominatorFormHandlerURL + "?firstname=" + $('#nominator_first_name').val() + "&lastname=" + $('#nominator_last_name').val() + "&email=" + $('#nominator_email').val() + "'></iframe>");
    console.log('doo doo')
    $('#pardot-nominator-handler').submit();
    console.log('submitted')
  });


    function sendNominee () {
    var pardotFormHandlerURL = 'https://go.pardot.com/l/156821/2016-06-03/39g9h';

    $('#contract_btn').on('click', function () {

      $('body').append("<iframe id='pardot-nominator-handler' height='0' width='0' style='position:absolute; left:-100000px; top:-100000px' src='" + pardotFormHandlerURL + "?email=" + $('#prospectEmail').val() + "'></iframe>");
      console.log('doo doo')
      $('#pardot-nominee-handler').submit();
      console.log('submitted')
    });
  }

  window.onload


  // jQuery(function() {
  //   var menu = jQuery(".navbar.navbar-default.navbar-fixed-top");
  //   jQuery(window).scroll(function() {    
  //       var scroll = jQuery(window).scrollTop();
  //       if (scroll >= 15) {
  //        console.log('hello')
  //        menu.addClass("navbar-fill");
  //   } else {
  //       menu.removeClass("navbar-fill");
  //     }
  //   });
  // });

});