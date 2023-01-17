import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import {PostType} from "../../redux/state";



type StateType={
    state:PostType[]
    addPost:(postMessage:string)=>void
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
            <MyPosts posts={props.state} addPost={props.addPost}/>
        </div>
    );
};

