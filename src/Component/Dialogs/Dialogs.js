import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../validator/validator';
import s from './Dialogs.module.css';
import DialogsItem from './Dialogsitem/DialogsItem';
import Message from './Message/Message.js';
import {maxLength} from '../validator/validator'
import {Textarea} from '../FromsControls/FromsControls'

const Dialogs = (props) => {

let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

let messagesElements = props.dialogsPage.messagesData.map(message =><Message key={message.id} message={message.message} id={message.id} />);


let addNewMessage = (values) =>{
props.sendMassegeContainer(values.newMassegeBody)
}
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
        <AddMessgeReduxForm onSubmit={addNewMessage}/>
      </div>
    );
} 

const maxLength50 = maxLength(50);

const AddMessgeForm = (props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} 
      name={'newMassegeBody'} 
      placeholder={'Написать соббщение'}
      validate={[required, maxLength50]}
      />
        <div>
          <button >Отправить</button>
        </div>
    </form>
  )
};

const AddMessgeReduxForm = reduxForm({form:'DailogAddMessgeForm'})(AddMessgeForm)




export default Dialogs;