import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {UserProfileType} from "../../../redux/profile-reducer";
import {avatar} from '../../../assets/images/avatar'
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type PropsType = {
    isOwner?: boolean
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void,
}


export const ProfileInfo = (props: PropsType) => {
    //debugger
    //console.log(props.userProfile)
    if (!props.userProfile) return <Preloader/>

    const onMainPhotoSelected=(e:ChangeEvent<HTMLInputElement>)=>{
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

            <div>
                {props.isOwner &&<input type="file" onChange={onMainPhotoSelected}/>}
            </div>

            <div>Ava + description</div>
            {/*<ProfileStatus status={'hellow'}   updateStatus={props.updateStatus}/>*/}
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-left: 20px;

  & > img {
    width: 50px;
  }

`