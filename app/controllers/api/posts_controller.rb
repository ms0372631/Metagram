class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save!
      login!(@user)
      render "api/users/show"
    else
      render json: @post.full_messages
    end
  end

  def show
    @post = Post.find(post_params[:id])
    if @post
      render "api/posts/show"
    else
      render json: ['the post is currently unavaliable']
    end
  end

  def destroy
    if @post.delete
      reender "api/users/show"
    else
     render json: @post.full_messages
    end
  end

  def index
    @posts = Post.all
    render "api/posts/show"
  end

  private

  def post_params 
    params.require(:post).permit(:body)
  end

end
