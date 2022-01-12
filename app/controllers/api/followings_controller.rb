class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new(following_params)
    if @following.save
      render 'api/followings/show'
    else
      render json: @following.errors.full_messages
    end
  end

  def show
    @following = Following.new(following_params[:id])
    if @following
      render 'api/followings/show'
    else
      render json: @following.errors.full_messages
    end
  end

  def index
    @followings = Following.all
    render 'api/followings/index'
  end

  def destroy
    @following = @Following.find(params[:id])
    if @following.delete
      render 'api/following/show'
    else
      render json: @following.errors.full_messages
    end
  end

  private

  def following
    params.require(:following).permit(:receiver_id, :author_id)
  end

end
