class Api::V1::InvitationRequestController < Api::ApiController
  def create
    response = SlackMsgr.chat(:post_message, {
      channel: ENV["SLACK_INVITE_CHANNEL"],
      text: "EMAIL REQUEST: #{params["invite_requested"]}",
      attachments: [
        {
          text: "Invite this person to LA Devs?",
          fallback: "I cannot automate the invitation process for this user. Sorry.",
          callback_id: "invite_user",
          color: "#FF7657",
          attachment_type: "default",
          actions: [
            {
              name: "send_invite",
              text: "Send Invite",
              type: "button",
              value: params["invite_requested"],
              style: "success"
            },
            {
              name: "reject_user",
              text: "Reject",
              type: "button",
              value: params["invite_requested"],
              style: "danger"
            }
          ]
        }
      ]
    })

    render json: response
  end
end
