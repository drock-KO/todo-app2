class TopController < ApplicationController
  def index
     @projects = Project.all
     @task = Task.new
  end
end