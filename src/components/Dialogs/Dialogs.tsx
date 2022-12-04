import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <Wrapper>
            <Left>
                <div><NavLink to={'/dialogs/1'}>Igor</NavLink></div>
                <div><NavLink to={'/dialogs/2'}>Olga</NavLink></div>
                <div><NavLink to={'/dialogs/3'}>Sasha</NavLink></div>
            </Left>
            <Right>
                <div>Hi</div>
                <div>How are you&</div>
                <div>hellow</div>
            </Right>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;

`

const Left = styled.div`
  background-color: steelblue;
  width: 50%;
`

const Right = styled.div`
  background-color: #1e3786;
  width: 50%;
`