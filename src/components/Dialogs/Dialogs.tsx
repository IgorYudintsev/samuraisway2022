import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {
    return (
        <Wrapper>
            <Left>
                <DialogItem name={'Igor'} id={1}/>
                <DialogItem name={'Olga'} id={2}/>
                <DialogItem name={'Sasha'} id={3}/>
            </Left>
            <Right>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Hellow'}/>
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