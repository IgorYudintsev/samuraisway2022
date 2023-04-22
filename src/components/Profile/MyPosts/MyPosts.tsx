import React from 'react';
import styled from "styled-components";
import {PostType} from "../../../redux/store";
import {Post} from "./Post/Post";
import {CommonForm} from "../../common/CommonForm";


type PostsType = {
    posts: PostType[]
    newPostText: string
    //onPostChange: (newText: string) => void
    addPost: (message: string) => void
}


export class MyPosts extends React.PureComponent<PostsType> {
    shouldComponentUpdate(nextProps: Readonly<PostsType>, nextState: Readonly<{}>): boolean {
        return nextProps!==this.props || nextState!==this.state
    }

    render() {
        const posts = this.props.posts.map(post => {
            return (
                <Post message={post.message} likesCount={post.likesCount}/>
            )
        })


        const onSubmitHandler = (message: string) => {
            this.props.addPost(message)
        }


        return (
            <MyPostsWrapper>
                <div>MyPosts</div>

                <CommonForm onSubmitHandler={onSubmitHandler} textArea={true}/>

                {posts}
            </MyPostsWrapper>
        );
    }
}

const MyPostsWrapper = styled.div`
  margin-left: 20px;
`

//--------------------------------------------------------------------------------

// import React from 'react';
// import styled from "styled-components";
// import {PostType} from "../../../redux/store";
// import {Post} from "./Post/Post";
// import {CommonForm} from "../../common/CommonForm";
//
//
// type PostsType = {
//     posts: PostType[]
//     newPostText: string
//     //onPostChange: (newText: string) => void
//     addPost: (message:string) => void
// }
//
//
// export const MyPosts = (props: PostsType) => {
//     const posts = props.posts.map(post => {
//         return (
//             <Post message={post.message} likesCount={post.likesCount}/>
//         )
//     })
//
//
//     const onSubmitHandler = (message: string) => {
//         props.addPost(message)
//     }
//
//
//
//     return (
//         <MyPostsWrapper>
//             <div>MyPosts</div>
//
//             <CommonForm onSubmitHandler={onSubmitHandler} textArea={true}/>
//
//             {posts}
//         </MyPostsWrapper>
//     );
// };
//
// const MyPostsWrapper = styled.div`
//   margin-left: 20px;
// `



