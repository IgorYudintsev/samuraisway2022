import React from 'react';
import loadingGif from "../../assets/images/loadingGif.gif";
import styled from "styled-components";

export const Preloader = () => {
    return (
        <Spanfetching><img src={loadingGif}/></Spanfetching>
    );
};

const Spanfetching = styled.div`
  position: absolute;
  left: 45%;
  bottom: 40%;
`