class Api::SlackActions::MessageController < SlackActions::ApplicationController
  def create
    service = MessageActionService.new(payload)
    service.handle_action

    render json: service.response
  end

  private

  def payload
    return {} unless params[:payload]

    JSON.parse(params[:payload], symbolize_names: true)
  end
end
