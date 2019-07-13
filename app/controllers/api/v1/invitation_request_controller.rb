class Api::V1::InvitationRequest < Api::ApiController
  def create
    response = SlackMsgr.chat(:post_message, {
      channel: 'invite-requests',
      text: 'testing :noodles:'
    })

    render json: response
  end
end
