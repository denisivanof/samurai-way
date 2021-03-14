import React from "react";
import Paginator from './../Paginator/Paginator'
import User from "./User";

const Users = (props) => {
    return <div>
<Paginator totalItemCount={props.totalItemCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
    {
        props.users.map( u=> <User user={u} FollowingProgress={props.FollowingProgress} 
            UnFollow={props.UnFollow}
            Follow={props.Follow}
            key={u.id}
        /> )
}
</div>
}

export default Users;