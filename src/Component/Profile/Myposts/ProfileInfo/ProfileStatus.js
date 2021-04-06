import React, { useEffect, useState } from 'react';
import s from './Profileinfo.module.css';

const  ProfileStatus = (props) => {
 
let [editMode, setEditMode]  = useState(false);
let [status, setStatus] = useState(props.status)
 

useEffect( ()=>{
  setStatus(props.status)
}, [props.status]);


const ActivateMode = () => {
  setEditMode(true)
 } 
 const DeActivateMode = () =>{
  setEditMode(false)
  props.UpdateStatus(status);
} 
const OnStatusChange = (e)=>{
  setStatus(e.currentTarget.value)
}

    return (
    <div>
          <div>
            {!editMode &&
              <span onDoubleClick={ActivateMode}>{props.status  || "------"}</span>
            } 
          </div>
          <div>
            {editMode &&
              <input onChange={OnStatusChange} autoFocus={true} onBlur={DeActivateMode} value={status} />
            } 
          </div>
    </div>)

}
export default ProfileStatus;
