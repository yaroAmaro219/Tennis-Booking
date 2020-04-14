import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowCourt extends Component {
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
        {this.props.court.map(court => (
          <div key={court.id}>
            {this.state.isEdit === court.id
              ?
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.updateCourt(court);
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
              <div class="courts">
                <Link to={`/courts/${court.id}`} onClick={() => { this.props.getCourtItem(court.id) }}>{court.name}</Link>
                <hr />
              </div>
            }

          </div>
        ))}
        
      </div>
    )
  }
}

export default ShowCourt;
