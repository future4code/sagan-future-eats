import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

const set_Restaurants = (restaurants) => ({
	type: 'SET_RESTAURANTS',
	payload: {
		restaurants
	}
})

export const getRestaurants = () => async (dispatch) => {
	// utilizar quando AUTH estiver pronto const token = localStorage.getItem("token")

	try {
		const response = await axios.get(`${baseURL}/restaurants`)

        // essa linha ja tem um baseAuth chumbado caso n encontre o token
        // { headers: { auth: token ? token : baseAuth } })

        // dispatch(setRestaurants(response.data))
        console.log("Restaurantes : " + response.data)

	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir lista de restaurantes')
	}
}