import React from 'react';
import './App.css';
import Content from './Profile/Profile';

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
         <Header/>
         <Navbar/>
         <div className="app-wrapper-content"> 
              <Route path='/profile' render={() => <Content state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>
              <Route path='/news' render={() => <News/>}/>
              <Route path='/music' render={() => <Music/>}/>
              <Route path='/settings' render={() => <Settings/>}/>
              <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
          </div>
          </div>
    </BrowserRouter>
  );
}
export default App;
