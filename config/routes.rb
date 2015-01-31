Rails.application.routes.draw do

  resources :planes

  root "pages#index"

end
