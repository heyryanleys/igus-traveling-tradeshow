$(document).ready(function(){
  $(function () {
    $('.top-left-content .two-column').hover(function(){
      $('.form1, .form1-br').fadeIn()
    });
    $('.bottom-form .two-column').hover(function(){
      $('.form2, .form2-br').fadeIn()
    })
  });
})

$(document).ready(function() {
  $(".about").click(function() {
      $('html,body').animate({
          scrollTop: $(".middle-right-content").offset().top},
          'slow');
  });
  $(".tour-stops").click(function() {
      $('html,body').animate({
          scrollTop: $(".map").offset().top},
          'slow');
  });
  $(".products").click(function() {
      $('html,body').animate({
          scrollTop: $(".van").offset().top},
          'slow');
  });
  $(".contact").click(function() {
      $('html,body').animate({
          scrollTop: $(".bottom-form").offset().top},
          'slow');
  });
  $(".tour-dates .cta").click(function() {
      $('html,body').animate({
          scrollTop: $(".bottom-form").offset().top},
          'slow');
  });
  $(".req-stop-mobile").click(function() {
      $('html,body').animate({
          scrollTop: $(".bottom-form").offset().top},
          'slow');
  });
  window.sr = ScrollReveal({ duration: 1000 });
  sr.reveal('.tile', 200);
  sr.reveal('.map', 200);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.trigger'
    })
    .setClassToggle('.van', 'fadeIn') // add class to van
    .reverse(false)
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#circle1'
    })
    .setClassToggle('.map', 'mapFadeIn') // add class to van
    .reverse(false)
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.top-right-content'
    })
    .setClassToggle('.top-right-content', 'topRightFadeIn') // add class to van
    .reverse(false)
    .addTo(controller);
});

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.tile-intro'
    })
    .setClassToggle('.tile', 'tileFadeIn') // add class to van
    .reverse(false)
    .addTo(controller);
});
