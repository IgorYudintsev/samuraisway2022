import React, {useRef} from 'react';
import styled from "styled-components";
import {PostType} from "../../../redux/store";
import {Post} from "./Post/Post";
import {SubmitHandler, useForm} from "react-hook-form";
import {CommonForm} from "../../common/CommonForm";


type PostsType = {
    posts: PostType[]
    newPostText: string
    //onPostChange: (newText: string) => void
    addPost: (message:string) => void
}


export const MyPosts = (props: PostsType) => {
    const posts = props.posts.map(post => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })


    const onSubmitHandler = (message: string) => {
             props.addPost(message)
    }



    return (
        <MyPostsWrapper>
            <div>MyPosts</div>
            {/*<textarea cols={30} rows={10} ref={newPostElement} value={props.newPostText} onChange={onChangeHandler}/>*/}
            {/*<div>*/}
            {/*    <button onClick={addPostHandler}>add post</button>*/}
            {/*    <button>remove post</button>*/}
            {/*</div>*/}

            {/*<AddMessageFormMyPosts onSubmitHandler={onSubmitHandler}/>*/}
            <CommonForm onSubmitHandler={onSubmitHandler} textArea={true}/>

            {posts}
        </MyPostsWrapper>
    );
};

const MyPostsWrapper = styled.div`
  margin-left: 20px;
`




//
//
// type Inputs = {
//     message: string,
// };
//
// type AddMessageFormMyPostsType = {
//     onSubmitHandler: (message: string) => void
// }
//
// export const AddMessageFormMyPosts = (props: AddMessageFormMyPostsType) => {
//     const {register, handleSubmit, reset} = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         props.onSubmitHandler(data.message)
//         reset()
//     }
//
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <textarea cols={30} rows={10}  placeholder={'Enter your message'} {...register("message",{required: true})} />
//             </div>
//             <input type="submit"/>
//         </form>
//
//     )
// }