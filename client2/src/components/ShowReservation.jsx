import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      isEdit: false
    }
  }
  render() {
    return (
      <div>
        {this.props.reservation.map(reservation => (
          <div key={reservation.id}>
            {this.state.isEdit === reservation.id
              ?
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.updateReservation(reservation);
                  this.setState({
                    isEdit: false
                  })
                }}>
                  <input
                    name="name"
                    type="text"
                    value={this.props.formData.name}
                    onChange={this.props.handleChange} />
                  <button>Submit</button>
                </form>
              </div>
              :
              <div class="reservations">
                <Link to={`/courts/1/reservations/${reservation.id}`} onClick={() => { this.props.getReservationItem(reservation.id) }}>{reservation.name}</Link>
              </div>
            }
          </div>
        ))}
        <hr />
        {this.state.isAdd
          ?

          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.props.handleSubmit();
              this.setState({ isAdd: false })
            }}>
              <input
                name="name"
                type="text"
                value={this.props.formData.name}
                onChange={this.props.handleChange} />
              <button>submit</button>
            </form>
          </div>
          :
          <button onClick={() => {
            this.setState({ isAdd: true })
          }}>Add</button>
        }
      </div>
    )
  }
}

export default ShowReservation;

