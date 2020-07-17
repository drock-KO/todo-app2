class TasksController < ApplicationController
  
  def new
    @project = Project.find(params[:project_id])
    @task = Task.new
    @task.project_id = @project.id
  end

  def create
    #binding.pry
    project_id = Project.find(params[:project_id])
    @task = Task.create(task_params)
    # redirect_to root_path
    respond_to do |f|
      f.html { redirect_to root_path}
      f.json
    end
  end

  def edit
    @task = Task.find(params[:id])
    @project = @task.project
  end

  def update
    # binding.pry
    task = Task.find(params[:id])
    task.update(task_params)
    redirect_to project_path(task.project_id)
  end

  def destroy
    #binding.pry
    project = Project.find(params[:project_id])
    task = project.tasks.find(params[:id])
    task.destroy
    redirect_to root_path
    # redirect_to project_path(project)
  end

  def show
    @task = Task.find(params[:id])
  end
  
  private
  def task_params
    params.require(:task).permit(:task, :text, :deadline,
    :deadline_time, :project_id).merge(project_id: params[:project_id])
  end
end
