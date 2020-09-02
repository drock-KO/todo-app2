class ProjectsController < ApplicationController

  def new
    @project = Project.new
  end

  def create
    project = Project.create(project_params)
    respond_to do |f|
      
      f.html { redirect_to root_path(params[:id]) }
      f.json
    end
    # if project.project.blank?
    #   redirect_to controller: :projects, action: :new
    # else
    #   redirect_to controller: 'top', action: 'index'
    # end
  end

  def show
    @project = Project.find(params[:id])
    @tasks = @project.tasks
  end

  def edit
    @project = Project.find(params[:id])
  end
  
  def update
    project = Project.find(params[:id])
    project.update(project_params)
    
    respond_with project
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    redirect_to root_path
    # render :json => {:project => project}
  end
  
  private
  def project_params
    params.require(:project).permit(:project)
  end
end
