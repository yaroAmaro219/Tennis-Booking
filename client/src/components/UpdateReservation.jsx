import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class UpdateReservation extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); 
 }
  componentDidMount() {
    this.props.setReservationForm(this.props.reservation.name);
    this.goBack = this.goBack.bind(this)
  }
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <h3>Hello {this.props.currentUser.first_name} </h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.updateReservation(this.props.reservation.id)
        }}>

          <input
            placeholder="Name"
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Start Time"
            type="text"
            name="start_time"
            value={this.props.start_time}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="End Time"
            type="text"
            name="end_time"
            value={this.props.end_time}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Date"
            type="text"
            name="date"
            value={this.props.date}
            onChange={this.props.handleChange}
          />
          <p>{this.props.reservation.start_time} - {this.props.reservation.end_time}</p>
          <button>Submit</button>
          <button onClick={this.goBack}>Back</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateReservation);
