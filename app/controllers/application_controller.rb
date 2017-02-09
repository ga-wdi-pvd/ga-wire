class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :authorize!

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user ||= {}
    end
    @current_user
  end

  def authorize!
    redirect_to root_path unless current_user
  end
end
