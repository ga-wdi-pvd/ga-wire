class UsersController < ApplicationController
  before_action :user_params, only: [:create, :update]

  def create
    user = User.create(user_params)
    if user.save
      render json: {status: 200, user: user}
    else
      render json: {status: 400, response: "invalid data", user: params}
    end
  end

  def show
    render json: {status: 200, user: User.find(params[:id])}
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: {status: 200, user: user}
    else
      render json: {status: 400, response: "invalid data", user: params}
    end
  end

  def destroy
    user = User.destroy(params[:id])
    render json: {status: 204}
  end

  private

  def user_params
    params.required(:user).permit(:username, :avatar)
  end

end
