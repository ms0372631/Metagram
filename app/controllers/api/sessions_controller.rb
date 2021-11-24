class Api::SessionsController < ApplicationController

  def destroy
    @user = current_user
    logout if @user
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ['invalid username/password combination'], status: 422
    end
  end


   
end
