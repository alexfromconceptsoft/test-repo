import UserRequestBuilder from '../services/UserRequestBuilder';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const loadUsers = () => dispatch => {
   dispatch({ type: LOADING });
   UserRequestBuilder.allUsers()
       .then(response => response.data.data)
       .then(
           data => dispatch({ type: LOAD_USERS_SUCCESS, data }),
           error => dispatch({ type: ERROR, error: error.message || 'Unexpected Error!!!' })
       )
};

export const createUser = (user) => dispatch => {
    dispatch({ type: LOADING });
    UserRequestBuilder.createUser(user)
        .then(response => response.data.data)
        .then(
            data => dispatch({ type: CREATE_USER_SUCCESS, data }),
            error => dispatch({ type: ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}

export const updateUser = (user) => dispatch => {
    dispatch({ type: LOADING });
    UserRequestBuilder.updateUser(user)
        .then(response => response.data.data)
        .then(
            data => dispatch({ type: UPDATE_USER_SUCCESS, data }),
            error => dispatch({ type: ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}

export const deleteUser = (id) => dispatch => {
    console.log(id)
    dispatch({ type: LOADING });
    UserRequestBuilder.deleteUser(id)
        .then(
            () => dispatch({ type: DELETE_USER_SUCCESS, data: { id } }),
            error => dispatch({ type: ERROR, error: error.message || 'Unexpected Error!!!' })
        )
}
