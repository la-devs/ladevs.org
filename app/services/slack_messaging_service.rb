class SlackMessagingService
  def self.call(user)
    SlackMsgr.chat(:post_message, {
      channel: ENV["SLACK_INVITE_CHANNEL"],
      text: "Somebody has just submitted an invite request!",
      attachments: [
        {
          text: "*Name:* #{user.full_name}\n*Email:* #{user.email}\n*Role:* #{user.occupation.humanize}\nInvite this person to LA Devs?",
          fallback: "I cannot automate the invitation process for this user. Sorry.",
          callback_id: "invite_user",
          color: "#FF7657",
          attachment_type: "default",
          actions: [
            {
              name: "send_invite",
              text: "Send Invite",
              type: "button",
              value: user.email,
              style: "success"
            },
            {
              name: "reject_user",
              text: "Reject",
              type: "button",
              value: user.email,
              style: "danger"
            }
          ]
        }
      ]
    })
  end
end
