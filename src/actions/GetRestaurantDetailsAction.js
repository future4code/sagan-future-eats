import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const setSelectedRestaurantIDAndPush = (restaurantID) => async (dispatch) => {
    // essa linha serve para armazenar no store o ID do restaurante especificado 
    //dispatch(setSelectedRestaurant(restaurantID))

    // o intuito eh que com a linha na store, quando o usuario entrar na nova pagina, um componentDidMount
    // vai conseguir dar um get nas informacoes do restaurante a partir do ID na store

    // essa linha serve para enviar o usuario para a pagina do restaurante especificado 
    //dispatch(push(routes.RestaurantPage))
}

const setSelectedRestaurant = (restaurantID) => ({
	type: 'SET_SELECTED_RESTAURANT',
	payload: {
		restaurantID
	}
})

const setRestaurantDetails = (restaurantDetails) => ({
	type: 'SET_RESTAURANT_DETAILS',
	payload: {
		restaurantDetails
	}
})

export const getRestaurantDetails = (restaurantID) => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/restaurants/${restaurantID}`) 

		// { headers: { auth: localStorage.getItem("token") } })

		// dispatch(setRestaurantDetails(response.data))
	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir detalhes sobre o restaurante')
	}
}