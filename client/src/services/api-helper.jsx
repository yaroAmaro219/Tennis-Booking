const axios = require('axios')

const api = axios.create({
	baseURL: 'http://localhost:3000'
		});

//============== Auth =============

export const loginUser = async (loginData) => {
	const resp = await api.post('/auth/login', {auth: loginData});
	localStorage.setItem('authToken', resp.data.token)
	api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
	return resp.data.user
}

export const registerUser = async (registerData) => {
	const resp = await api.post('/users/', {user: registerData})
	localStorage.setItem('authToken', resp.data.token)
	api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
	return resp.data.user
}

export const verifyUser = async () => {
	const token = localStorage.getItem('authToken')
		if (token) {
			api.defaults.headers.common.authorization = `Bearer ${token}`
			const resp = await api.get('/auth/verify')
			return resp.data
		}
		return false
}

export const removeToken = () => {
	api.defaults.headers.common.authorization = null;
}


// ============= Courts ==============

export const showCourt = async () => {
	const resp = await api.get(`/courts`)
	return resp.data
}

//============ Reservations =========

export const showReservation = async (id) => {
  const resp = await api.get(`/courts/${id}`)
  return resp.data
}

export const putReservation = async (id, name) => {
  const resp = await api.put(`/courts/:id/reservations/${id}`, {reservation: name})
	return resp.data
}

export const showReservationItem = async (id) => {
  const resp = await api(`/courts/${id}`)
  return resp.data
}

export const postReservation = async (id, name) => {
  const resp = await api.post(`/courts/${id}/reservations`, {reservation: name})
  return resp.data
}

export const destroyReservation = async (id) => {
  const resp = await api.delete(`/courts/:id/reservations/${id}`);
  return resp.data;
}





