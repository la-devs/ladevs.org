class Api::V1::InvitationRequestController < Api::ApiController
  def create
    binding.pry
    response = SlackMsgr.chat(:post_message, {
      channel: ENV['SLACK_INVITE_CHANNEL'],
      text: 'testing :noodles:'
    })

    render json: response
  end
end
