import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {
   let postsElements = 
   props.posts.map( p => <Post message = {p.message} likesCount={p.likesCount}/>);

let newPostsElement = React.createRef();

let addPosts = () => {
   props.addPost();
}

let onPostChange = () => {
   let text = newPostsElement.current.value;
   props.updateNewPostText(text);
}

  return (
     <div className={s.myposts}>
       <h3>My posts</h3>
       <div>
          <textarea onChange={onPostChange} ref={newPostsElement}
         value={props.newPostText} />
       </div>
       <div>
          <button onClick={addPosts}>Add Post</button>
       </div>
       <div className={s.post}>
          {postsElements}
       </div>
     </div>)

}
export default Myposts;
