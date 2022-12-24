import React from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";
import {PostType} from "../../../index";


type PostsType={
    posts:PostType[]
}

export const MyPosts = (props:PostsType) => {

    const posts = props.posts.map(post => {
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
