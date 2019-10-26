class MessageActionService
  attr_reader :payload, :action

  def initialize(payload)
    @payload = payload
    @action = payload[:actions].first
  end

  def handle_action
    return unless send_invite?

    @slack_msgr_result = SlackMsgr.users(:admin, :invite, {email: action[:value]})
    nil # Returning nil to prevent exposing signing token to sigout
  end

  def response
    return { text: ":x: #{payload[:user][:name].upcase} *rejected #{action[:value]}*" } unless send_invite?

    if @slack_msgr_result[:ok]
      { text: ":white_check_mark: #{payload[:user][:name].upcase} *invited #{action[:value]}*" }
    else
      { text: "An error occurred sending the invitataion for #{action[:value]}: '#{@slack_msgr_result[:error].humanize}'"}
    end
  end

  private

  def send_invite?
    action[:name] == "send_invite"
  end
end
