$(function(){
   $('.destroy-task-button').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      let href = $(this).attr('href');
      let taskId = $(this)[0].dataset['taskId'];
      console.log(href);
      $.ajax({
        url: href,
        type: 'DELETE',
        headers: {'Content-Type': 'application/json',
        },
        beforeSend: function(xhr){
          xhr.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'))
        },
        dataType: JSON.stringify({task_id: taskId})
      });
      return false;
   });
});