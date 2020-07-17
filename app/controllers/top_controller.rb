class TopController < ApplicationController
  def index
    @projects = Project.order("created_at DESC")
    @task = Task.new
  end
end
