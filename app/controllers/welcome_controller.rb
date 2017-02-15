class WelcomeController < ApplicationController
  def index
    @posts = Post.includes(:user).reverse.map {|post| post.attributes.merge!({user: {image_url: post.user.image_url, nickname: post.user.nickname}})}
    byebug
    render component: 'PostList', props: {posts: @posts}
  end
end
