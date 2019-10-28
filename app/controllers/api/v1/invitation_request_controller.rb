class Api::V1::InvitationRequestController < Api::ApiController
  def create
    user = User.new(invitation_params)
    if user.save
      render json: SlackMessagingService.call(user)
    else
      render json: {error: user.errors.full_messages}
    end
  end

  private
  def invitation_params
    params.permit(:first_name, :last_name, :email, :occupation)
  end
end
