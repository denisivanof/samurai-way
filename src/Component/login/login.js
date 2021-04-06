import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FromsControls/FromsControls';
import { maxLength, required} from '../validator/validator';
import {login } from '../../redux/authReducer';
import style from './login.module.css'


const maxLength50 = maxLength(50);
const LoginForm = (props) => {
    
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'email'} 
                        name={'email'} 
                        component={Input} 
                        validate={[required, maxLength50]}
                />
            </div>
            <div>
                <Field   placeholder={'password'} 
                         name={'password'} 
                         component={Input}
                         validate={[required, maxLength50]}
                         type={"password"}/>
            </div>
            <div className={style.re}>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input}/> Remember me
            </div>
            {props.error && <div>{props.error}</div> }

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <div>
                <Field   placeholder={'Symbols'} 
                         name={'captcha'} 
                         component={Input} 
                         validate={[required]}
                />
            </div> }
            <button>Login</button>
        </form>
    )
};


const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {

const onSubmit = (formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha  )
}

if (props.isAuth){
    return <Redirect to={'/profile'}/>
}

    return(<div className={style.login}>
           <h1 className={style.h1}> Login </h1>
           <div className={style.loginForm}>
            <LoginReduxForm  onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
    </div>
    )
};
const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login}) (Login);
