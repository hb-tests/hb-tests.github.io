$(document).ready(function() {

  $('#home-btn').click(function() {
    console.log('hello')
    $('#home-btn').hide()
    $('#home-form').show()
  });

  //mixpanel track
  $('[track]').click(function() {
    mixpanel.track($(this).attr("track"))  
  });

  $(window).on( "scroll", function() {
    console.log('scrollin')
    mixpanel.track('~page scrolled')
  });

  //signup
  $('#home-sign-up').click(function () { 
    $('#home-sign-up').hide()
    // $('#google-signup').hide()
    // $('#email-signup').hide()
    // $('.divider').hide()
    $('#lp-registration').show()
  });

  $('#home-sign-up-footer').click(function () { 
    $('#home-btn').hide()
    $('#home-form').show()
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  //testimonials section
  // $(".data-section-title").click(function() {
  //     obj = $(this)
  //     data_toggable_family = obj.parent().data("toggable-target-family");
  //     console.log($(this))
  //     data_toggable_name = obj.data("toggable-target-name");
  //     obj.siblings().removeClass("active");
  //     obj.addClass('active');

  //     $("[data-toggable-family='"+data_toggable_family+"']").children().hide();
  //     $("[data-toggable-family='"+data_toggable_family+"']").children("[data-toggable-name='"+ data_toggable_name+"']").show();
  // });

  $('.hs-button').click(function () {
    mixpanel.track("~request invite button");
  });

  //testimonials section
  $('#data-section-1').click(function () {
      $('#avatar-1').addClass('avatar-active')
      $('#avatar-2').removeClass('avatar-active')
      $('#avatar-3').removeClass('avatar-active')
      $('#avatar-4').removeClass('avatar-active')
      $('#testimonial-1').addClass('active')
      $('#testimonial-2').removeClass('active')
      $('#testimonial-3').removeClass('active')
      $('#testimonial-4').removeClass('active')
      mixpanel.track('~stationary')
  });
  $('#data-section-2').click(function () {
      $('#avatar-1').removeClass('avatar-active')
      $('#avatar-2').addClass('avatar-active')
      $('#avatar-3').removeClass('avatar-active')
      $('#avatar-4').removeClass('avatar-active')
      $('#testimonial-1').removeClass('active')
      $('#testimonial-2').addClass('active')
      $('#testimonial-3').removeClass('active')
      $('#testimonial-4').removeClass('active')
      mixpanel.track('~photography')
  });
  $('#data-section-3').click(function () {
      $('#avatar-1').removeClass('avatar-active')
      $('#avatar-2').removeClass('avatar-active')
      $('#avatar-3').addClass('avatar-active')
      $('#avatar-4').removeClass('avatar-active')
      $('#testimonial-1').removeClass('active')
      $('#testimonial-2').removeClass('active')
      $('#testimonial-3').addClass('active')
      $('#testimonial-4').removeClass('active')
      mixpanel.track('~event planner a')
  });
  $('#data-section-4').click(function () {
      $('#avatar-1').removeClass('avatar-active')
      $('#avatar-2').removeClass('avatar-active')
      $('#avatar-3').removeClass('avatar-active')
      $('#avatar-4').addClass('avatar-active')
      $('#testimonial-1').removeClass('active')
      $('#testimonial-2').removeClass('active')
      $('#testimonial-3').removeClass('active')
      $('#testimonial-4').addClass('active')
      mixpanel.track('~event planner b')
  });

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