import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";


type PropsType={
    userProfile:UserProfileType
   // isAuth:boolean
}


export const Profile = (props:PropsType) => {
    return (
        <div className={'MainContent'}>
            {/*<ul>*/}
            {/*    <li>HTML</li>*/}
            {/*    <li>CSS</li>*/}
            {/*    <li>TS</li>*/}
            {/*    <li>REACT</li>*/}
            {/*</ul>*/}
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

