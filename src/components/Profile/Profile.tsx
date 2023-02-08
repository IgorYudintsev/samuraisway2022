import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {profilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type StateType = {
    profilePage: profilePageType
    dispatch:(action:any)=>void
}

export const Profile = (props: StateType) => {

    return (
        <div className={'MainContent'}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TS</li>
                <li>REACT</li>
            </ul>
            <ProfileInfo/>

            <MyPostsContainer
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

