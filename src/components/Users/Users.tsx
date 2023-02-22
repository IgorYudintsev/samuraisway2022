import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styled, {css} from "styled-components";
import axios from "axios";
import {avatar} from "../../assets/images/avatar";
import {log} from "util";


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


export class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((responce) => {
                    this.props.setUsersHandler(responce.data.items)
                    this.props.setTotalUsersCountHandler(responce.data.totalCount)
                }
            )
    }

    onPageChanged(elPageNumber: number) {
        this.props.setCurrentPageHandler(elPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`)
            .then((responce) =>
                this.props.setUsersHandler(responce.data.items)
            )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <Wrapper>
                <div>
                    {pages.map(el => {
                        return (
                            <PageSpanpaginator key={el} onClick={() => this.onPageChanged(el)}
                                               boldNumber={this.props.currentPage === el}>
                                {el}
                            </PageSpanpaginator>
                        )
                    })}
                </div>
                {this.props.usersPage.map(el => {
                    return (
                        <WrapperSide key={el.id}>
                            <LeftSide>
                                <img src={el.photos.small !== null ? el.photos.small : avatar} alt="ava"/>
                                <div>
                                    {el.followed
                                        ? <button onClick={() => this.props.unFollowHandler(el.id)}>Follow</button>
                                        : <button onClick={() => this.props.followHandler(el.id)}>UnFollow</button>
                                    }
                                </div>

                            </LeftSide>
                            <RightSide>
                                <DivForMargin>
                                    <div>{el.id}</div>
                                    <div>{el.name}</div>
                                    <div>{el.status}</div>
                                    {/*<div>{el.location.city}</div>*/}
                                    {/*<div>{el.location.counry}</div>*/}
                                </DivForMargin>
                            </RightSide>

                        </WrapperSide>

                    )
                })}
            </Wrapper>
        );
    }
}

type boldNumberType = {
    boldNumber: boolean
}

const PageSpanpaginator = styled.span<boldNumberType>`
  cursor: pointer;
  ${props => props.boldNumber && css`
    font-weight: bold;
    font-size: 20px;
  `
  }
`

const Wrapper = styled.div`
  max-width: 400px;
  //background-color: chartreuse;
`

const WrapperSide = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //height: 100px;
  //background-color: #ecb4c6;
  margin-bottom: 10px;
`

const LeftSide = styled.div`
  //background-color: #f5f50a;
  min-width: 5%;
  margin-bottom: 10px;
  text-align: center;

  & > img {
    width: 50px;
  }
`

const RightSide = styled.div`
  //background-color: #1e3786;
  width: 95%;
  margin-bottom: 10px;
`

const DivForMargin = styled.div`
  //background-color: #1e3786;
  margin-left: 15px;
`
