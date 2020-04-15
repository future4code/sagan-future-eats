import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const setRestaurantDetail = (restaurant) => ({
	type:'SET_RESTAURANT_DETAIL',
	payload:{
		restaurant
	}
});

export const fetchRestaurant = (id) => async(dispatch, getState) => {
	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZORWRjaER2Y25KWkpuWEdscmp2IiwibmFtZSI6Ikd1aWxoZXJtZSIsImVtYWlsIjoiZ3VpbGhlcm1lQGdtYWlsLmNvbSIsImNwZiI6IjIyMS4xMTEuMTExLTIyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIE5vc3NhIFNlbmhvcmEgZGFzIE1lcmNlcywgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE1ODY5MDM0MjJ9.ptXwC2q2ugA7-vv_RqOZsUChqanlj-2lK7IPQ6JQlxU";
	const response = await axios.get(`${baseURL}/restaurants/${id}`,{
		headers:{auth: token}
	});	
	dispatch(setRestaurantDetail(response.data.restaurant))
};

export const goToRestaurantDetail = restId => async(dispatch) =>{
	await dispatch(fetchRestaurant(restId))
	dispatch(push(routes.restaurantPage))
};



