
$(function(){
  function buildHTML(task){
    let html = `<div class="contents-tasks">
                   <div class="task-link">
                     <a class="task-title" href="/projects/${task.project_id}/tasks/new">${task.task}</a>:
                     <span>${task.deadline}</span>
                     <span>${task.deadline_time}</span>
                   </div>
                   <div class="task-menu">
                     <a href="/projects/${task.project_id}/tasks/${task.id}/edit">編集</a>
                     <a rel="nofollow" data-method="delete" href="/projects/${task.project_id}/tasks/${task.id}">削除</a>
                   </div>
                </div>`
    
    return html;
  }

  $('#new_task').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
$
    })
    .done(function(data){
      let html = buildHTML(data);
      $('contents-tasks').append(html);
      $('taskbox').val('');
      $('textbox').val('');
      $('datebox').val('');
      $('timebox').val('');
      $('form-submit').prop('disabled', false);
    })
    .fail(function(){
    alert('error');
    })
  })
})