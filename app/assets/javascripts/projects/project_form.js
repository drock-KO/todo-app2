$(function(){
   $('.project-form').hide();
   $('.add-project-button').on('click', function(e){
      e.preventDefault();
      $('.project-form').slideDown(10);
      $('.add-project-button').fadeOut('fast')
  
   });
   $('.hide-project-form').on('click', function(){
      $('.project-form').fadeOut(0.01);
      $('.add-project-button').fadeIn('fast')
   });
   
});