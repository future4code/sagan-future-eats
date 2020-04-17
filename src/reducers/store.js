const initialState = {
    restaurantList: [],
    restaurantDetails: [],
    restaurantOrder: [],
}

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESTAURANTS':

            return {
                ...state,
                restaurantList: action.payload.restaurantList
            }
        case 'SET_RESTAURANT_DETAIL':
            return {
                ...state,
                restaurantDetails: action.payload.restaurant
            }
        case 'SET_RESTAURANT_ORDER':
            return {
                ...state,
                restaurantDetails: action.payload.restaurantOrder
            }
        default:
            return state;
    }
}

export default store;