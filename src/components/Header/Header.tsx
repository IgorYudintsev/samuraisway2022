import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {InitialStateType, logOutTC} from "../../redux/auth-reducer";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    setUserData: (data: InitialStateType, isAuth: boolean) => void
    logOutTC: () => void
}


export const Header = (props: PropsType) => {
    const onClickHandler = () => {
        props.logOutTC()
    }
    return (
        <div className={'Header'}>
            <HeaderBlock>
                <ImgWrapper>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
                         alt="logo"/>
                </ImgWrapper>
                <LoginBlock>
                    {props.isAuth
                        ? <div>
                            {props.login}
                            <div>
                                <button onClick={onClickHandler}>LogOut</button>
                            </div>
                        </div>
                        : <NavLink to={'/login'}> Login </NavLink>
                    }

                </LoginBlock>
            </HeaderBlock>
        </div>
    );
};

const HeaderBlock = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ImgWrapper = styled.span`
  align-items: center;

  & > img {
    width: 50px;
  }
`

const LoginBlock = styled.span`
  background-color: chartreuse;
`