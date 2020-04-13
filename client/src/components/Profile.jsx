import React, {Component} from 'react'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
    }
  }

  render() {
    // console.log(this.props.currentUser)
    return (
      <>
        <h1>Hello Donald</h1>
        <h1>{this.props.currentUser}</h1>
        </>
    )
  }
}

export default Profile