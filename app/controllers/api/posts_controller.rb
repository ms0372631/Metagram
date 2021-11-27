class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end

  def show
    @post = Post.find(post_params[:id])
    if @post
      render "api/posts/show"
    else
      render json: ['the post cannot be found']
    end
  end

  def destroy
    if @post.delete
      render "api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render "api/posts/show"
    else
      redner json: @post.errors.full_messages
    end
  end

  def index
    @posts = Post.all
    render "api/posts/index"
  end

  private

  def post_params 
    params.require(:post).permit(:body)
  end

end
