class Api::V1::InvitationRequestController < Api::ApiController
  def create
    response = SlackMsgr.chat(:post_message, {
      channel: ENV['SLACK_INVITE_CHANNEL'],
      text: "EMAIL REQUEST: #{params['invite_requested']}"
    })

    render json: response
  end
end
