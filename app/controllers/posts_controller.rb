class PostsController < ApplicationController
  before_action :post_params, only: [:create, :update]

  def create
    post = Post.create(post_params)
    if post.save
      render component: 'Post', props: {post: post}
    else
      render component: 'CreatePost'
    end
  end

  def show
    render json: {response: 200, post: Post.find(params[:id])}
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: {status: 200, post: post}
    else
      render json: {status: 400, response: "invalid data", post: params}
    end
  end

  def destroy
    post = Post.destroy(params[:id])
    render json: {status: 204}
  end

  private

  def post_params
    params.required(:post).permit(:user_id, :title, :body)
  end

end
