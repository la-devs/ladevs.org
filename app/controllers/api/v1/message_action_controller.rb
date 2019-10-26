class Api::V1::MessageActionController < Api::ApiController
  before_action :validate_slack_token

  def create
    service = MessageActionService.new(payload)
    service.handle_action

    render json: service.response
  end

  private
  def validate_slack_token
    unless payload[:token] == ENV['SLACK_SIGNING_SECRET']
      head 403
    end
  end

  def payload
    return {} unless params[:payload]

    JSON.parse(params[:payload], symbolize_names: true)
  end
end
