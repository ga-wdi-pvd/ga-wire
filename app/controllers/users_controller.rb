class UsersController < ApplicationController
  before_action :authorize!, only: [:show]

  def show
    @user = Builder.data(current_user)
    # render :json => user
    render component: 'UserProfile', props: {user: @user}
    # future dashboard for viewing a user profile component
  end

end
