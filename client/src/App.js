import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ShowCourt from './components/ShowCourt'
import Court from './components/Court'
import UpdateReservation from './components/UpdateReservation'
import './App.css'

import {
  loginUser,
  registerUser,
  showCourt,
  // showCourtItem,
  showReservation,
  postReservation,
  showReservationItem,
  putReservation,
  // putCourtReservation,
  destroyReservation,
  removeToken,
  verifyUser,
} from './services/api-helper'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      currentUser: null,
      reservation: null,
      court: [],
      courtItem: null,
      selectedCourt: '',
      name: '',
      selectedSlot: "",
      authFormData: {
        email: "",
        password: ""
      },
    }
  }


  componentDidMount = () => {
    this.getCourt();
    // this.getReservation();
    this.handleVerify();
    this.getDate();
  }

  getDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var time = (hours >= 12) ? "PM" : "AM";
    var hours12 = hours === 13 ? hours = '1:00' : hours = hours ;
                  hours === 14 ? hours = '2:00' : hours = hours;
    hours === 15 ? hours = '3:00' : hours = hours;
    this.setState({
      date:
      month + '/' + date + '/' + year + ' ' + hours12 + ' ' + time
    });
  }

  // =========== Court ==============

  getCourt = async () => {
    const court = await showCourt();
    console.log(court)
    this.setState({court})
  }

  getCourtItem = async (id) => {
    console.log(id)
    const courtItem = await showReservationItem(id);
    this.setState({courtItem})
  }

  // =========== Reservation ===========

  getReservation = async (id) => {
    const reservation = await showReservation(id);
    this.setState({reservation})
  }

  updateReservation = async (id) => {
    const updatedReservationItem = await putReservation(id, { name: this.state.name })
    this.setState(prevState => ({
      reservation: {
        ...prevState.reservation,
        reservations: prevState.reservation.reservations.map((res) => {
          return res.id === id 
            ?
            updatedReservationItem
            :
            res
        })
      },
      name: '',
    }))
    this.props.history.push('/courts')
  }

  deleteReservation = async (id) => {
    await destroyReservation(id)
    this.setState(prevState => ({
      reservation: {
        ...prevState.reservation,
        reservations: prevState.reservation.reservations.filter((res) => {
          return res.id !== id 
        })
      }
    }))
  }




  // updateReservation = async (reservationItem) => {
  //   const updatedReservationItem = await putReservation(this.state.formData, reservationItem.id)
  //   this.setState(prevState => ({
  //     reservation: prevState.reservation.filter(singleReservation => singleReservation.id !== reservationItem.id)
  //   }))
  // }


  // getReservationItem = async (id) => {
  //   const reservationItem = await this.showReservationItem(id);
  //   this.setState({reservationItem})
  // }

  addReservation = async (id, start, end) => {
    const newReservation = await postReservation(id, {
      name: this.state.name,
      start_time: start,
      end_time: end
      })
      this.setState(prevState => ({
      reservation: newReservation,
          name: ""
         }))
  }

  setReservationForm = (name) => {
    this.setState({
        name: name
      })

  }

  // newReservation = async (e) => {
  //   e.preventDefault();
  //   const reservation = await postReservation(this.state.formData);
  //   this.setState(prevState => ({
  //     reservation: [...prevState.reservation, reservation],
  //     formData: {
  //       name: ""
  //     }
  //   }))
  // }
  
  // setReservationForm = (reservation) => {
  //   this.setState({
  //     formData: {
  //       name: reservation.name,
  //       start_time: reservation.start_time,
  //       end_time: reservation.end_time
  //     }
  //   })
  // }

  // addReservationToCourt = async (courtItem) => {
  //   const newReservation = this.state.reservation.find(reservation => reservation.name === this.state.selectedCourt)
  //   const newReservationItem = await putCourtReservation(courtItem.id, newReservation.handleLogin)
  //   this.setState({
  //     courtItem: newReservationItem
  //   })
  // }

  // ============= Auth =================


  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({ currentUser })
    this.props.history.push("/courts")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({currentUser})
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({currentUser})
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push("/login")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  handleChange = (e) => {
    // console.log(e.target.value, e.target.name)
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }
  // =========== Render ===========

  render() {
    console.log(this.state)
    return (
      <div>
        <nav>
          <Link to="/"><h1 class="home">Tennis-Booking</h1></Link>
          {this.state.currentUser
            ?
            <div>
              <h3>Hi {this.state.currentUser.first_name && this.state.currentUser.first_name}</h3>
              <button onClick={this.handleLogout}>logout</button>
              <ul>
                <Link class="courts" to="/courts">  Courts </Link>
                <Link to="/events">  Events </Link>
                <Link to="/users">  Profile  </Link>
                <h1 class="date">
                  {this.state.date}
                  </h1>
              </ul>
            </div>
            :
            <button onClick={this.handleLoginButton}>Login</button>
            }
        </nav>
        <div class="nav">
        <Switch>
        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/courts" render={(props) => (
          <ShowCourt
            court={this.state.court}
            formData={this.state.formData}
            
            getCourtItem={this.getCourtItem}
            // handleChange={this.handleChange}
              />)} />
          <Route exact path="/courts/:id" render={(props) => (
            <Court
              reservation={this.state.reservation}
              updateReservation={this.updateReservation}
              date={this.date}
              newReservation={this.newReservation}
              postReservation={this.postReservation}
              getReservation={this.getReservation}
              getReservationItem={this.getReservationItem}
              setReservationForm={this.setReservationForm}
              formData={this.state.formData}
                addReservation={this.addReservation}
                deleteReservation={this.deleteReservation}
              {...props}
              handleChange={this.handleChange} />)} />
          <Route exact path="/users" render={(props) => (
            <Profile
              {...props}
              currentUser={this.state.currentUser}
              date={this.date}
              getProfileItem={this.getProfileItem}
              formData={this.state.formData}
              handleChange={this.handleChange} />)} />
            <Route exact path="/courts/:court_id/reservations/:id" render={(props) => {
              const reservation = this.state.reservation.reservations.find((res) => res.id === parseInt(props.match.params.id))
              return <UpdateReservation
                reservation={reservation}
                handleChange={this.handleChange}
                name={this.state.name}
                setReservationForm={this.setReservationForm}
                updateReservation={this.updateReservation}
                deleteReservation={this.deleteReservation}
              />
            }}/>
          </Switch>
          </div>
      </div>
    )
  }
}

export default withRouter(App)