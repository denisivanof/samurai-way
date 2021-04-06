import React from "react";
import stayle from './users.module.css'
import usersPhoto from './../imges/user.jpg';
import { NavLink } from "react-router-dom";

const User = ({FollowingProgress, Follow, UnFollow , user}) => {
    return( <div>
            <span>
                <div>
                    <NavLink to={'./profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : usersPhoto } className={stayle.photo}/>
                    </NavLink>
                    
                </div>
                <div>
                    {user.followed ? <button disabled={FollowingProgress.some(id=> id === user.id)} 
                            onClick={()=>{UnFollow(user.id);
                        }}>UnFollow</button>: 
                    <button disabled={FollowingProgress.some(id=> id === user.id)} 
                            onClick={()=>{Follow(user.id)
                                  }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.country}</div>
                    <div>{u.location.city}</div> */}

                </span>
            </span>

        </div>)
}

export default User;