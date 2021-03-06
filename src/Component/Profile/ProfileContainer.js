import {connect} from 'react-redux'
import React from "react";
import Profile from './Profile'
import {GetUserProfile, GetStatus, UpdateStatus, savePhoto, saveProfileData } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
 
 refreshProfile (){
  let userId = this.props.match.params.userId;
  if (!userId) {
    userId = this.props.authorizedUserId;
    if (!userId) {this.props.history.push('/login')}
  }
  this.props.GetUserProfile(userId);
  this.props.GetStatus(userId);
 }

  componentDidMount(){
    this.refreshProfile ()
  }

  componentDidUpdate(prevProps, prevState ){
    if (this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile ()
    }
  }

  render(){
      return (<Profile {...this.props}
        isOwner={!this.props.match.params.userId} 
        profile={this.props.profile} 
        status={this.props.status} 
        UpdateStatus={this.props.UpdateStatus}
        savePhoto={this.props.savePhoto}
        saveProfileData={this.props.saveProfileData}
        />)
  }
};

  let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId
}); 

export default compose(
  connect(mapStateToProps, {GetUserProfile, GetStatus, UpdateStatus, savePhoto, saveProfileData }), withRouter)(ProfileContainer)

// let AuthRedirectConmponent = withAuthRedirect(ProfileContainer);


// let WithUrlDataContainerComponent = withRouter(AuthRedirectConmponent);

// export default connect(mapStateToProps, {GetUserProfile}) (WithUrlDataContainerComponent);
