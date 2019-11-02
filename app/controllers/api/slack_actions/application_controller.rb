module SlackMsgr
  class ApplicationController < Api::ApiController
    before_action :verify_signed_secret

    private

    def verify_signed_secret
      unless signed_signature_verified?(request.headers["X-Slack-Signature"], request.headers['X-Slack-Request-Timestamp'], request.body.read)
        render nothing: true, status: :unauthorized
      end
    end

    def signed_signature_verified?(slack_sig, timestamp, body)
      version_number = slack_sig.split("=").first
      base = [version_number, timestamp, body].join(':')
      result = OpenSSL::HMAC.hexdigest(OpenSSL::Digest::SHA256.new, ENV["SLACK_CLIENT_SECRET"], base)

      slack_sig == [version_number, result].join("=")
    end
  end
end
