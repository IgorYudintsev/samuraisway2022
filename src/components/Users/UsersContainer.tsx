import React from 'react';

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
import {Users} from "./Users";
import axios from "axios";


type PropsType = {
    usersPage: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
    setUsersHandler: (users: UsersType[]) => void
    setCurrentPageHandler: (currentPage: number) => void
    setTotalUsersCountHandler: (totalUsersCount: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((responce) => {
                    this.props.setUsersHandler(responce.data.items)
                    this.props.setTotalUsersCountHandler(responce.data.totalCount)
                }
            )
    }

    onPageChanged = (elPageNumber: number) => {
        this.props.setCurrentPageHandler(elPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`)
            .then((responce) =>
                this.props.setUsersHandler(responce.data.items)
            )
    }


    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                unFollowHandler={this.props.unFollowHandler}
                followHandler={this.props.followHandler}
                usersPage={this.props.usersPage}
            />

        );
    }
}

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
            console.log(currentPage)
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCountHandler:(totalUsersCount: number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)