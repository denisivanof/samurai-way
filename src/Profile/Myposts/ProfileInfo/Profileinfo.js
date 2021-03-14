import React from 'react';
import Preloader from '../../../Preloader/Preloader';
import s from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus';

const Profileinfo = (props) => {
if (!props.profile){
  return <Preloader/>
}
  return (
    <div >
     <div className={s.descriptionBlock}>
       <img src={props.profile.photos.large} />
       <ProfileStatus status={props.status} UpdateStatus={props.UpdateStatus} />
       ava + description
    </div>
    </div>)
}
export default Profileinfo;
