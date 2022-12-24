import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {PostType} from "../../index";


type PostsType={
    posts:PostType[]
}

export const Profile = (props:PostsType) => {

    return (
        <div className={'MainContent'}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TS</li>
                <li>REACT</li>
            </ul>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

