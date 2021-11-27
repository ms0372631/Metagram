class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    if @comment.delete
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages
    end
  end

  def show 
    @comment = Comment.find(comment_params[:id])
    if @comment
      render "api/comments/show"
    else
      render json: ['The comment cannot be found']
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
