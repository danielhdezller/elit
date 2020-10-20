const initialState = {
  authenticated: false,
  userId: '',
  userName: '',
  display: false,
  linkedIn: '',
  gitHub: '',
  portfolio: '',
  githubLogin: '',
  userStacks: [],
};

const authenticatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTHENTICATION':
      console.log('action.payload', action.payload)
      return {
        ...state,
        authenticated: action.payload.authenticated,
        userId: action.payload.userId,
        userName: action.payload.userName,
        githubLogin: action.payload.githubLogin,
        email: action.payload.email,
        avatar: action.payload.avatar,          
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
