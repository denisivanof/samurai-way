import { stopSubmit } from 'redux-form';
import {getMe, loginApi, logoutApi} from './../api/api'
const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};
  

const authReducer = (state = initialState, action) => {
  switch (action.type){
      case 'SET_USER_DATA': {
        return {
          ...state,
          ...action.payload,
          }
      }

    default: 
          return state;
  } 
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

export const getMeThunk = () =>{
  return async (dispatch)=>{ 
      let data = await getMe();
      if(data.resultCode === 0){
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
        }
  }
export const login = (email, password, rememberMe) =>{
  return async (dispatch)=>{
   let response = await loginApi(email, password, rememberMe);
      if(response.data.resultCode === 0){
        dispatch(getMeThunk());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("Login", { _error: message}));
      }
  }
}
export const logout = () =>{
  return async (dispatch)=>{
  let response = await  logoutApi();
      if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
      }
  }
}

export default authReducer;
