Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts, except: [:new, :edit]

  get "auth/github/", as: "/login", to: "site#index"
  get "auth/github/callback", to: "sessions#create"

  get "dashboard", to: "users#show"

  get "/logout", to: "sessions#destroy"
end
