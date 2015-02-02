Rails.application.routes.draw do
  resources :planes, :flights

  root "pages#index"

end
