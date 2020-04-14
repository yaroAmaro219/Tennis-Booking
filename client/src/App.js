import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import ShowCourt from './components/ShowCourt'
import Court from './components/Court'
import UpdateReservation from './components/UpdateReservation'
import Footer from './components/Footer'
import './App.css'

import {
  loginUser,
  registerUser,
  showCourt,
  showReservation,
  postReservation,
  showReservationItem,
  putReservation,
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
    this.handleVerify();
    this.getDate();
  }

  getDate = () => {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes();
    var minu =
      min === 1 ? min = '01' : min = min;
      min === 2 ? min = '02' : min = min;
      min === 3 ? min = '03' : min = min;
      min === 4 ? min = '04' : min = min;
      min === 5 ? min = '05' : min = min;
      min === 6 ? min = '06' : min = min;
      min === 7 ? min = '07' : min = min;
      min === 8 ? min = '08' : min = min;
      min === 9 ? min = '09' : min = min;
    var time = (hours >= 12) ? "PM" : "AM";
    var hours12 =
      hours === 13 ? hours = '1:' : hours = hours;
      hours === 14 ? hours = '2:' : hours = hours;
      hours === 15 ? hours = '3:' : hours = hours;
      hours === 16 ? hours = '4:' : hours = hours;
      hours === 17 ? hours = '5:' : hours = hours;
      hours === 18 ? hours = '6:' : hours = hours;
      hours === 19 ? hours = '7:' : hours = hours;
      hours === 20 ? hours = '8:' : hours = hours;
      hours === 21 ? hours = '9:' : hours = hours;
      hours === 22 ? hours = '10:' : hours = hours;
      hours === 23 ? hours = '11:' : hours = hours;
      hours === 24 ? hours = '12:' : hours = hours;
    this.setState({
      date:
      month + '/' + date + '/' + year + ' ' + hours + minu + ' ' + time
    });
  }

  // =========== Court ==============

  getCourt = async () => {
    const court = await showCourt();
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

  // ============= Auth =================


  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({ currentUser: currentUser })
    this.props.history.push("/courts")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser: currentUser })
    this.props.history.push("/")
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({currentUser: currentUser})
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({currentUser: null})
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
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }
  // =========== Render ===========

  render() {
    return (
      <div>
        <nav>
          <Link to="/"><h1 class="home">Tennis-Booking</h1></Link>
          {this.state.currentUser
            ?
            <div>
              <ul>
                <Link class="courts" to="/courts">  Courts </Link>
                <h1 class="date">
                  {this.state.date}
                </h1>
              </ul>
              <button class="logout" onClick={this.handleLogout}>logout</button>
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
            handleChange={this.handleChange}
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
            <Route exact path="/courts/:court_id/reservations/:id" render={(props) => {
              const reservation = this.state.reservation.reservations.find((res) => res.id === parseInt(props.match.params.id))
              return <UpdateReservation
                date={this.state.date}
                reservation={reservation}
                handleChange={this.handleChange}
                name={this.state.name}
                setReservationForm={this.setReservationForm}
                updateReservation={this.updateReservation}
                deleteReservation={this.deleteReservation}
                currentUser={this.state.currentUser}
                authFormData={this.state.authFormData}
              />
            }}/>
          </Switch>
        </div>
        <div class="image">
                  <img src="https://i.imgur.com/GufjsYr.jpg" title="source: imgur.com" />
                  </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)