class Api::UsersController < ApplicationController

  before_action :require_logout, only: [:create]

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :json
    end
  end

  def show
    @user = User.find(params[:id])
    render :json
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
