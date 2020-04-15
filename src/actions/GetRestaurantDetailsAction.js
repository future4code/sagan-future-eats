import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const setRestaurantDetail = (restaurant) => ({
	type:'SET_RESTAURANT_DETAIL',
	paylod:{
		restaurant
	}
});

export const fetchRestaurant = (id) => async(dispatch, getState) => {
	const token = "";
	const response = await axios.get(`${baseURL}/restaurants/${id}`,{
		headers:{auth: token}
	});
	dispatch(setRestaurant(response.data.restaurant))
};

export const goToRestaurantDetail = restId => async(dispatch) =>{
	await dispatch(fetchRestaurant(restId))
	dispatch(push(routes.restaurant))
};



