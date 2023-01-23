import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {PostType, profilePageType} from "../../redux/state";



type StateType={
    profilePage:profilePageType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}

export const Profile = (props:StateType) => {

    return (
        <div className={'MainContent'}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TS</li>
                <li>REACT</li>
            </ul>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

