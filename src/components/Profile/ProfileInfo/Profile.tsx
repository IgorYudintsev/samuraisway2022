import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../redux/profile-reducer";


type PropsType={
    isOwner?:boolean
    userProfile:UserProfileType
    status:string
    updateProfileStatusThunkCreator: (status: string) => void
    savePhoto: (file: File) => void,
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
            <ProfileInfo
                isOwner={props.isOwner}
                userProfile={props.userProfile}
                status={props.status}
                updateStatus={props.updateProfileStatusThunkCreator}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
};

