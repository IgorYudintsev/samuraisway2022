import React from 'react';

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {reducersType} from "../../redux/redux-store";
import {Users} from "./Users";
import axios from "axios";
import styled from "styled-components";
import {Preloader} from "../common/Preloader";

type PropsType = {
    usersPage: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    toggleIsFetching: (onOff: boolean) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((responce) => {

                    this.props.setUsers(responce.data.items)
                    this.props.setTotalUsersCount(responce.data.totalCount)
                    this.props.toggleIsFetching(false)
                }
            )
    }

    onPageChanged = (elPageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(elPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`)
            .then((responce) => {
                    this.props.setUsers(responce.data.items)
                    this.props.toggleIsFetching(false)
                }
            )
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
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    usersPage={this.props.usersPage}
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
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         followHandler: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollowHandler: (userId: number) => {
//             dispatch(UnfollowAC(userId))
//         },
//         setUsersHandler: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPageHandler: (currentPage: number) => {
//             console.log(currentPage)
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCountHandler: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (onOff: boolean) => {
//             dispatch(toggleIsFetchingAC(onOff))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }
)(UsersContainer)

const Spanfetching = styled.div`
  position: absolute;
  left: 45%;
  bottom: 40%;
`

//------------------------------------------------------------------------------------------

// import React from 'react';
//
// import {
//     followAC,
//     setCurrentPageAC,
//     setTotalUsersCountAC,
//     setUsersAC, toggleIsFetchingAC,
//     UnfollowAC,
//     UsersType
// } from "../../redux/users-reducer";
// import {connect} from "react-redux";
// import {reducersType} from "../../redux/redux-store";
// import {Dispatch} from "redux";
// import {Users} from "./Users";
// import axios from "axios";
// import styled from "styled-components";
// import loadingGif from './../../assets/images/loadingGif.gif'
// import {Preloader} from "../common/Preloader";
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
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
//             .then((responce) => {
//
//                     this.props.setUsers(responce.data.items)
//                     this.props.setTotalUsersCount(responce.data.totalCount)
//                     this.props.toggleIsFetching(false)
//                 }
//             )
//     }
//
//     onPageChanged = (elPageNumber: number) => {
//         this.props.toggleIsFetching(true)
//         this.props.setCurrentPage(elPageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`)
//             .then((responce) => {
//                     this.props.setUsers(responce.data.items)
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
//
//
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
// // const mapDispatchToProps = (dispatch: Dispatch) => {
// //     return {
// //         followHandler: (userId: number) => {
// //             dispatch(followAC(userId))
// //         },
// //         unFollowHandler: (userId: number) => {
// //             dispatch(UnfollowAC(userId))
// //         },
// //         setUsersHandler: (users: UsersType[]) => {
// //             dispatch(setUsersAC(users))
// //         },
// //         setCurrentPageHandler: (currentPage: number) => {
// //             console.log(currentPage)
// //             dispatch(setCurrentPageAC(currentPage))
// //         },
// //         setTotalUsersCountHandler: (totalUsersCount: number) => {
// //             dispatch(setTotalUsersCountAC(totalUsersCount))
// //         },
// //         toggleIsFetching: (onOff: boolean) => {
// //             dispatch(toggleIsFetchingAC(onOff))
// //         }
// //     }
// // }
//
// export default connect(mapStateToProps,
//     {
//         follow: followAC,
//         unFollow: UnfollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalUsersCount: setTotalUsersCountAC,
//         toggleIsFetching: toggleIsFetchingAC
//     }
// )(UsersContainer)
//
// const Spanfetching = styled.div`
//   position: absolute;
//   left: 45%;
//   bottom: 40%;
// `


//-----------------------------------------------------------------------------------------

// import React from 'react';
//
// import {
//     followAC,
//     setCurrentPageAC,
//     setTotalUsersCountAC,
//     setUsersAC, toggleIsFetchingAC,
//     UnfollowAC,
//     UsersType
// } from "../../redux/users-reducer";
// import {connect} from "react-redux";
// import {reducersType} from "../../redux/redux-store";
// import {Dispatch} from "redux";
// import {Users} from "./Users";
// import axios from "axios";
// import styled from "styled-components";
// import loadingGif from './../../assets/images/loadingGif.gif'
// import {Preloader} from "../common/Preloader";
//
// type PropsType = {
//     usersPage: UsersType[]
//     pageSize: number,
//     totalUsersCount: number
//     currentPage: number
//     followHandler: (userId: number) => void
//     unFollowHandler: (userId: number) => void
//     setUsersHandler: (users: UsersType[]) => void
//     setCurrentPageHandler: (currentPage: number) => void
//     setTotalUsersCountHandler: (totalUsersCount: number) => void
//     isFetching: boolean
//     toggleIsFetching: (onOff: boolean) => void
// }
//
// class UsersContainer extends React.Component<PropsType> {
//     componentDidMount() {
//         this.props.toggleIsFetching(true)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
//             .then((responce) => {
//
//                     this.props.setUsersHandler(responce.data.items)
//                     this.props.setTotalUsersCountHandler(responce.data.totalCount)
//                     this.props.toggleIsFetching(false)
//                 }
//             )
//     }
//
//     onPageChanged = (elPageNumber: number) => {
//         this.props.toggleIsFetching(true)
//         this.props.setCurrentPageHandler(elPageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`)
//             .then((responce) => {
//                     this.props.setUsersHandler(responce.data.items)
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
//                     unFollowHandler={this.props.unFollowHandler}
//                     followHandler={this.props.followHandler}
//                     usersPage={this.props.usersPage}
//                 />
//             </>
//
//
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
// // const mapDispatchToProps = (dispatch: Dispatch) => {
// //     return {
// //         followHandler: (userId: number) => {
// //             dispatch(followAC(userId))
// //         },
// //         unFollowHandler: (userId: number) => {
// //             dispatch(UnfollowAC(userId))
// //         },
// //         setUsersHandler: (users: UsersType[]) => {
// //             dispatch(setUsersAC(users))
// //         },
// //         setCurrentPageHandler: (currentPage: number) => {
// //             console.log(currentPage)
// //             dispatch(setCurrentPageAC(currentPage))
// //         },
// //         setTotalUsersCountHandler: (totalUsersCount: number) => {
// //             dispatch(setTotalUsersCountAC(totalUsersCount))
// //         },
// //         toggleIsFetching: (onOff: boolean) => {
// //             dispatch(toggleIsFetchingAC(onOff))
// //         }
// //     }
// // }
//
// export default connect(mapStateToProps,
//     {
//         followHandler: followAC,
//         unFollowHandler: UnfollowAC,
//         setUsersHandler: setUsersAC,
//         setCurrentPageHandler: setCurrentPageAC,
//         setTotalUsersCountHandler: setTotalUsersCountAC,
//         toggleIsFetching: toggleIsFetchingAC
//     }
// )(UsersContainer)
//
// const Spanfetching = styled.div`
//   position: absolute;
//   left: 45%;
//   bottom: 40%;
// `


//-----------------------------------------------------------------------------------------


// import React from 'react';
//
// import {
//     followAC,
//     setCurrentPageAC,
//     setTotalUsersCountAC,
//     setUsersAC, toggleIsFetchingAC,
//     UnfollowAC,
//     UsersType
// } from "../../redux/users-reducer";
// import {connect} from "react-redux";
// import {reducersType} from "../../redux/redux-store";
// import {Dispatch} from "redux";
// import {Users} from "./Users";
// import axios from "axios";
// import styled from "styled-components";
// import loadingGif from './../../assets/images/loadingGif.gif'
// import {Preloader} from "../common/Preloader";
//
// type PropsType = {
//     usersPage: UsersType[]
//     pageSize: number,
//     totalUsersCount: number
//     currentPage: number
//     followHandler: (userId: number) => void
//     unFollowHandler: (userId: number) => void
//     setUsersHandler: (users: UsersType[]) => void
//     setCurrentPageHandler: (currentPage: number) => void
//     setTotalUsersCountHandler: (totalUsersCount: number) => void
//     isFetching: boolean
//     toggleIsFetching: (onOff: boolean) => void
// }
//
// class UsersContainer extends React.Component<PropsType> {
//     componentDidMount() {
//         this.props.toggleIsFetching(true)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
//             .then((responce) => {
//
//                     this.props.setUsersHandler(responce.data.items)
//                     this.props.setTotalUsersCountHandler(responce.data.totalCount)
//                     this.props.toggleIsFetching(false)
//                 }
//             )
//     }
//
//     onPageChanged = (elPageNumber: number) => {
//         this.props.toggleIsFetching(true)
//         this.props.setCurrentPageHandler(elPageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${elPageNumber}`)
//             .then((responce) => {
//                     this.props.setUsersHandler(responce.data.items)
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
//                     unFollowHandler={this.props.unFollowHandler}
//                     followHandler={this.props.followHandler}
//                     usersPage={this.props.usersPage}
//                 />
//             </>
//
//
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
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         followHandler: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollowHandler: (userId: number) => {
//             dispatch(UnfollowAC(userId))
//         },
//         setUsersHandler: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPageHandler: (currentPage: number) => {
//             console.log(currentPage)
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCountHandler: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (onOff: boolean) => {
//             dispatch(toggleIsFetchingAC(onOff))
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
//
// const Spanfetching = styled.div`
//   position: absolute;
//   left: 45%;
//   bottom: 40%;
// `
