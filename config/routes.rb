Rails.application.routes.draw do
  get 'tasks/new'

  root 'top#index'
  resources :projects, only: [:index, :new, :create, :destroy, :show] do
  resources :tasks, only: [:new, :create, :show, :destroy, :edit, :update]
  end
  
  
  # get 'project/new'
  # get 'project/create'
  # get 'project/show'
  # get 'project/edit'
  # get 'project/update'
  # get 'project/destroy'
  # get 'top/index'
  # get 'task/new'
  # get 'task/create'
  # get 'task/edit'
  # get 'task/update'
  # get 'task/destroy'
  # get 'task/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
