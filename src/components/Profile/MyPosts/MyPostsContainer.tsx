import React, {useContext} from 'react';
import {addPostAC, updatePostsAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostType} from "../../../redux/store";
import {StoreContext} from "../../../StoreContext";
// import {StoreContext} from "../../../StoreContext";

type PostsType = {
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: any) => void
}

export const MyPostsContainer = (props: PostsType) => {

    let consumer=useContext(StoreContext)
    //let consumer=useContext(StoreContext)

    const addPost = () => {
        consumer.dispatch(addPostAC())
    }

    const onPostChange = (newText: string) => {
        consumer.dispatch(updatePostsAC(newText))
    }


    return (
        <MyPosts
            posts={consumer.getState().profilePage.posts}
            newPostText={consumer.getState().profilePage.newPostText}
            onPostChange={onPostChange}
            addPost={addPost}
        />
    );
};

