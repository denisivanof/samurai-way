import React, { Suspense } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Component/login/login";
import Music from "./Component/Music/Music";
import Navbar from "./Component/Navbar/Navbar";
import News from "./Component/News/News";
import Preloader from "./Component/Preloader/Preloader";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import { initializeApp } from './redux/appReducer';
import Settings from "./Component/Settings/Settings";
import UsersContainer from './Component/Users/UsersContainer';

// import DialogsContainer from "./Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./Component/Dialogs/DialogsContainer'));


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
