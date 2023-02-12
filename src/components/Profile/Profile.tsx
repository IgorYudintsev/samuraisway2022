import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profilePageType} from "../../redux/store";


export const Profile = () => {

    return (
        <div className={'MainContent'}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TS</li>
                <li>REACT</li>
            </ul>
            <ProfileInfo/>

            <MyPostsContainer/>
        </div>
    );
};

