class SessionsController < ApplicationController
  def create
    user = User.find_or_create_from_auth(data)
    if user
      session[:user_id] = user.id
      redirect_to dashboard_path
    else
      # redirect_to root_path
      render json: {status: 400, message: "Invalid Data"}
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
