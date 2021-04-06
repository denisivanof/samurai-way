import preloader from './../imges/Bean Eater-0.8s-191px.svg';
import React from 'react';
import s from './Preloader.module.css'

let Preloader = () => {
    return <div className={s.preloader}><img src={preloader} /></div>
}

export default Preloader;