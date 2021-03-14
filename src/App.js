import React, { Suspense } from 'react';
import "./App.css";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from './Users/UsersContainer';
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./login/login";
import { compose } from "redux";
import { connect } from "react-redux";
import {initializeApp} from './redux/appReducer'
import Preloader from "./Preloader/Preloader";

// import DialogsContainer from "./Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));


class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  }
render(){
  if(!this.props.initialized) {
    return <Preloader/>
  }
  return (

      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => ( <ProfileContainer />)} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => ( <UsersContainer />)} />
          <Route path='/login' render={()=> (<Login/>)} />


          <Route path='/dialogs' render={() => {
             return <Suspense fallback={<div>Загрузка...</div>}>
                    <DialogsContainer />
                    </Suspense>
          }} />


        </div>
      </div>
  );
}
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter, 
  connect(mapStateToProps, { initializeApp })) (App);
