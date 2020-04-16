import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Table } from
  'antd';
import DatePicker from 'react-date-picker'
import '../App.css'

class Court extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      isAdd: false,
      isEdit: false,
      reservation: '',
      resForm: {
        name: '',
        start_time: '',
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  reservationValue = () => {
    {
      this.props.reservation
        &&
        this.props.reservation.map(name => (
          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.updateReservation(name);
            this.setState({
              isEdit: false
            })
          }}>
          </form>
        ))
    }

  }

  name = () => {

    {
      this.props.data
        &&
        this.props.data.map(name => (
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.updateReservation(name);
            this.setState({
              isEdit: false
            })
          }}>
            <input
              name="name"
              type="text"
              value={name.name}
              onChange={this.props.handleChange} />
            <button>Submit</button>
          </form>
        ))
    }

  }


  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }

  onChange = date => {
    this.setState({ date })
  }

  handleSubmit(e) {
    alert('A reservation was submitted for: ' + this.state.reservation);
    this.setState({
      reservation: e.target.value
    })
    e.preventDefault();
  }

  addReservationToCourt = async (courtItem) => {
    const newReservation = this.state.reservation.find(reservations => reservations.start_time === this.state.slectedSlot)
  }

  componentDidMount() {
    this.props.getReservation(this.props.match.params.id);

  }

  reservations = () => {
    {
      this.props.reservation.reservations
        &&
        this.props.reservation.reservations.map(name => {
          this.setState({ data: name })
        })
    }
  }

  addReservation = () => {
    const newReservation = this.props.postReservation(this.props.match.params.id, this.state.selectedSlot)
    this.setState(prevState =>
      ({
        data: [...prevState.data, newReservation],
        selectedSlot: {
          key: '',
          name: ''
        }
      }))
  }



  render() {
    console.log(this.state.date)
    let timeSlots = [
      {
        start_time: '6:00AM',
        end_time: '7:00AM',
        date: this.state.date,
      },
      {
        start_time: '7:00AM',
        end_time: '8:00AM',
        date: this.state.date,
      },
      {
        start_time: '8:00AM',
        end_time: '9:00AM',
        date: this.state.date,
      },
      {
        start_time: '9:00AM',
        end_time: '10:00AM',
        date: this.state.date,
      },
      {
        start_time: '10:00AM',
        end_time: '11:00AM',
        date: this.state.date,
      },
      {
        start_time: '11:00AM',
        end_time: '12:00AM',
        date: this.state.date,
      },
      {
        start_time: '12:00PM',
        end_time: '1:00PM',
        date: this.state.date,
      },
      {
        start_time: '1:00PM',
        end_time: '2:00PM',
        date: this.state.date,
      },
      {
        start_time: '2:00PM',
        end_time: '3:00PM',
        date: this.state.date,
      },
      {
        start_time: '3:00PM',
        end_time: '4:00PM',
        date: this.state.date,
      },
      {
        start_time: '5:00PM',
        end_time: '6:00PM',
        date: this.state.date,
      },
      {
        start_time: '7:00PM',
        end_time: '8:00PM',
        date: this.state.date,
      }
    ]
    let form = timeSlots.filter((time) => {
      return this.props.reservation
        &&
        !this.props.reservation.reservations.map((res) => res.start_time).includes(time.start_time)
    }).map((time) => (
      <Form>
        <div class="reservationForm">
          <p class="time">
            {time.start_time}
            {'  to  '}
            {time.end_time}
          </p>
          <input
            name="name"
            type="text"
            onChange={this.props.handleChange} />
          <button onClick={(e) => {
            this.props.addReservation(this.props.match.params.id, time.start_time, time.end_time, time.date)
          }}>Submit</button>
        </div>
      </Form>
    ))

    return (
      <>
        <div>
          {this.props.reservation
            &&
            <h1>
              {this.props.reservation.name.toUpperCase()} Court
            </h1>
          }

          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
          />

          <div class="reservation">
            {this.props.reservation
              &&
              this.props.reservation.reservations.map((res) =>
                <>
                  <div>
                    <p>{res.name}</p>
                    <p>{res.start_time}</p>
                    <p>{res.end_time}</p>
                  </div>
                  <Link to={`/courts/${this.props.reservation.id}/reservations/${res.id}`}><button>Edit</button></Link>
                  <button onClick={() => (this.props.deleteReservation(res.id))}>Delete</button>
                </>
              )}
          </div>

          {form}
        </div>

        {/* <Table
          class="ant-table-layout"
          columns={this.state.columns}
          dataSource={form}
          rowClassName="editable-row"
          pagination={false}
          scroll={{ x: 1000, y: 1000 }} /> */}


      </>
    )
  }
}

export default Court;

