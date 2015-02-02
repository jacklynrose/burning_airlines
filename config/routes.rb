Rails.application.routes.draw do

  get 'flights/index'

  get 'flights/show'

  get 'flights/update'

  get 'flights/create'

  get 'flights/destroy'

  resources :planes

  root "pages#index"

end
