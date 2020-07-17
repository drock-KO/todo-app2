class ProjectsController < ApplicationController

  def new
    @project = Project.new
  end

  def create
    project = Project.create(project_params)
    if project.project.blank?
      redirect_to controller: :projects, action: :new
    else
      redirect_to controller: 'top', action: 'index'
    end
  end

  def show
    @project = Project.find(params[:id])
    @tasks = @project.tasks
  end

  def edit
  end
  
  def update
  end

  def destroy
  end
  
  private
  def project_params
    params.require(:project).permit(:project)
  end
end
