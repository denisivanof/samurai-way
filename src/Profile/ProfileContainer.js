import {connect} from 'react-redux'
import React from "react";
import Profile from './Profile'
import {GetUserProfile, GetStatus, UpdateStatus} from './../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 13494;
      userId = this.props.authorizedUserId;
      if (!userId) {this.props.history.push('/login')}
    }
    this.props.GetUserProfile(userId);
    this.props.GetStatus(userId);
  }
  render(){
return (<Profile {...this.props} profile={this.props.profile} status={this.props.status} 
        UpdateStatus={this.props.UpdateStatus}/>)
  }
};

  let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId
}); 

export default compose(
  connect(mapStateToProps, {GetUserProfile, GetStatus, UpdateStatus}), withRouter)(ProfileContainer)

// let AuthRedirectConmponent = withAuthRedirect(ProfileContainer);


// let WithUrlDataContainerComponent = withRouter(AuthRedirectConmponent);

// export default connect(mapStateToProps, {GetUserProfile}) (WithUrlDataContainerComponent);
