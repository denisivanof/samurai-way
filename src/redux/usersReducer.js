import {getUsersAPI, FollowApi, UnFollowApi} from './../api/api';

const FOLLOW = "FOLLOW";
const UnFOLLOW = "UnFOLLOW";
const Set_Users = "Set_Users";
const Set_Current_Page = "Set_Current_Page";
const Set_Total_Users_Count = "Set_Total_Users_Count";
const Toggel_Fetching = "Toggel_Fetching";
const Toggel_Fetching_Progress = "Toggel_Fetching_Progress";

let initialState = {
  users: [ ],
  pageSize: 10,
  totalItemCount: 0,
  currentPage: 1,
  isFetching: false,
  FollowingProgress: [],
};
  

const usersReducer = (state = initialState, action) => {
  switch (action.type){
      case 'FOLLOW': {
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id  === action.userId) {
              return{...u,followed: true}
            }
            return u;
          })
      }
    }
      case 'UnFOLLOW': {
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id  === action.userId) {
              return{...u,followed: false}
            }
            return u;
          })
      }
    }
    case 'Set_Users': {
      return{...state, users: [...action.users]}
    }
    case 'Set_Current_Page': {
      return{...state, currentPage: action.currentPage}
    }
    case 'Set_Total_Users_Count': {
      return{...state, totalItemCount: action.totalItemCount}
    }
    case 'Toggel_Fetching': {
      return{...state, isFetching: action.isFetching}
    }
    case 'Toggel_Fetching_Progress': {
      return{
        ...state,
        FollowingProgress: action.isFetching 
        ? [...state.FollowingProgress, action.userId]
        : state.FollowingProgress.filter(id => id != action.userId)
      }
    }

    default: 
          return state;
  } 
};

export const FollowSuccesses = (userId) => ({ type: FOLLOW, userId });
export const UnFollowSuccesses = (userId) => ({type: UnFOLLOW, userId});
export const SetUsers = (users) => ({type: Set_Users, users});
export const SetCurrentPage = (currentPage) => ({type: Set_Current_Page, currentPage});
export const SetTotalUsersCount = (totalItemCount) => ({type: Set_Total_Users_Count, totalItemCount});
export const ToggelFetching = (isFetching) => ({type: Toggel_Fetching,isFetching});
export const ToggelFetchingProgress = (isFetching, userId) => ({type: Toggel_Fetching_Progress, isFetching, userId});


export const getUsers = (currentPage, pageSize) =>{
  return async (dispatch) => {
    dispatch(ToggelFetching(true));
   let data = await getUsersAPI(currentPage, pageSize);
          dispatch(ToggelFetching(false));
          dispatch(SetUsers(data.items));
          dispatch(SetTotalUsersCount(data.totalCount));
  }
};

export const Follow =(userId)=>{
  return async (dispatch) =>{
    dispatch(ToggelFetchingProgress(true, userId))
  let data = await FollowApi(userId);
          if(data.resultCode === 0){
            dispatch(FollowSuccesses(userId))
          }
          dispatch(ToggelFetchingProgress(false, userId))
  }
}
export const UnFollow =(userId)=>{
  return async (dispatch) =>{
    dispatch(ToggelFetchingProgress(true, userId))
   let data = await UnFollowApi(userId);
          if(data.resultCode === 0){
            dispatch(UnFollow(userId))}
            dispatch(ToggelFetchingProgress(false, userId))
  }
}


export default usersReducer;
