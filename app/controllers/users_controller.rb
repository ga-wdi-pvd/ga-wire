class UsersController < ApplicationController
  before_action :authorize!, only: [:show]

  def show
    # @data = Builder.data(current_user)
    user = Builder.data(current_user)
    render json: {status: 200, user: user}
  end

end
