import React from "react";
import Paginator from './../Paginator/Paginator'
import User from "./User";
import stayle from './users.module.css'

const Users = (props) => {
    return <div>
<Paginator totalItemCount={props.totalItemCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
    <div className={stayle.users}>
    {
        props.users.map( u=> <User user={u} FollowingProgress={props.FollowingProgress} 
            UnFollow={props.UnFollow}
            Follow={props.Follow}
            key={u.id}
        /> )
}</div>
</div>
}

export default Users;