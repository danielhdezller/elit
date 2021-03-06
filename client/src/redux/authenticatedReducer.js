const initialState = {
  authenticated: false,
  userId: '',
  githubLogin: '',
  userName: '',
  display: false,
  linkedIn: '',
  gitHub: '',
  portfolio: '',
  userStacks: [],
};

const authenticatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTHENTICATION':
      console.log('action.payload', action.payload);
      return {
        ...state,
        authenticated: action.payload.authenticated,
        userId: action.payload.userId,
        githubLogin: action.payload.githubLogin,
        userName: action.payload.userName,
        email: action.payload.email,
        avatar: action.payload.avatar,
      };

    case 'TOGGLE':
      return {
        ...state,
        display: action.data,
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
