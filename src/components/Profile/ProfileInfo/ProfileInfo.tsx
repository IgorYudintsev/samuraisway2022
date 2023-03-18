import React from 'react';
import styled from "styled-components";
import {UserProfileType} from "../../../redux/profile-reducer";
import {avatar} from '../../../assets/images/avatar'
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type PropsType = {
    userProfile: UserProfileType
}


export const ProfileInfo = (props: PropsType) => {
    console.log(props.userProfile)
    if(!props.userProfile)return <Preloader/>
    return (
        <Wrapper>
            <img
                src={props.userProfile?.photos.small
                    ? props.userProfile?.photos.small
                    : avatar
                }
                alt="ava"/>

            <div>Ava + description</div>
            <ProfileStatus status={'hellow'}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  //margin-top: 50px;
  & > img {
    width: 50px;
  }

`