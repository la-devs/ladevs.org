class Api::V1::InvitationRequestController < Api::ApiController
  def create
    response = SlackMsgr.chat(:post_message, {
      channel: ENV['SLACK_INVITE_CHANNEL'],
      text: "EMAIL REQUEST: #{params['_invite_requested']}"
    })

    redirect_to root_path
  end
end
