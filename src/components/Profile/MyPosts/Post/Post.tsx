import React from 'react';
import styled from "styled-components";

export const Post = () => {
    return (
        <PostWrapper>
            <img
                src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                alt="ava"/>
            <span>Post1</span>
            <div>Like</div>
        </PostWrapper>
    );
};

const PostWrapper = styled.div`
  margin-top: 50px;
  & > img {
    width: 50px;
  }

`