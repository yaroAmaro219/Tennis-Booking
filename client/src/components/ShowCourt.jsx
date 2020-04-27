import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowCourt extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div>
        {this.props.court.map(court => (
              <div class="courts">
                <Link to={`/courts/${court.id}`} onClick={() => { this.props.getCourtItem(court.id) }}>{court.name}</Link>
                <hr />
          </div>
        ))}
      </div>
    )
  }
}

export default ShowCourt;
