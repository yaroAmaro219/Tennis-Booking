import React from 'react';

const Register = (props) => {
	return (
		<div>
			<h2>Register</h2>
			<hr />
			<form onSubmit={props.handleRegister} >
				<input name="first name" type="text" value={props.formData.first_name} onChange={props.handleChange} />
				<input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
				<input name="password" type="text" value={props.formData.password} onChange={props.handleChange} />
        <button>Register</button>
				</form>
				</div>
			)
}

export default Register
