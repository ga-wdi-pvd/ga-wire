class WelcomeController < ApplicationController
  def index
    render component: 'Hello'#, props: { todos: [] }, tag: 'span', class: 'todo'
    # render json: {status: 200, message: "Welcome to the GAWire API"}
  end

end
