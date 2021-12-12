class Api::ThingsController < ApplicationController

  before_action :set_thing, only: [:show, :update, :destroy]

  def index
    render json: Thing.all
  end



end
