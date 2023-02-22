import React from 'react';
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UnfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {reducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps=(state:reducersType)=>{
    return{
        usersPage:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        setCurrentPageHandler:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCountHandler:(totalUsersCount: number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer