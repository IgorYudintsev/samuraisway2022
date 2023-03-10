import React from 'react';

import {
    follow, followingInProgres, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow, unFollowThunkCreator,
    UsersType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {reducersType} from "../../redux/redux-store";
import {Users} from "./Users";
import axios from "axios";
import styled from "styled-components";
import {Preloader} from "../common/Preloader";
import {usersApi} from "../../api/api";

type PropsType = {
    usersPage: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    //setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
   // setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    //toggleIsFetching: (onOff: boolean) => void
    //followingInProgres: (onOff: boolean, userID: number) => void
    followingInProgresValue: number[]
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void
    followThunkCreator:(userID:number)=>void
    unFollowThunkCreator:(userID:number)=>void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // usersApi.getUsers(this.props.pageSize, this.props.currentPage)
        //          .then((data) => {
        //             this.props.setUsers(data.items)
        //             this.props.setTotalUsersCount(data.totalCount)
        //             this.props.toggleIsFetching(false)
        //         }
        //     )

        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (elPageNumber: number) => {
        this.props.setCurrentPage(elPageNumber)
        this.props.getUsersThunkCreator(this.props.pageSize, elPageNumber)

        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(elPageNumber)
        // usersApi.getUsers(this.props.pageSize, elPageNumber)
        //        .then((data) => {
        //             this.props.setUsers(data.items)
        //             this.props.toggleIsFetching(false)
        //         }
        //     )
    }


    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    //unFollow={this.props.unFollow}
                   // follow={this.props.follow}
                    usersPage={this.props.usersPage}
                    //followingInProgres={this.props.followingInProgres}
                    followingInProgresValue={this.props.followingInProgresValue}
                    followThunkCreator={this.props.followThunkCreator}
                    unFollowThunkCreator={this.props.unFollowThunkCreator}
                />
            </>
        );
    }
}

const mapStateToProps = (state: reducersType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
       followingInProgresValue: state.usersPage.followingInProgres
            }
}

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        //setUsers,
        setCurrentPage,
        //setTotalUsersCount,
        //toggleIsFetching,
        //followingInProgres,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    }
)(UsersContainer)


//--------------------------------------------------------------------------------------------------

// import React from 'react';
//
// import {
//     follow,
//     setCurrentPage,
//     setTotalUsersCount,
//     setUsers,
//     toggleIsFetching,
//     unFollow,
//     UsersType
// } from "../../redux/users-reducer";
// import {connect} from "react-redux";
// import {reducersType} from "../../redux/redux-store";
// import {Users} from "./Users";
// import axios from "axios";
// import styled from "styled-components";
// import {Preloader} from "../common/Preloader";
// import { usersApi} from "../../api/api";
//
// type PropsType = {
//     usersPage: UsersType[]
//     pageSize: number,
//     totalUsersCount: number
//     currentPage: number
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (users: UsersType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     isFetching: boolean
//     toggleIsFetching: (onOff: boolean) => void
// }
//
// class UsersContainer extends React.Component<PropsType> {
//     componentDidMount() {
//         this.props.toggleIsFetching(true)
//         usersApi.getUsers(this.props.pageSize,this.props.currentPage)
//             // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
//             //     {withCredentials:true}
//             //     )
//
//             .then((data) => {
//                     debugger
//                     this.props.setUsers(data.items)
//                     this.props.setTotalUsersCount(data.totalCount)
//                     this.props.toggleIsFetching(false)
//                 }
//             )
//     }
//     onPageChanged = (elPageNumber: number) => {
//         this.props.toggleIsFetching(true)
//         this.props.setCurrentPage(elPageNumber)
//         usersApi.getUsers(this.props.pageSize,elPageNumber)
//             // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`,
//             //     {withCredentials:true}
//             //     )
//             .then((data) => {
//                     this.props.setUsers(data.items)
//                     this.props.toggleIsFetching(false)
//                 }
//             )
//     }
//
//
//     render() {
//         return (
//             <>
//                 {this.props.isFetching && <Preloader/>}
//                 <Users
//                     totalUsersCount={this.props.totalUsersCount}
//                     pageSize={this.props.pageSize}
//                     onPageChanged={this.onPageChanged}
//                     currentPage={this.props.currentPage}
//                     unFollow={this.props.unFollow}
//                     follow={this.props.follow}
//                     usersPage={this.props.usersPage}
//                 />
//             </>
//         );
//     }
// }
//
// const mapStateToProps = (state: reducersType) => {
//     return {
//         usersPage: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching
//     }
// }
//
// export default connect(mapStateToProps,
//     {
//         follow,
//         unFollow,
//         setUsers,
//         setCurrentPage,
//         setTotalUsersCount,
//         toggleIsFetching
//     }
// )(UsersContainer)


