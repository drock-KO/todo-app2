$(function(){
  $(document).on('click', '.js-destroy-task-button', function(e){
    e.preventDefault();
    var destroy = confirm('削除してもよろしいですか？');
    if(destroy == true) {
      var taskWrapEle = $(this).parents('.task-menu').parents('.task-wrap');
      var taskId = $(taskWrapEle).data('task-id');
      var projectId = $(".project-wrap").data('project-id');
      var url = "projects/" + projectId + "tasks" + taskId;
      console.log(taskId);
      console.log(projectId);
    $.ajax({
      url: url,
      type: "POST",
      data: {'id': taskId,
      '_method': 'DELETE'},
      dataType: 'json'
    })
    .done(function(data) {
      taskWrapEle.remove();
    })
    .fail(function(){
      alert('error');
    })
    }
  });
});