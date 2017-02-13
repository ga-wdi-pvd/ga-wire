class WelcomeController < ApplicationController
  def index
    @posts = Post.all.reverse
    @user = User.find_by(params[:user_id])
    render component: 'PostList', props: {posts: @posts, user: @user}
  end
end
