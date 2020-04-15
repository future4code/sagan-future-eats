import axios from 'axios'
// import { push } from "connected-react-router";
// import { routes } from '../Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

const tokenTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZORWRjaER2Y25KWkpuWEdscmp2IiwibmFtZSI6Ikd1aWxoZXJtZSIsImVtYWlsIjoiZ3VpbGhlcm1lQGdtYWlsLmNvbSIsImNwZiI6IjIyMS4xMTEuMTExLTIyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIE5vc3NhIFNlbmhvcmEgZGFzIE1lcmNlcywgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE1ODY5MDM0MjJ9.ptXwC2q2ugA7-vv_RqOZsUChqanlj-2lK7IPQ6JQlxU"

const setRestaurants = (restaurants) => ({
	type: 'SET_RESTAURANTS',
	payload: {
		restaurantList : restaurants		
	}	
})

export const getRestaurants = () => async (dispatch) => {
	// utilizar quando AUTH estiver pronto const token = localStorage.getItem("token")
	try {
		const response = await axios.get(`${baseURL}/restaurants`,{
			headers:{auth:tokenTest}
		});
		
		dispatch(setRestaurants(response.data.restaurants))

	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir lista de restaurantes')
	}
}