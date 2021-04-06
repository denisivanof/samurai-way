import React, { useState } from 'react';
import Preloader from '../../../Preloader/Preloader';
import s from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus';
import usersPhoto from './../../../imges/user.jpg';
import ProfileDataFormRedux from './ProfileDataForm'


const Profileinfo = (props) => {
let [editMode, setEditMode] =useState(false);

if (!props.profile){
  return <Preloader/>
}
const onMainPhotoSelected=(e)=>{
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
}

const onSubmit = (formData)=>{
  props.saveProfileData(formData).then(
    ()=>{
      setEditMode(false);
    })
}
  return (
    <div >
     <div className={s.descriptionBlock}>
       <img src={props.profile.photos.large || usersPhoto } className={s.photo} />
       
       {editMode && props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
       <ProfileStatus status={props.status} UpdateStatus={props.UpdateStatus} />
       
       {editMode ?  <ProfileDataFormRedux initialValues={props.profile} 
                                          profile={props.profile} 
                                          onSubmit={onSubmit}  /> : 
       <ProfileData  profile={props.profile} 
                     isOwner={props.isOwner}
                     goToEditMode={()=>{setEditMode(true)}} /> }


    </div>
    </div>)
}

const ProfileData =(props)=>{
  return <div className={s.profileInfo}>
    {props.isOwner && <div><button onClick={props.goToEditMode}> edit</button></div>}
    <div>
      <b>Full Name</b>: {props.profile.fullName}
    </div>
    <div>
      <b>AboutMe</b>: {props.profile.aboutMe}
    </div>
    <div>
      <b>lookingForAJob</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    { props.profile.lookingForAJob &&
    <div>
      <b>My professional skills</b>:  {props.profile.lookingForAJobDescription}
    </div>}
    <div className={s.contact}>
      <b>Contacts</b> {Object.keys(props.profile.contacts).map(key =>{
        return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
      })}
    </div>
  </div>
}


const Contacts =({contactTitle, contactValue})=>{
return <div><b>{contactTitle}</b>:{contactValue}</div>
}

export default Profileinfo;
