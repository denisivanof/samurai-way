import React from 'react';
import Myposts from './Myposts/Myposts';
import Profileinfo from './Myposts/ProfileInfo/Profileinfo';
import s from './Profile.module.css';

const Content = (props) => {
  return (
    <div >
    <Profileinfo/>
    <Myposts posts={props.state.posts} 
            addPost={props.addPost} 
            newPostText={props.state.newPostText}
            updateNewPostText={props.updateNewPostText}/>
    </div>)
}
export default Content;
