class Api::V1::InvitationRequest < ApplicationController
  def create
    response = SlackMsgr.chat(:post_message, {
      channel: 'invite-requests',
      text: 'testing :noodles:'
    })

    render json: response
  end
end
