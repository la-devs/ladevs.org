class Api::V1::InvitationRequestController < Api::ApiController
  def create
    binding.pry
    response = SlackMsgr.chat(:post_message, {
      channel: ENV['SLACK_INVITE_CHANNEL'],
<<<<<<< HEAD
      text: "EMAIL REQUEST: #{params['_invite_requested']}"
=======
      text: 'testing :noodles:'
>>>>>>> Wire form to function with internal API and send slack messages
    })

    redirect_to root_path
  end
end
