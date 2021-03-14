import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../redux/profileReducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
 let mapDispatchToProps = (dispatch)=>{
  return {
    addPostsContainer: (newPostText) =>{dispatch(addPostActionCreator(newPostText))},
  }
 }

 const MypostsContainer = connect (mapStateToProps,mapDispatchToProps )(Myposts);

 export default MypostsContainer;