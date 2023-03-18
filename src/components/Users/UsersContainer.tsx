import React from 'react';

import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    unFollow,
    unFollowThunkCreator,
    UsersType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {reducersType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

type PropsType = {
    usersPage: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
     isFetching: boolean
    followingInProgresValue: number[]
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void
    followThunkCreator: (userID: number) => void
    unFollowThunkCreator: (userID: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
           this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (elPageNumber: number) => {
        this.props.setCurrentPage(elPageNumber)
        this.props.getUsersThunkCreator(this.props.pageSize, elPageNumber)
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
                    usersPage={this.props.usersPage}
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
        setCurrentPage,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    }
)(UsersContainer)



