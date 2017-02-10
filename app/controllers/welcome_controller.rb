class WelcomeController < ApplicationController
  def index
    @posts = Post.all
    render component: 'PostList', props: {user: current_user, posts: @posts}
  end
end
