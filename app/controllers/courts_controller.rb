class CourtsController < ApplicationController
  before_action :set_court, only: [:show, :update, :destroy, :add_reservation]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_reservation ]
  # GET /courts
  def index
    @courts = Court.all
    render json: @courts, include: :reservations, status: :ok
  end
  # GET /courts/1
  def show
    render json: @court, include: :reservations
  end

  # POST /courts
  def create
    
    @court = Court.new(court_params)

    if @court.save
      render json: @court, status: :created, location: @court
    else
      render json: @court.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /courts/1
  def update
    if @court.update(court_params)
      render json: @court
    else
      render json: @court.errors, status: :unprocessable_entity
    end
  end

  # DELETE /courts/1
  def destroy
    @court.destroy
  end
	
	def add_reservation
      @reservation = Reservation.find(params[:start_time])
      @court.reservation << @reservation
      render json: @court, include: :reservations
	end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_court
      @court = Court.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def court_params
      params.require(:court).permit(:name)
    end
end
