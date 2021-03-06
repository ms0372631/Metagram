Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do 
      resources :followings, only: [:create, :show, :destroy]
    end
    resources :followings, only: [:index]
    resources :posts, only: [:create, :show, :destroy, :index, :update] do 
      resources :comments, only: [:create, :show, :destroy, :update, :index]
      resources :post_likes, only: [:create, :index, :destroy, :show]
    end
    resources :comment_likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
