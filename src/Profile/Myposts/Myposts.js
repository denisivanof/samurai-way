import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Myposts.module.css';
import Post from './Post/Post';
import {maxLength, required} from './../../validator/validator';
import {Textarea} from './../../FromsControls/FromsControls'
import { Component } from 'react';


const Myposts = React.memo( props =>{

   let postsElements = props.profilePage.posts.map( p => <Post message = {p.message} likesCount={p.likesCount}/>);
   let addPosts = (values) => {
   props.addPostsContainer(values.newPostText);
   // props.dispatch(addPostActionCreator());
};
  return (
     <div className={s.myposts}>
       <h3>My posts</h3>
          <AddPostsFormRedux onSubmit={addPosts}/>
       <div className={s.post}>
          {postsElements}
       </div>
     </div>
     )
});

const maxLength15 = maxLength(15);

const AddPostsForm = (props) => {
   return ( 
      <form onSubmit={props.handleSubmit}>
   <div>
      <Field component={Textarea} name={'newPostText'} placeholder={'Post message'}
       validate={[required, maxLength15]}/>
          </div>
       <div>
          <button>Add Post</button>
       </div>
      </form>
   )
};

const AddPostsFormRedux = reduxForm({form:"PostAddPostsForm"})(AddPostsForm);

export default Myposts;


