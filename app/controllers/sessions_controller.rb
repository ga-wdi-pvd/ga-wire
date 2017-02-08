class SessionsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: [:create]

  def create
    puts "*" * 20
    puts data
    puts "*" * 20
    user = User.find_or_create_from_auth(data)
    if user
      session[:user_id] = user.id
      redirect_to dashboard_path
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:user_id] = nil
    session.clear
    render json: {status: 204, message: "No Content"}
  end

  private

  def data
    request.env['omniauth.auth']
  end
end
