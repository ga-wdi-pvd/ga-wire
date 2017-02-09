class UsersController < ApplicationController
  before_action :authorize!, only: [:show]

  def show
    # user = Builder.data(current_user)
    posts = Post.all
    render component: 'App', props: { user: current_user, posts: posts, post: {}}
  end

end
