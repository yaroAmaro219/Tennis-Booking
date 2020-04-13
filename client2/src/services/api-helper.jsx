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

export const showCourtItem = async (id) => {
  const resp = await api(`/courts/${id}`)
  return resp.data;
  console.log(resp)
}

//============ Reservations =========

export const showReservation = async (courtId) => {
  const resp = await api.get(`/courts/${courtId}`)
  console.log(courtId)
  return resp.data
}

export const putReservation = async (courtId, body) => {
	const resp = await api.put(`/courts/${courtId}`)
	return resp.data
}

export const showReservationItem = async (id) => {
  const resp = await api(`/courts/${id}`)
  return resp.data
}

export const postReservation = async (courtId, name) => {
  const resp = await api.post(`/courts/${courtId}`, {court: name})
  return resp.data
}

export const destroyReservation = async (courtId) => {
  const resp = await api.delete(`/courts/${courtId}`);
  return resp.data;
}

// export const putCourtReservation = async  (courtId) => {
//   const resp = await api.get(`/courts/${courtId}`)
//   return resp.data
// }




