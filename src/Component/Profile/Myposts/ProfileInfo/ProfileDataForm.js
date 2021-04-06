import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {Input, Textarea, createField} from '../../../FromsControls/FromsControls';
import s from './Profileinfo.module.css';
import styles from './../../../FromsControls/FromsControls.module.css'


 const ProfileDataForm =({handleSubmit, error, profile})=>{
    return(
     <form onSubmit={handleSubmit}>
       <div>{error && <div className={styles.error} >{error}</div>}</div>

      <div><button>Save</button></div>
    <div> <b>Full Name</b> 
        <Field placeholder={'Full Name'} name={'fullName'} component={Input} validate={[]}/>
    </div>
    <div>
      <b>looking for a job</b>: <Field placeholder={''} name={'lookingForAJob'} component={Input} validate={[]} type={'checkbox'}/>
    </div>
    <div>
      <b>My professional skills</b>: <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Textarea} validate={[]}/>
    </div>
    <div>
      <b>About Me</b> : <Field placeholder={'About Me'} name={'aboutMe'} component={Textarea} validate={[]}/>
    </div>
    <div>
      <b>Contacts</b> {Object.keys(profile.contacts).map(key =>{
        return <div key={key} className={s.contact}>
          <b>{key}</b> <Field placeholder={key} name={'contacts.' + key} component={Input} validate={[]}/>
        </div>
      })}
    </div>
    
</form>)
  }

  const ProfileDataFormRedux = reduxForm({form: 'EditProfileData'})(ProfileDataForm)

  export default ProfileDataFormRedux;