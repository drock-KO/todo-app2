Rails.application.routes.draw do
    root 'top#index'
    resources :projects do
    resources :tasks
  end
end