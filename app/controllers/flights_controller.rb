class FlightsController < ApplicationController
  def index
  	render json: Flight.all
  end

  def create
  	@flight = Flight.create(flight_params)
  	render json: @flight
  end

  def update
  	@flight = Flight.find(params[:id])
  	@flight.update(flight_params)
  	render json: @flight
  end

  def destroy
  	@flight = Flight.find(params[:id])
  	@flight.destroy
  	render json: { status: 'ok' }
  end

  private
  def flight_params
  	params.require(:flight).permit(:flight_number, :origin, :destination, :date, :plane_id)
  end

end
