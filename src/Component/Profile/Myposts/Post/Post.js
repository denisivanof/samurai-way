import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
     <div className={s.item}>
       <img src='https://i.pinimg.com/736x/98/51/b8/9851b8ab5b3e8e1446ceb3493da7c64a--i-love-coffee-cartoon-cats.jpg'/>
     <span className={s.message}>{props.message}</span>
     </div>
     <span>Like</span>
    </div>)
}
export default Post;
