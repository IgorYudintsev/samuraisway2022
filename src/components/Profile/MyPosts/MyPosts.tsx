import React from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const postsData = [
        {
            id: 1,
            message: 'Hi, how are you',
            likesCount: 0
        },
        {
            id: 2,
            message: 'I`ts my first post',
            likesCount: 13
        },

    ]

    const posts = postsData.map(post => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })

    return (
        <MyPostsWrapper>
            <div>MyPosts</div>
            <textarea cols={30} rows={10}/>
            <div>
                <button>add post</button>
                <button>remove post</button>
            </div>
            {posts}
        </MyPostsWrapper>
    );
};

const MyPostsWrapper = styled.div`
  // background-color: dodgerblue;
  margin-left: 20px;
`
