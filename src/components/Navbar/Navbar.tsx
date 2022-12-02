import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={'Nav'}>
            <div><NavLink to={'/profile'}> Profile</NavLink></div>
            <div><NavLink to={'/dialogs'}> Dialogs</NavLink></div>
            <div><NavLink to={'/messages'}> Messages</NavLink></div>
            <div><NavLink to={'/news'}>News</NavLink></div>
            <div><NavLink to={'/music'}>Music</NavLink></div>
            <div><NavLink to={'/seetings'}>Seetings</NavLink></div>
        </div>
    );
};
