import React from 'react'
import styles from './FromsControls.module.css'
import { Field, reduxForm } from 'redux-form';

const FormControl =({input, meta, children, ...props})=>{
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " +(hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}




export const Textarea =(props) =>{
   const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input =(props) =>{
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


export const createField = (placeholder, name, validators, component, props={}, text = "")=>{
   return <div>
        <Field placeholder={placeholder} 
        name={name} 
        component={component} 
        validate={[validators]}
        props={props}
        />{text}
    </div>
}
