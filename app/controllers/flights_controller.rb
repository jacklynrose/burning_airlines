class FlightsController < ApplicationController
  before_action :find_flight, only: [:update, :destroy]

  def index
    render json: Flight.all
  end

  def new
    @flight = Flight.new
  end

  def create
    @flight = Flight.create flight_params
    render json: @flight
  end

  def update
    @flight.update flight_params 
    render json: @flight
  end

  def destroy
    @flight.destroy
    render json: { status: "OK" }
  end

private

  def find_flight
    @flight = Flight.find params[:id] 
  end

  def flight_params
    params.require(:flight).permit(:flight_number, :plane_id, :date, :origin, :destination)
  end


end

