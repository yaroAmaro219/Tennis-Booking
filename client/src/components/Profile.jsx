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
    return (
      <>
        <h1>
          {this.props.currentUser.first_name}
        </h1>
        </>
    )
  }
}

export default Profile;