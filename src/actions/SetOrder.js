import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const setOrder = (order) => ({
	type: 'SET_RESTAURANT_ORDER',
	payload: {
		restaurantOrder: order		
    }	
})
export const delOrder= (orderId) =>({
    type:'DEL_RESTAURANT_ORDER',
    payload: orderId
})

export const getOrder = () => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/active-order`,{
			// headers:{auth:tokenTest} ADICIONAR AUTH CERTO AQUI
		});
        // dispatch(setOrders(response.data))
        console.log(response.data)
	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir lista de pedidos')
	}
}

//---

const setOrderHistory = (orderHistory) => ({
	type: 'SET_ORDER_HISTORY',
	payload: {
		// orderHistory: orders	
	}	
})

export const getOrderHistory = () => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/orders/history`,{
			// headers:{auth:tokenTest} ADICIONAR AUTH CERTO AQUI
		});
        // dispatch(setOrderHistory(response.data))
        console.log(response.data)
	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir historico de pedidos')
	}
}