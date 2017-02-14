Rails.application.routes.draw do
  resources :comments
  root to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts, except: [:index]

  get "auth/github/", to: "welcome#index"
  match "auth/github/callback" => "sessions#create", :via => [:get, :post]

  get "dashboard", to: "users#show"

  get "/logout", to: "sessions#destroy"
end
