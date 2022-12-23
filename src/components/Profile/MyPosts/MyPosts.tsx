import React from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const postsData=[
        {
            id:1,
            message:'Hi, how are you',
            likesCount:0
        },
        {
            id:2,
            message:'I`ts my first post',
            likesCount:13
        },

    ]

    return (
        <MyPostsWrapper>
            <div>MyPosts</div>
            <textarea cols={30} rows={10}/>
            <div>
                <button>add post</button>
                <button>remove post</button>
            </div>

            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>

        </MyPostsWrapper>
    );
};

const MyPostsWrapper = styled.div`
  // background-color: dodgerblue;
  margin-left: 20px;
`
