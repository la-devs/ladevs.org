class Api::V1::MessageActionController < Api::ApiController
  def create
    payload = JSON.parse(params[:payload], symbolize_names: true)
    action = payload[:actions].first
    response = {
      "reject_user" => {
        emoji: ":x:",
        verb: "rejected"
      },
      "send_invite" => {
        emoji: ":white_check_mark:",
        verb: "invited"
      }
    }[action[:name]]

    render json: {
      text: "#{response[:emoji]} #{payload[:user][:name].upcase} *#{response[:verb]} #{action[:value]}*"
    }
  end
end
