import React from 'react'

export default function CourtsCreate(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.createSubmit();
      }}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={props.formData.name}
          onChange={props.handleChange} />
        <br />
        <label htmlFor="start_time">start time</label>
        <input 
          type="text"
          name="start_time"
          id="start_time"
          value={props.formData.start_time}
          onChange={props.handleChange}
        />
        <label htmlFor="end_time">end time</label>
        <input
          type="text"
          name="end_time"
          id="end_time"
          value={props.formData.end_time}
          onChange={props.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}