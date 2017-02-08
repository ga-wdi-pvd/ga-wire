class UsersController < ApplicationController
  before_action :authorize!, only: [:show]

  def show
    user = Builder.data(current_user)
    render component: 'App', props: { user: user }
  end

end
