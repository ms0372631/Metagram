class Api::CommentLikesController < ApplicationController

  def create
    @comment_like = CommentLike.new(comment_like_params)
    if @comment_like.save
      render
    else
      render json: @comment_like.errors.full_messages
    end
  end

  def index
    @comment_likes = CommentLike.all
    render 'api/comment_like/index'
  end

  def destroy
    if @comment_like.delete
      render 'api/comment_like/show'
    else
      render json: @comment_like.errors.full_messages
    end
  end

  private

  def comment_like_params
    params.require(:comment_like).permit(:comment_id)
  end
end
