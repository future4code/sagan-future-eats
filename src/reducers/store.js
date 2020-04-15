const initialState = {
    restaurantList: [],
    selectedRestaurantID: "",
    restaurantDetails: [],
}

const store = (state = initialState, action) => {    
    switch (action.type) {
        case 'SET_RESTAURANTS':                        
            return {
                ...state,
                restaurantList: action.payload.restaurantList
            }
        case 'SET_SELECTED_RESTAURANT':
            return {
                ...state,
                selectedRestaurantID: action.payload.restaurantID
            }
        case 'SET_RESTAURANT_DETAILS':
            return {
                ...state,
                restaurantDetails: action.payload.restaurantDetails
            }
        default:
            return state;
    }
}

export default store;