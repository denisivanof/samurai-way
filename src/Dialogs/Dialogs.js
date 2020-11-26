import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogsItem from './Dialogsitem/DialogsItem'
import Message from './Message/Message.js';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);

let messagesElements = props.state.messagesData
.map(message =><Message message={message.message} id={message.id} />);

let newMassegElement = React.createRef();

let newMeassge = () => {
    alert(newMassegElement.current.value);
}


    return(
    <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
        
        <textarea ref={newMassegElement} placeholder="Написать соббщение"></textarea>
        <div>
        <button onClick={newMeassge}>Отправить</button>
        </div>
        
    </div>   
)
} 
export default Dialogs;