import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FromsControls/FromsControls';
import { maxLength, required } from '../validator/validator';
import {login } from './../redux/authReducer';
import {s} from './login.module.css'

const maxLength50 = maxLength(50);
const LoginForm = (props) => {
    
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} 
                name={'email'} 
                component={Input} 
                validate={[required, maxLength50]}
                />
            </div>
            <div>
                <Field placeholder={'password'} 
                name={'password'} 
                component={Input}
                validate={[required, maxLength50]}
                type={"password"}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div>
                    {props.error}
                    </div> }
            <button>Login</button>
        </form>
    )
};


const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {

const onSubmit = (formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe )
}

if (props.isAuth){
    return <Redirect to={'/profile'}/>
}

    return(<div>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
};
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);