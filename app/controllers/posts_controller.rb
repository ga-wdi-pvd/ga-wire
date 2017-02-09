class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]
  before_action :post_params, only: [:create, :update]

  def create
    post = Post.create(post_params)
    if post.save
      render component: 'App', props: { user: current_user, posts: [], post: post}
    else
      render component: 'App', props: { user: current_user, posts: [], post: post}
    end
  end

  def show
    post = Post.find(params[:id])
    render component: 'App', props: { user: current_user, posts: [], post: post}
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render component: 'App', props: { user: current_user, posts: [], post: post}
    else
      render component: 'App', props: { user: curren_user, posts: [], post: post}
    end
  end

  def destroy
    post = Post.destroy(params[:id])
    redirect_to root_path
  end

  private

  def post_params
    params.required(:post).permit(:title, :body)
  end

end
