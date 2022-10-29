import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {

    return (
        <div className={'MainContent'}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TS</li>
                <li>REACT</li>
            </ul>
            <MyPosts/>
        </div>
    );
};

