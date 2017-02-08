class WelcomeController < ApplicationController
  def index
    render component: 'App', props: { user: {} }
  end

end
