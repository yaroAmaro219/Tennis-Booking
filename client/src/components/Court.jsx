import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Form } from
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

  // table = () => {
  //   let timeSlots = [

  //     {
  //       start_time: '6:00AM',
  //       end_time: '7:00AM'
  //     },
  //     {
  //       start_time: '7:00AM',
  //       end_time: '8:00AM'
  //     },
  //     {
  //       start_time: '8:00AM',
  //       end_time: '9:00AM'
  //     },
  //     {
  //       start_time: '9:00AM',
  //       end_time: '10:00AM'
  //     }
  //   ]
  //   let form = timeSlots.map(time => (
  //     <Form>
  //       <input
  //         name="name"
  //         type="text"
  //         onChange={this.props.handleChange} />
  //       <button>Submit</button>
  //       <div>
  //         {time.start_time},
  //         {time.end_time}
  //       </div>
  //     </Form>
  //   ))
  //   return form
  // }

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

  onChange = date => this.setState({ date })

  handleSubmit(e) {
    alert('A reservation was submitted for: ' + this.state.reservation);
    this.setState({
      reservation: e.target.value
    })
    e.preventDefault();
  }

  // handleReservation = () => {
  //   {
  //     this.props.reservation === true
  //       ?
  //       this.props. (full)
  //       :
  //       ''
  // }



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

  showReserved = () => {

  }



  // data = () => {
  //   {
  //     this.props.data
  //       &&
  //       this.props.data.map(name => 
  //         name: name.name,

  //       )}
  // }
  // reservations = () => {
  //   this.props.reservations.map(court => {
  //     console.log(court.reservations)
  //     return court.reservations

  //   })
  // }

  // renderDay = (props, currentDate, selectedDate) => {

  //   return <td {...props}>{'0' + currentDate.date()}</td>;

  // }

  // renderMonth = (props, month, year, selectedDate) => {

  //   return <td {...props}>{month}</td>;

  // }
  // row = () => {
  //   {
  //     this.props.reservation
  //     &&
  //     this.props.reservation.map(reservation => (
  //       <form onSubmit={(e) => {
  //         e.preventDefault();
  //         this.props.updateReservation(reservation);
  //         this.setState({
  //           isEdit: false
  //         })
  //       }}>
  //         <input
  //           name="name"
  //           type="text"
  //           value={this.props.formData.name}
  //           onChange={this.props.handleChange} />
  //         <button>Submit</button>
  //       </form>
  //     ))
  //   }
  // } 

  // data = () => { 
  //   {this.state.data.}
  // }

  // dataSource() {
  //   <input 
  //     name="name"
  //     type="text"
  //     value={this.state.data.name}
  //     onChange={this.handleChange}/>
  // }

  // form = () => {
  //   return (
  //     <form onSubmit={(e) => {
  //       e.preventDefault();
  //       this.handleSubmit();
  //       this.setState({ isAdd: false })
  //     }}>
  //       <legend>Hi, Book a reservation here</legend>
  //       <input
  //         name="name"
  //         type="text"
  //         value={this.state.data.name}
  //         onChange={this.handleChange} />
  //       <input
  //       name="start time"
  //       type="text"
  //       value={this.state.selectedSlot.start_time}
  //       onChange={this.handleChange} />
  //     <input
  //       name="end time"
  //       type="text"
  //       value={this.state.selectedSlot.end_time}
  //       onChange={this.handleChange} />
  //       <button onClick={() => {
  //         this.setState({ isAdd: true })
  //       }}>Submit</button>
  //     </form>
  //   )
  // }

  // reservationForm = (e) => {
  //   this.setState({

  //   })
  // }


  // handleAdd = () => {
  //   const { count, dataSource } = this.state;
  //   const newData = {
  //     key: count,
  //     name: `Edward King ${count}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${count}`,
  //   };
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   });
  // };

  // handleSave = row => {
  //   const newData = [...this.state.dataSource];
  //   const index = newData.findIndex(item => row.key === item.key);
  //   const item = newData[index];
  //   newData.splice(index, 1, {
  //     ...item,
  //     ...row,
  //   });
  //   this.setState({ dataSource: newData });
  // };
  // handleDelete = key => {
  //   const dataSource = [...this.state.dataSource];
  //   this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  // };

  // addReservation = () => {
  //   const newReservation = await postReservation(this.state.formData)
  //   this.setState(prevState => ({
  //     data: {
  //       name: "",
  //     }
  //   }))
  // }




  render() {
    let timeSlots = [
      {
        start_time: '6:00AM',
        end_time: '7:00AM'
      },
      {
        start_time: '7:00AM',
        end_time: '8:00AM'
      },
      {
        start_time: '8:00AM',
        end_time: '9:00AM'
      },
      {
        start_time: '9:00AM',
        end_time: '10:00AM'
      },
      {
        start_time: '10:00AM',
        end_time: '11:00AM'
      },
      {
        start_time: '11:00AM',
        end_time: '12:00AM'
      },
      {
        start_time: '12:00PM',
        end_time: '1:00PM'
      },
      {
        start_time: '1:00PM',
        end_time: '2:00PM'
      },
      {
        start_time: '2:00PM',
        end_time: '3:00PM'
      },
      {
        start_time: '3:00PM',
        end_time: '4:00PM'
      },
      {
        start_time: '5:00PM',
        end_time: '6:00PM'
      },
      {
        start_time: '7:00PM',
        end_time: '8:00PM'
      }
    ]
    let form = timeSlots.filter((time) => {
      return this.props.reservation
        &&
        !this.props.reservation.reservations.map((res) => res.start_time).includes(time.start_time)
    }).map((time) => (
      <Form>
        <h1>
          {time.start_time} -
          {time.end_time}
        </h1>
        <input
          name="name"
          type="text"
          onChange={this.props.handleChange} />
        <button onClick={(e) => {
          this.props.addReservation(this.props.match.params.id, time.start_time, time.end_time)
        }}>Submit</button>
        
        
      </Form>
    ))
    console.log(this.state)

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
          <div>
            {this.props.reservation  
              &&
              this.props.reservation.reservations.map((res) => (
              <>
                <p>{res.name}</p>
                <p>{res.start_time}</p>
                  <p>{res.end_time}</p>
                  <Link to={`/courts/${this.props.reservation.id}/reservations/${res.id}`}><button>Edit</button></Link>
                  <button onClick={() => (this.props.deleteReservation(res.id))}>Delete</button>
              </>
            ))}
          </div>
          {form}
        </div>

        {/* <Table
          class="ant-table-layout"
          columns={this.state.columns}
          dataSource={this.state.data}
          rowClassName="editable-row"
          pagination={false}
          scroll={{ x: 1000, y: 1000 }} /> */}


      </>
    )
  }
}

export default Court;

