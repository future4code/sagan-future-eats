const initialState = {
  restaurantList: [],
  restaurantDetails: [],
  restaurantOrder: {
    products: [{
      category: "Pastel",
      description: "Pastel autêntico, feito na hora!",
      id: "3vcYYSOEf8dKeTPd7vHe",
      name: "Pastel",
      photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
      price: 3,
      quantity: 3
    }]
  },
  orderHistory: [],
}

export const store = (state = initialState, action) => {
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
        restaurantOrder: action.payload.order
      }
    case 'UPDATE_RESTAURANT_ORDER':
      return {
        ...state,
        restaurantOrder: {
          ...state.restaurantOrder,
          products: [...state.restaurantOrder.products, action.payload.product]
        }
      }
    case 'DEL_RESTAURANT_ORDER':
      return {
        ...state,
        restaurantOrder: {
          ...state.restaurantOrder,
          products: state.restaurantOrder.products.filter(product => product.id !== action.payload.productId)
        }
      }
    case 'SET_ORDER_HISTORY':
      return {
        ...state,
        orderHistory: action.payload.orders
      }
    default:
      return state;
  }
}

export default store;