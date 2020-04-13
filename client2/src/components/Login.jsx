import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {

	return (
		<div>
			<h2>Login</h2>
			<hr />
			<form onSubmit={(e) => {
				e.preventDefault()
				props.handleLogin()	}}>
			<input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
			<input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
			<button>Login</button>
        <button><Link to="/register">Register</Link></button>
		</form>
	</div>
			)
}

export default Login
