

export const getUsersSelector = (state)=>{
    return state.usersPage.users;
}
export const usersPageSelector = (state)=>{
    return state.usersPage.pageSize;
}
export const totalUsersCountSelector = (state)=>{
    return state.usersPage.totalItemCount;
}
export const currentPageSelector = (state)=>{
    return state.usersPage.currentPage;
}
export const isFetchingSelector = (state)=>{
    return state.usersPage.isFetching;
}
export const FollowingProgressSelector = (state)=>{
    return state.usersPage.FollowingProgress;
}

