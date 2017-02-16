class WelcomeController < ApplicationController
  def index
    # @posts = Post.includes(:user).reverse.map {|post| post.attributes.merge!({user: {image_url: post.user.image_url, nickname: post.user.nickname}})}
    # render component: 'PostList', props: {posts: @posts}
    redirect_to posts_path
  end
end
