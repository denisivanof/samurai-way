import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className = {s.navbar}>
      <div className= {s.item}>
        <NavLink to ="/Profile" activeClassName= {s.active}>Profile</NavLink>
      </div>
      <div className= {s.item}>
        <NavLink to = "/Dialogs" activeClassName= {s.active}>Massages</NavLink>
      </div>
      <div className= {s.item}>
        <NavLink to = "/News" activeClassName= {s.active}>News</NavLink>
      </div>
      <div className= {s.item}>
         <NavLink to = "/Music" activeClassName= {s.active}>Music</NavLink>
      </div>
      <div className= {s.item}>
         <NavLink to = "/Settings" activeClassName= {s.active}>Settings</NavLink>
      </div>
      <div className= {s.item}>
         <NavLink to = "/Users" activeClassName= {s.active}>Users</NavLink>
      </div>
      <div className={s.friends}>
        <h2>Friends</h2>
        <div className={s.freindsItem}>
            <div className={s.fItem}>
                <NavLink to= "/Sasha" activeClassName= {s.active}> Sasha</NavLink>
                <div className={s.avatar}>
                <img src='https://i.pinimg.com/736x/98/51/b8/9851b8ab5b3e8e1446ceb3493da7c64a--i-love-coffee-cartoon-cats.jpg'/>
                </div>
            </div>
            <div className={s.fItem}>
                <NavLink to= "/Sveta" activeClassName= {s.active}> Sveta</NavLink>
                <div className={s.avatar}>
                <img src='https://i.pinimg.com/736x/98/51/b8/9851b8ab5b3e8e1446ceb3493da7c64a--i-love-coffee-cartoon-cats.jpg'/>
                </div>
            </div>
            <div className={s.fItem}>
                <NavLink to= "/Dimych" activeClassName= {s.active}> Dimych</NavLink>
                <div className={s.avatar}>
                <img src='https://i.pinimg.com/736x/98/51/b8/9851b8ab5b3e8e1446ceb3493da7c64a--i-love-coffee-cartoon-cats.jpg'/>
                </div>
            </div>
        </div>
      </div>
    </nav> 
    
    )
}
export default Navbar;
