class PlanesController < ApplicationController
  before_action :find_plane, only: [:update, :destroy]

  def index
    render json: Plane.all
  end

  def create
    @plane = Plane.create(plane_params)
    render json: @plane
  end

  def update
    @plane.update(plane_params)
    render json: @plane
  end

  def destroy
    @plane.destroy
    render json: { status: "OK" }
  end

  private

  def find_plane
    @plane = Plane.find(params[:id])
  end

  def plane_params
    params.require(:plane).permit(:name, :rows, :columns)
  end
end
