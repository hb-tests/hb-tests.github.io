$(document).ready(function(){

var cta = document.getElementById('cta');

var waypoint = new Waypoint({
  element: document.getElementById('cta'),
  handler: function(direction) {
    if (direction == 'down') {cta.classList.add("sticky");}
    else {cta.classList.remove("sticky");}
  },
  offset: -277 
});

$("#btn-cta").click(function() {
	$("#modal").show();
});

$("#cta").click(function() {
	$(this).toggleClass("cta-open");
});

$("#contact-01").click(function() {
	$(this).hide();
	$("#contact-02").show();
});

$("#contact-02").click(function() {
	$(this).hide();
	$("#contact-03").show();
});

$("#contact-03").click(function() {
	$(this).hide();
	$("#contact-01").show();
	$("#modal").hide();
});


})

