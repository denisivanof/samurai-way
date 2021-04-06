import { stopSubmit } from 'redux-form';
import {getMe, loginApi, logoutApi, getCaptchaApi} from '../api/api'

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};
  

const authReducer = (state = initialState, action) => {
  switch (action.type){
      case 'SET_USER_DATA':
      case 'SET_CAPTCHA_URL':
         {
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
export const setCaptch = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: {captchaUrl} });

export const getMeThunk = () =>{
  return async (dispatch)=>{ 
      let data = await getMe();
      if(data.resultCode === 0){
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
        }
  }
export const login = (email, password, rememberMe, captcha) =>{
  return async (dispatch)=>{
   let response = await loginApi(email, password, rememberMe, captcha);
      if(response.data.resultCode === 0){
        dispatch(getMeThunk());
      } else {
        if(response.data.resultCode === 10){
          dispatch(getCaptcha());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("Login", { _error: message}));
      }
  }
}
export const getCaptcha = () =>{
  return async (dispatch)=>{
   let response = await getCaptchaApi();
      dispatch(setCaptch(response.data.url))
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
