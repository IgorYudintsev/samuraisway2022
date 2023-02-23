import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styled, {css} from "styled-components";
import axios from "axios";
import {Users} from "./Users";


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

class UsersAPIComponent extends React.Component<PropsType> {
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

export default UsersAPIComponent



