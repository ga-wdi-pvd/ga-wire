class WelcomeController < ApplicationController
  def index
    @posts = Post.all
    # render component: 'App', props: { user: {}, posts: posts, post: {}}
  end

end
