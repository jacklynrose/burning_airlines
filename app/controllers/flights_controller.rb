class FlightsController < ApplicationController
  def index
  	render json: Flight.all
  end
end
