class Api::PostLikesController < ApplicationController
  def create
    @post_like = PostLike.new(post_like_params)
    if @post_like.save
      render 'api/post_likes/show'
    else
      render json: @post_like.errors.full_messages
    end
  end

  def show
    @post = PostLike.find(post_like_params[:id])
    if @post
      render 'api/post_likes/show'
    else
      render json: @post_like.errors.full_messages
    end
  end

  def index 
    @post_likes = PostLike.all
    render 'api/post_likes/index'
  end

  def destroy
    @post_like = PostLike.find(params[:id])
    if @post_like.delete
      render 'api/post_likes/show'
    else
      render json: @post_like.errors.full_messages
    end
  end

  private

  def post_like_params
    params.require(:post_like).permit(:post_id, :author_id, :receiver_id)
  end
end
