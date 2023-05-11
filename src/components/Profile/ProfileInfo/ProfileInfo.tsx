import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {UserProfileType} from "../../../redux/profile-reducer";
import {avatar} from '../../../assets/images/avatar'
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileForm} from "./ProfileForm";


type PropsType = {
    isOwner?: boolean
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void,
}


export const ProfileInfo = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.userProfile) return <Preloader/>
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) {
            props.savePhoto(e.target.files![0])
        }
    }

    return (

        <Wrapper>
            <img
                src={props.userProfile?.photos.small
                    ? props.userProfile?.photos.small
                    : avatar
                }
                alt="ava"/>

            <div>{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}</div>

            {editMode
                ? <ProfileForm userProfile={props.userProfile} setEditMode={setEditMode} />
                : <ProfileData userProfile={props.userProfile} isOwner={props.isOwner} goEditTrue={()=>setEditMode(true)}/>
            }


            {/*<ProfileStatus status={'hellow'}   updateStatus={props.updateStatus}/>*/}
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </Wrapper>
    );
};

type ProfileDataType = {
    userProfile: UserProfileType
    isOwner?:boolean
    goEditTrue:()=>void
}
const ProfileData = (props: ProfileDataType) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.goEditTrue}>EditMode</button>}
            <div><b>fullName:</b> {props.userProfile.fullName}</div>
            <div><b>lookingForAJob: </b>{props.userProfile.lookingForAJob}</div>
            <div><b>userId:</b> {props.userProfile.userId}</div>
            <div><b>aboutMe:</b> {props.userProfile.aboutMe}</div>
            <div> {Object.keys(props.userProfile.contacts).map(key => {
                return (
                    <Contact
                        key={key}
                        contactKey={key}
                        contactValue={props.userProfile.contacts[key]}/>
                )
            })}</div>
        </div>
    )
}


type ContactType = {
    contactKey: string,
    contactValue: string | null
}
const Contact = (props: ContactType) => {
    return (
        <div><b>{props.contactKey}</b>:{props.contactValue ?? '-'}</div>
    )
}

const Wrapper = styled.div`
  margin-left: 20px;

  & > img {
    width: 50px;
  }

`