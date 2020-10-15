import { createStore, combineReducers } from 'redux';
import authenticatedReducer from './authenticatedReducer';

const rootReducer = combineReducers({
  authenticated: authenticatedReducer,
});

const store = createStore(rootReducer);
export default store;
