import React from 'react';
import styled, {css} from "styled-components";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (elPageNumber: number) => void
    currentPage: number
}


export const Paginator = (props: PropsType) => {
    const{totalUsersCount,pageSize,onPageChanged,currentPage}=props
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
            <div>
            {pages.map(el => {
                return (
                    <PageSpanpaginator key={el} onClick={() =>onPageChanged(el)}
                                       boldNumber={currentPage === el}>
                        {el}
                    </PageSpanpaginator>
                )
            })}
        </div>
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





