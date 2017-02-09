class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    user = User.find_or_create_from_auth(data)
    if user
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:user_id] = nil
    session.clear
    redirect_to root_path
  end

  private

  def data
    request.env['omniauth.auth']
  end
end
