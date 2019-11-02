Rails.application.routes.draw do
  root 'site#index'

  namespace :api do
    namespace :v1 do
      resources :invitation_request, only: [:create]
    end

    namespace :slack_actions do
      resources :message, only: [:create]
    end
  end
end
