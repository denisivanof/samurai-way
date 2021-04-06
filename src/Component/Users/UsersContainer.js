import React from 'react'
import {connect} from 'react-redux'
import {Follow, UnFollow, SetUsers, 
  SetCurrentPage, SetTotalUsersCount, ToggelFetching, getUsers} from '../../redux/usersReducer'
import Users from './Users';
import Preloader from '../Preloader/Preloader'
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {getUsersSelector,usersPageSelector, totalUsersCountSelector,
  currentPageSelector, isFetchingSelector, FollowingProgressSelector } from './userReselect'

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

onPageChanged = (pageNumber) => {
    this.props.SetCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
}

render() {
  return <> 
  {this.props.isFetching ? 
  <Preloader /> : null }


  <Users totalItemCount={this.props.totalItemCount} 
          pageSize={this.props.pageSize}
          currentPage= {this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          UnFollow={this.props.UnFollow}
          Follow={this.props.Follow}
          FollowingProgress={this.props.FollowingProgress}
  />
</>
}
}  

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: usersPageSelector(state),
    totalItemCount: totalUsersCountSelector(state),
    currentPage: currentPageSelector(state),
    isFetching: isFetchingSelector(state),
    FollowingProgress: FollowingProgressSelector(state)
  };
};


export default compose(
  connect (mapStateToProps,{Follow, UnFollow, SetUsers, SetCurrentPage, SetTotalUsersCount, 
    ToggelFetching, getUsers}),
    withAuthRedirect)
  (UsersContainer)


// export default connect (mapStateToProps,{
//   Follow, UnFollow, SetUsers, 
//   SetCurrentPage, SetTotalUsersCount, ToggelFetching, getUsers
//   }) (UsersContainer);;