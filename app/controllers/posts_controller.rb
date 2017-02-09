class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]
  before_action :post_params, only: [:create, :update]

  def new
    # the PostForm needs to be set up for both edit and new
    render component: 'PostForm', props: {user: current_user, method: 'POST', path: '/posts'}
  end

  def create
    @post = Post.create(post_params)
    if post.save
      render component: 'Post', props: {post: post}
    else
      redirect_to new_post_path
    end
  end

  def show
    @post = Post.find(params[:id])
    render component: 'Post', props: {post: post}
  end

  def edit
    # the PostForm needs to be set up for both edit and new
    # render component: 'PostForm', props: {user: current_user, method: 'POST', path: '/posts'}
  end

  def update
    @post = Post.find(params[:id])
    if post.update(post_params)
      render component: 'Post', props: {post: post}
    else
      redirect_to edit_post_path
    end
  end

  def destroy
    @post = Post.destroy(params[:id])
    redirect_to root_path
  end

  private

  def post_params
    params.required(:post).permit(:user_id, :title, :body)
  end

end
