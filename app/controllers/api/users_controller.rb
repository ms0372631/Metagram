class Api::UsersController < ApplicationController

  
  # before_action :require_logout, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user.errors.full_messages, status: 401
  end

  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :fullname, :likers)
  end 

end
