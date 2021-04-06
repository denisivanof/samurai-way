import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className = {s.header}>
     <img src = "https://www.studioadhoc.de/wp-content/uploads/2013/04/TYPO_Berlin_2008_img_Logo.png" />

<div className={s.loginBlok}>

  {props.isAuth
    ?  <div className={s.logOut}>{props.login} -<button onClick={props.logout} className={s.button}>Log Out</button></div>
    :<NavLink to={'/login'}>Login</NavLink>}
</div>
    
    </header>)
}
export default Header;
