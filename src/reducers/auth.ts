import jwtDecode from 'jwt-decode';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT,
} from '../actions/auth';

const token = localStorage.getItem('token');
const user = token && jwtDecode<any>(token).user;

const initialState = {
  ...(token && { token }),
  ...(user && { user }),
};

export default (state = initialState, action: { type: any; token: string }) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS: {
      const { user: loggedInUser } = jwtDecode<any>(action.token);
      return {
        ...state,
        loading: false,
        token: action.token,
        user: loggedInUser,
      };
    }

    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return { ...state, loading: false };

    case LOGOUT:
      return { ...state, token: null, user: null };

    default:
      return state;
  }
};
