SlackMsgr.configure do |config|
  config.verification_token = ENV['SLACK_VERIFICATION_TOKEN']
  config.client_secret      = ENV['SLACK_CLIENT_SECRET']
  config.signing_secret     = ENV['SLACK_SIGNING_SECRET']
  config.legacy_token       = ENV['SLACK_LEGACY_TOKEN']
  config.access_tokens      = {
    bot: ENV['SLACK_BOT_TOKEN']
  }
end
