import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) =>({
    Auth: state.auth.isAuth
})

export const  withAuthRedirect =(Component) =>{
   
   
    class RedirectComponet extends React.Component {
        render() {
            if (!this.props.Auth) return <Redirect to='./login'/>
            return <Component {...this.props}/>
    }
}

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponet)
        return ConnectedAuthRedirectComponent

}
