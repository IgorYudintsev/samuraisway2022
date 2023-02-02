import React, {useRef} from 'react';
import styled from "styled-components";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type PostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: any) => void
    // addPost: (postMessage: string) => void
    // updateNewPostText:(newText:string)=>void
}

export const MyPosts = (props: PostsType) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.addPost(text)
            const action = {type:"ADD-POST"};
            props.dispatch(action)
            newPostElement.current.value = ''
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.updateNewPostText(text)
            const action = {type: "UPDATE-NEWPOST", newText: text};
            props.dispatch(action)
        }
    }

    const posts = props.posts.map(post => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })

    return (
        <MyPostsWrapper>
            <div>MyPosts</div>
            <textarea cols={30} rows={10} ref={newPostElement} value={props.newPostText} onChange={onChangeHandler}/>
            <div>
                <button onClick={addPost}>add post</button>
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
