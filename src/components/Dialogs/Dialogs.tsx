import React from 'react';
import styled from "styled-components";

export const Dialogs = () => {
    return (
        <Wrapper>
            <Left>
                <div>Igor</div>
                <div>Olga</div>
                <div>Sasha</div>
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