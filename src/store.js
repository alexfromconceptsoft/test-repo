import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import usersReducer from './reducers';

const initialState = {
  form: {},
  users: {
    data: [],
    loading: false,
    error: false,
  },
};

const rootReducer = combineReducers({
  users: usersReducer,
  form: formReducer,
});

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

export default store;
