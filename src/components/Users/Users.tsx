import React from 'react';
import styled, {css} from "styled-components";
import {avatar} from "../../assets/images/avatar";
import {UsersType} from "../../redux/users-reducer";

type PropsType={
    totalUsersCount:number
    pageSize: number
    onPageChanged:(elPageNumber: number)=>void
    currentPage:number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    usersPage:UsersType[]
}


export const Users = (props:PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <Wrapper>
            <div>
                {pages.map(el => {
                    return (
                        <PageSpanpaginator key={el} onClick={() => props.onPageChanged(el)}
                                           boldNumber={props.currentPage === el}>
                            {el}
                        </PageSpanpaginator>
                    )
                })}
            </div>
            {props.usersPage.map(el => {
                return (
                    <WrapperSide key={el.id}>
                        <LeftSide>
                            <img src={el.photos.small !== null ? el.photos.small : avatar} alt="ava"/>
                            <div>
                                {el.followed
                                    ? <button onClick={() => props.unFollow(el.id)}>Follow</button>
                                    : <button onClick={() => props.follow(el.id)}>UnFollow</button>
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
};


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
//===========================================================================
// import React from 'react';
// import styled, {css} from "styled-components";
// import {avatar} from "../../assets/images/avatar";
// import {UsersType} from "../../redux/users-reducer";
//
// type PropsType={
//     totalUsersCount:number
//     pageSize:number
//     onPageChanged:(elPageNumber: number)=>void
//     currentPage:number
//     usersPage: UsersType[]
//     followHandler:(userId: number) => void
//     unFollowHandler:(userId: number) => void
// }
//
//
// export const Users = (props:PropsType) => {
//
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
//                 return (
//                     <WrapperSide key={el.id}>
//                         <LeftSide>
//                             <img src={el.photos.small !== null ? el.photos.small : avatar} alt="ava"/>
//                             <div>
//                                 {el.followed
//                                     ? <button onClick={() => props.unFollowHandler(el.id)}>Follow</button>
//                                     : <button onClick={() => props.followHandler(el.id)}>UnFollow</button>
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
//
//         // <Wrapper>
//         //     <div>
//         //         {pages.map(el => {
//         //             return (
//         //                 <PageSpanpaginator key={el} onClick={() => props.onPageChanged(el)}
//         //                                    boldNumber={props.currentPage === el}>
//         //                     {el}
//         //                 </PageSpanpaginator>
//         //             )
//         //         })}
//         //     </div>
//         //     {props.usersPage.map(el => {
//         //         return (
//         //             <WrapperSide key={el.id}>
//         //                 <LeftSide>
//         //                     <img src={el.photos.small !== null ? el.photos.small : avatar} alt="ava"/>
//         //                     <div>
//         //                         {el.followed
//         //                             ? <button onClick={() => props.unFollowHandler(el.id)}>Follow</button>
//         //                             : <button onClick={() => props.followHandler(el.id)}>UnFollow</button>
//         //                         }
//         //                     </div>
//         //
//         //                 </LeftSide>
//         //                 <RightSide>
//         //                     <DivForMargin>
//         //                         <div>{el.id}</div>
//         //                         <div>{el.name}</div>
//         //                         <div>{el.status}</div>
//         //                         {/*<div>{el.location.city}</div>*/}
//         //                         {/*<div>{el.location.counry}</div>*/}
//         //                     </DivForMargin>
//         //                 </RightSide>
//         //
//         //             </WrapperSide>
//         //
//         //         )
//         //     })}
//         // </Wrapper>
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
//   & > img {
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