class Api::SessionController < ApplicationController

  def destroy
    if current_user
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
      render json: ['logged in successfully']
    else
      render json: ['invalid credential'], status: 401
    end
  end


   
end
