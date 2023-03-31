import React from 'react';
import {addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";


const mapStateToProps = (state:StateType) => {
       return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}


const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: (message:string) => {
          dispatch(addPostAC(message))
        },
         }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
