import {ProfilApi, getStatusAPI, updateStatusAPI, savePhotoAPI, saveProfileDataAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";


let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Hi", likesCount: 11 },],
  newPostText: "It-kamasutra.com",
  profile: null,
  status: ""
}
 

const profileReducer = (state = initialState, action) => {
  switch (action.type){
      case 'ADD-POST': {
        return {
          ...state,
          posts: [...state.posts, {id: 3,message: action.newPostText, likesCount: 0}],
        };
      }
      case 'SET_USER_PROFILE' :{
        return{...state, profile: action.profile};
      }
      case 'SET_STATUS' :{
        return{...state, status: action.status};
      }
      case 'SET_PHOTO_SUCCESS' :{
        return{...state, profile: {...state.profile, photos: action.photos}};
      }
    default:
        return state;
  } 
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const SetStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos });

export const GetUserProfile = (userId) => {
  return async (dispatch)=>{
   let response = await ProfilApi(userId);
      dispatch(SetUserProfile(response.data))
  }
}

export const GetStatus = (userId) => {
  return async (dispatch)=>{
   let response = await getStatusAPI(userId);
      dispatch(SetStatus(response.data))
  }
}
export const UpdateStatus = (status) => {
  return async (dispatch)=>{
  let response = await  updateStatusAPI(status);
      if (response.data.resultCode === 0) {dispatch(SetStatus(status))}
  }
}
export const savePhoto = (file) => {
  return async (dispatch)=>{
  let response = await savePhotoAPI(file);
      if (response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))}
  }
}
export const saveProfileData = (profile) => {
  return async (dispatch, getState)=>{
  let userId = getState().auth.userId;
  let response = await saveProfileDataAPI(profile);
      if (response.data.resultCode === 0){
        dispatch(GetUserProfile(userId))}
        else{
          dispatch(stopSubmit("EditProfileData", { _error: response.data.messages[0]}));
          return Promise.reject(response.data.messages[0])
        }
  }
}


export default profileReducer;
