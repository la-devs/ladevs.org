module SlackMsgr
  class ApplicationController < Api::ApiController
    before_action :verify_signed_secret

    private

    def verify_signed_secret
      headers = request.headers
      body = request.body.read
      unless signature_verified?(headers["X-Slack-Signature"], headers['X-Slack-Request-Timestamp'], body)
        render nothing: true, status: :unauthorized
      end
    end

    def signature_verified?(slack_sig, timestamp, body)
      version_number = slack_sig.split("=").first
      base = [version_number, timestamp, body].join(':')
      result = OpenSSL::HMAC.hexdigest(OpenSSL::Digest::SHA256.new, ENV["SLACK_CLIENT_SECRET"], base)

      slack_sig == [version_number, result].join("=")
    end
  end
end
