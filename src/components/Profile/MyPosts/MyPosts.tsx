import React from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <MyPostsWrapper>
            <div>MyPosts</div>
            <textarea cols={30} rows={10}/>
            <div>
                <button>add post</button>
                <button>remove post</button>
            </div>

            <Post message={'Hi, how are you'}/>
            <Post message={'I`ts my first post'}/>

        </MyPostsWrapper>
    );
};

const MyPostsWrapper = styled.div`
  // background-color: dodgerblue;
  margin-left: 20px;
`