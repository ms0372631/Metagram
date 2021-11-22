class Api::SessionController < ApplicationController

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render status: 404
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render json: "api/users/#{params[:id]}"
    else
      render json: ['invalid username/password combination'], status: 401
    end
  end


   
end
