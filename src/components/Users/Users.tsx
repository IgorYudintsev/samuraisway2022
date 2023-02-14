import React, {useEffect} from 'react';
import {InitialStateType, UsersType} from "../../redux/users-reducer";
import styled from "styled-components";

type PropsType = {
    usersPage: UsersType[]
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    setUsersHandler: (users: UsersType[]) => void
}

export const Users = (props: PropsType) => {
    console.log(props.usersPage)
    if (props.usersPage.length === 0) {
        props.setUsersHandler(
            [
                {
                    id: 1,
                    photoUrl: 'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png',
                    followed: true,
                    fullName: "Igor",
                    status: 'Boss',
                    location: {city: 'Minsk', counry: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: 'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png',
                    followed: false,
                    fullName: "Sasha",
                    status: 'MiddleBoss',
                    location: {city: 'Florida', counry: "the USA"}
                },
                {
                    id: 3,
                    photoUrl: 'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png',
                    followed: true,
                    fullName: "Nadya",
                    status: 'JuniorBoss',
                    location: {city: 'Paris', counry: "France"}
                }
            ]
        )
    }

    return (
        <Wrapper>
            {props.usersPage.map(el => {
                return (
                    <WrapperSide key={el.id}>
                        <LeftSide>
                            <img
                                src={el.photoUrl}
                                alt="ava"/>
                            <div>
                                {el.followed
                                    ? <button onClick={() => props.unFollowHandler(el.id)}>Follow</button>
                                    : <button onClick={() => props.followHandler(el.id)}>UnFollow</button>
                                }
                            </div>

                        </LeftSide>
                        <RightSide>
                            <DivForMargin>
                                <div>{el.id}</div>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                                <div>{el.location.city}</div>
                                <div>{el.location.counry}</div>
                            </DivForMargin>
                        </RightSide>

                    </WrapperSide>

                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  //background-color: chartreuse;
`

const WrapperSide = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //height: 100px;
  //background-color: #ecb4c6;
  margin-bottom: 10px;
`

const LeftSide = styled.div`
  //background-color: #f5f50a;
  min-width: 5%;
  margin-bottom: 10px;
  text-align: center;

  & > img {
    width: 50px;
  }
`

const RightSide = styled.div`
  //background-color: #1e3786;
  width: 95%;
  margin-bottom: 10px;
`

const DivForMargin = styled.div`
  //background-color: #1e3786;
  margin-left: 15px;
`