import react from 'react'

const Logout = (props) => {
	return (
		<div>
			<h2>Login</h2>
			<hr />
			<form onSubmit={(e) => {
				e.preventDefault()
				props.handleLogout()	}}>
			<button>Logout</button>
		</form>
	</div>
			)
}

export default Logout