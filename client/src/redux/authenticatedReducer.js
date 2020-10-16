const initialState = {
  authenticated: false,
  userId: '',
  userName: '',
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
