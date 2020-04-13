import React, { Component } from 'react';

class UpdateReservation extends Component {
  componentDidMount() {
    this.props.setReservationForm(this.props.reservation.name);
  }
  render() {
    return (
      <div>
        <h3>Hello Reservation</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.updateReservation(this.props.reservation.id)
        }}>
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
          <p>{this.props.reservation.start_time} - {this.props.reservation.end_time}</p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateReservation;
