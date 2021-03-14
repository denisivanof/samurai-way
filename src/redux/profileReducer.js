import {ProfilApi, getStatusAPI, updateStatusAPI} from './../api/api'

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
    default:
        return state;
  } 
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const SetStatus = (status) => ({ type: SET_STATUS, status });


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


export default profileReducer;
