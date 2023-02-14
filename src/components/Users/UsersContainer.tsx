import React from 'react';
import {Users} from "./Users";
import {followAC, setUsersAC, UnfollowAC, UsersType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {reducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps=(state:reducersType)=>{
    return{
        usersPage:state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followHandler: (userId:number) => {
            dispatch(followAC(userId))
        },
        unFollowHandler: (userId:number) => {
            dispatch(UnfollowAC(userId))
        },
        setUsersHandler: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer