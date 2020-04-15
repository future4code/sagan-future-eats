const initialState = {
  profileDetails: undefined,
  profileFullAddress: undefined,
  profileShortAddress:undefined,
  profileOrderHistory: undefined,
}

const profileReducer = (state = initialState, action) => {    
  switch (action.type) {
      case 'SET_PROFILE_DETAILS':                        
          return {
              ...state,
              profileDetails: action.payload.profileDetails
          }
      case 'SET_PROFILE_FULL_ADDRESS':
          return {
              ...state,
              profileAddress: action.payload.profileFullAddress
          }
      case 'SET_PROFILE_SHORT_ADDRESS':
          return {
              ...state,
              profileAddress: action.payload.profileShortAddress
          }
      case 'SET_ORDER_HISTORY':
          return {
              ...state,
              profileOrderHistory: action.payload.orderHistory
          }
      default:
          return state;
  }
}

export default profileReducer;