import React, {useState} from 'react';
import styled, {css} from "styled-components";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (elPageNumber: number) => void
    currentPage: number
    portionSize:number   //пердаем размер порции
}


export const Paginator = (props: PropsType) => {
    const{totalUsersCount,pageSize,onPageChanged,currentPage,portionSize}=props
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize) //portionSize-получаем из пропс
    //узнаем сколько порций у нас получится
    let [portionNumber, setPortionNumber] = useState(1)
    //здесь хранится номер порции
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    //левая граница порции
    let rightPortionPageNumber = portionNumber * portionSize;
    //правая граница порции

    return (
        <div>
            <div>
                {portionNumber > 1 && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>prev</button>}
                {/*левая кнопка prev, которая появляется, когда есть куда возвращаться*/}
                {pages
                    .filter(f => f >= leftPortionPageNumber && f <= rightPortionPageNumber)
                    //раньше заливали все номера, чейчас делим на порции
                    .map(p =>
                        <PageSpanpaginator key={p}  boldNumber={currentPage ===p}  onClick={(event) => {onPageChanged(p)}}>
                            {p}
                        </PageSpanpaginator>

                    // <span className={
                    // currentPage === p ? styles.selectedPage : styles.pages}
                    // onClick={(event) => {onPageChanged(p)}}>{p}</span>

                    )}
                {portionCount > portionNumber &&
                    <button onClick={() => {setPortionNumber(portionNumber + 1)
                    }}>next</button>}
                {/*правая кнопка next, которая исчезает, когда есть куда идти вперед*/}
            </div>
        </div>
    )
}


// <div>
//     {pages.map(el => {
//         return (
//             <PageSpanpaginator key={el} onClick={() =>onPageChanged(el)}
//                                boldNumber={currentPage === el}>
//                 {el}
//             </PageSpanpaginator>
//         )
//     })}
// </div>




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





