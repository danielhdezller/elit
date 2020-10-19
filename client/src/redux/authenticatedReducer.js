const initialState = {
  authenticated: false,
  userId: '',
  userName: '',
  display: false,
  linkedIn: '',
};

const authenticatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTHENTICATION':
      return {
        ...state,
        authenticated: action.payload.authenticated,
        userId: action.payload.userId,
        userName: action.payload.userName,
      };
    case "TOGGLE":
      return {
        ...state,
        display: action.data
        
      }
    // case 'DELETE_AUTHENTICATION':
    //   return {
    //     ...state,
    //     authenticated: '',
    //   };
    default:
      return state;
  }
};

export default authenticatedReducer;
