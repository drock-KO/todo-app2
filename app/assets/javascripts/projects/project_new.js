$(function(){
  function buildHTML(project){

    let html = `

      <div class="project-wrap">
        <h3 class="project-title">${project.project}</h3>
        
        <div class="project-tasks">
          <% project.tasks.each do |task| %>
            <div class="task-wrap text-color">
              <% if task.task.present? %>
                <div class="task-link text-color">
                 
                  <%= best_in_place task, :task, :as => :input, :path => project_task_path(task.project, task), :classes  => 'unedit' %>
                  <%= best_in_place_if task.deadline.present?, task, :deadline, :as => :date, :path => project_task_path(task.project, task), :classes => 'date-picker' %>
                  <%= best_in_place_if task.deadline_time.present?, task, :deadline_time, :as => :time, :path => project_task_path(task.project, task) %>
                  
                  <% if task.deadline.present? %>
                    <span id="#modal-deadline-<%= task.id %>"><%= task.deadline.strftime("%m月%d日") %></span>
                  <% end %>
                  <% if task.deadline_time.present? %>
                    <span id="#modal-deadline-time-<%= task.id %>"><%= task.deadline_time.strftime("%H:%M") %></span>
                  <% end %>
                  
                <% end %>
              </div>
              
              <div class="task-menu text-color">
                <%= link_to project_task_path(task.project, task), method: :delete, class: "button destroy-button" do %>              
                  <span data-task-id=<%= task.id %> class="js-edit-task-button">
                    <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
                  </span>              
                <% end %>
              </div>
            </div>
          <% end %>    
        </div>
        
        <div class="appear-window" id="appear-window">
          <button class="appear-button">＋タスクを追加する</button>
        <!--</div>-->
        <%#= link_to "タスクを追加する", new_project_task_path(project.id), class: 'new-task' %>
        <div class="task-form", id="task-form">
        	<%= form_with model: [project, @task], local: true, id: "new-task", class: "new-task-form" do |f| %>
        	  <%= f.text_field :task, placeholder: "タスク名", class: "box taskbox" %><br>
        	  <%= f.text_area :text, placeholder: "タスクの詳細", rows: "2", class: "box textbox" %><br>
        		<%= f.date_field :deadline, class: "box datebox" %><br>
        		<%= f.time_field :deadline_time, class: "box timebox" %><br>
        	  <%= f.submit "タスクを追加", class: "form-submit" %>
        	  <span class="hide-window">❎</span>
　        	<% end %>
        </div>
      </div>
      </div>

    `
    return html;
  }
$('#new_project').on('submit', function(e){
  e.preventDefault();
  let formData = new FormData(this);
  let url = $(this).attr('action');
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
    $('contents-projects').append(html);
    $('projectbox').val('')
    $('form-submit').prop('disabled', false);
  });

});

})
