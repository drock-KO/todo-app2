// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

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

  $('#new-task').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
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
