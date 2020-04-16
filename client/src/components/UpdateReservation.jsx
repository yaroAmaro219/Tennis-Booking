import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class UpdateReservation extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); 
 }
  componentDidMount() {
    this.props.setReservationForm(this.props.reservation.name);
  }
  goBack(){
    this.props.history.goBack();
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
            plsceholder="name"
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Start time"
            type="text"
            name="start_time"
            value={this.props.start_time}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="End time"
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
          <p>
            {this.props.reservation.start_time} - {this.props.reservation.end_time} -
            {this.props.reservation.date[0]}{this.props.reservation.date[1]}{this.props.reservation.date[2]}{this.props.reservation.date[3]}{this.props.reservation.date[4]}{this.props.reservation.date[5]}{this.props.reservation.date[6]}{this.props.reservation.date[7]}{this.props.reservation.date[8]}{this.props.reservation.date[9]}{this.props.reservation.date[10]}{this.props.reservation.date[11]}{this.props.reservation.date[12]}{this.props.reservation.date[13]}{this.props.reservation.date[14]}{this.props.reservation.date[15]}</p>
          <button>Submit</button>
          <button onClick={this.goBack}>Go Back</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateReservation);
