
$(function() {
  var trigger = $(".appear-button"); // トリガー定義
  $('.task-form').hide();
  trigger.on("click", function() {
    if ($(this).is(".project-form")) {

       $(this).next().slideUp(10);　 // 次の要素をslideUp
    } else {
      $(this)
      .fadeOut(".appear-button")
        .next()
        .slideDown(10); // 次の要素をslideDown
       

      trigger
        .not($(this)) // クリックしてないtrigger
        .fadeIn(".appear-button")
        .next()

        .slideUp();
      trigger.not($(this)).removeClass(".task-form");
    }
  $('.hide-window').on('click', () => {
    $('.appear-button').fadeIn();
    $('.task-form').slideUp(10);
  });
  
  });
});