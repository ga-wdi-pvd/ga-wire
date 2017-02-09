class PostsController < ApplicationController
  before_action :post_params, only: [:create, :update]

  def create
    post = Post.create(post_params)
    if post.save
      render component: 'App', props: { user: current_user, posts: {}, post: post}
    else
      render component: 'App', props: { user: current_user, posts: {}, post: post}
    end
  end

  def show
    post = Post.find(params[:id])
    render component: 'App', props: { user: current_user, posts: {}, post: post}
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render component: 'App', props: { user: current_user, posts: {}, post: post}
    else
      render component: 'App', props: { user: curren_user, posts: {}, post: post}
    end
  end

  def destroy
    post = Post.destroy(params[:id])
    redirect_to root_path
  end

  private

  def post_params
    params.required(:post).permit(:user_id, :title, :body)
  end

end
