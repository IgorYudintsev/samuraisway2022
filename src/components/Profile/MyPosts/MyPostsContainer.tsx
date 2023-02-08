import React from 'react';
import {addPostAC, updatePostsAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostType} from "../../../redux/store";

type PostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPostsContainer = (props: PostsType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (newText: string) => {
        props.dispatch(updatePostsAC(newText))
    }


    return (
        <MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            onPostChange={onPostChange}
            addPost={addPost}
        />
    );
};

