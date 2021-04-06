import React from "react";
import MypostsContainer from "./Myposts/MypostsContainer";
import Profileinfo from "./Myposts/ProfileInfo/Profileinfo";


const Profile = (props) => {
  return (
    <div>
      <Profileinfo saveProfileData={props.saveProfileData} 
      savePhoto={props.savePhoto} 
      isOwner={props.isOwner} 
      profile={props.profile} 
      status={props.status} 
      UpdateStatus={props.UpdateStatus}/>
      <MypostsContainer/>
    </div>
  );
};
export default Profile;
