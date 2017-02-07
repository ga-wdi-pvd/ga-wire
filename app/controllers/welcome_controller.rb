class WelcomeController < ApplicationController
  def index
    render json: {status: 200, message: "Welcome to the GAWire API"}
  end
end
