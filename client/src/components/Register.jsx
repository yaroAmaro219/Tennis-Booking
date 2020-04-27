import React from 'react';

const Register = (props) => {
	return (
		<div>
			<h2>Register</h2>
			<hr />
			<form onSubmit={props.handleRegister} >
				<input placeholder="First Name" name="first_name" type="text" value={props.formData.first_name} onChange={props.handleChange} />
				<input placeholder="Email" name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
				<input placeholder="Password" name="password" type="text" value={props.formData.password} onChange={props.handleChange} />
        <button>Register</button>
				</form>
				</div>
			)
}

export default Register
