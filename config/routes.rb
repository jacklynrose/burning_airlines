Rails.application.routes.draw do

  scope '/api' do
    resources :planes
    resources :flights
  end

  root "pages#index"

  get '*anything', to: "pages#index"

end
