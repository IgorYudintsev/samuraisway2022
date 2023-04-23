import React from 'react';
import styled from "styled-components";
import {avatar} from "../../assets/images/avatar";
import {NavLink} from "react-router-dom";

type PropsType = {

    followingInProgresValue: number[]

    id: number
    name: string
    status: string
    photoSmall: string
    followed: boolean
    followHandler: (userID: number) => void
    UNfollowHandler: (userID: number) => void
}


export const User = (props: PropsType) => {
    const {id,name,status, photoSmall, followed, followingInProgresValue,
        followHandler, UNfollowHandler} = props

    return (
        <Wrapper>
            return (
            <WrapperSide key={id}>
                <LeftSide>
                    {/*<NavLink to={`/profile/${el.id}`}>*/}
                    <NavLink to={`/profile/${id}`}>
                        <img src={photoSmall !== null ? photoSmall : avatar} alt="ava"/>
                    </NavLink>

                    <div>
                        {followed
                            ? <button disabled={followingInProgresValue.some(sId => sId === id)}
                                      onClick={() => UNfollowHandler(id)}>Follow</button>
                            : <button disabled={props.followingInProgresValue.some(id => id === id)}
                                      onClick={() => followHandler(id)}>UnFollow</button>
                        }
                    </div>

                </LeftSide>
                <RightSide>
                    <DivForMargin>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{status}</div>
                        {/*<div>{el.location.city}</div>*/}
                        {/*<div>{el.location.counry}</div>*/}
                    </DivForMargin>
                </RightSide>
            </WrapperSide>
            )
            {/*})}*/}
        </Wrapper>
    );
};



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

  & > a > img {
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

//-------------------------------------------------------------------------------------------------

// import React from 'react';
// import styled, {css} from "styled-components";
// import {avatar} from "../../assets/images/avatar";
// import {followThunkCreator, UsersType} from "../../redux/users-reducer";
// import {NavLink} from "react-router-dom";
// import axios from "axios";
// import {usersApi} from "../../api/api";
//
// type PropsType = {
//     totalUsersCount: number
//     pageSize: number
//     onPageChanged: (elPageNumber: number) => void
//     currentPage: number
//     //follow: (userId: number) => void
//     //unFollow: (userId: number) => void
//     usersPage: UsersType[]
//     //followingInProgres: (onOff: boolean, userID: number) => void
//     followingInProgresValue: number[]
//     followThunkCreator: (userID: number) => void
//     unFollowThunkCreator: (userID: number) => void
// }
//
//
// export const Users = (props: PropsType) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     const followHandler = (userID: number) => {
//         props.followThunkCreator(userID)
//     }
//
//     const UNfollowHandler = (userID: number) => {
//         props.unFollowThunkCreator(userID)
//     }
//
//
//     return (
//         <Wrapper>
//             <div>
//                 {pages.map(el => {
//                     return (
//                         <PageSpanpaginator key={el} onClick={() => props.onPageChanged(el)}
//                                            boldNumber={props.currentPage === el}>
//                             {el}
//                         </PageSpanpaginator>
//                     )
//                 })}
//             </div>
//             {props.usersPage.map(el => {
//                 localStorage.setItem('elId', JSON.stringify(el.id))
//                 return (
//                     <WrapperSide key={el.id}>
//                         <LeftSide>
//                             {/*<NavLink to={`/profile/${el.id}`}>*/}
//                             <NavLink to={`/profile/${el.id}`}>
//                                 <img src={el.photos.small !== null ? el.photos.small : avatar} alt="ava"/>
//                             </NavLink>
//
//                             <div>
//                                 {el.followed
//                                     ? <button disabled={props.followingInProgresValue.some(id => id === el.id)}
//                                               onClick={() => UNfollowHandler(el.id)}>Follow</button>
//                                     : <button disabled={props.followingInProgresValue.some(id => id === el.id)}
//                                               onClick={() => followHandler(el.id)}>UnFollow</button>
//                                 }
//                             </div>
//
//                         </LeftSide>
//                         <RightSide>
//                             <DivForMargin>
//                                 <div>{el.id}</div>
//                                 <div>{el.name}</div>
//                                 <div>{el.status}</div>
//                                 {/*<div>{el.location.city}</div>*/}
//                                 {/*<div>{el.location.counry}</div>*/}
//                             </DivForMargin>
//                         </RightSide>
//
//                     </WrapperSide>
//
//                 )
//             })}
//         </Wrapper>
//     );
// };
//
//
// type boldNumberType = {
//     boldNumber: boolean
// }
//
// const PageSpanpaginator = styled.span<boldNumberType>`
//   cursor: pointer;
//   ${props => props.boldNumber && css`
//     font-weight: bold;
//     font-size: 20px;
//   `
// }
// `
//
// const Wrapper = styled.div`
//   max-width: 400px;
//   //background-color: chartreuse;
// `
//
// const WrapperSide = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   //height: 100px;
//   //background-color: #ecb4c6;
//   margin-bottom: 10px;
// `
//
// const LeftSide = styled.div`
//   //background-color: #f5f50a;
//   min-width: 5%;
//   margin-bottom: 10px;
//   text-align: center;
//
//   & > a > img {
//     width: 50px;
//   }
// `
//
// const RightSide = styled.div`
//   //background-color: #1e3786;
//   width: 95%;
//   margin-bottom: 10px;
// `
//
// const DivForMargin = styled.div`
//   //background-color: #1e3786;
//   margin-left: 15px;
// `

//-------------------------------------------------------------------------------------------------
