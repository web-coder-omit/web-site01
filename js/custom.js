(function($){
  'use strict';
  $('.header-responsive-button i').on('click',function(){
    $('.header-manue').slideToggle();
  });
var a = $(window).width();
$(window).resize(function(){
  if(a>991){
    $('.header-manue').removeAttr('style');
  }
});
$('.counter').counterUp();


})(jQuery); 
