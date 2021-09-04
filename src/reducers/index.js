import {
  LOADING,
  ERROR,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  LOAD_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
} from '../actions';

const initialState = {
  data: [],
  loading: false,
  error: ''
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false
      }
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        data: state.data.concat(action.data),
        loading: false,
        error: action.error
      };
    }

    case UPDATE_USER_SUCCESS: {
      const withUpdatedUser = state.data.map(user => {
        if(user.id === action.data.id) {
          return action.data;
        }

        return user;
      });

      return {
        ...state,
        data: withUpdatedUser,
        loading: false,
        error: action.error
      };
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.data.id),
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
