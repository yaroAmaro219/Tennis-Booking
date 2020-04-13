class ReservationsController < ApplicationController
  before_action :authorize_request, only: [:create]
  def create
    court = Court.find(params[:court_id])
    reservation = Reservation.new(reservation_params)
    reservation.court = court
    reservation.user = @current_user
    if reservation.save!
      render json: court, include: :reservations
    else
      render json: reservation.errors
    end
  end

  def update
    reservation = Reservation.find(params[:id])
    reservation.update(reservation_params)
    render json: reservation
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
  end

  private 
  def reservation_params
    params.require(:reservation).permit(:name, :start_time, :end_time)
  end
end
