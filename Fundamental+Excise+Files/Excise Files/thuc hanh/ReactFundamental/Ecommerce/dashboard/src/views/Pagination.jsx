import React from 'react'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const Pagination = ({ pageNumber, setPageNumber, totalItem, parPage, showItems }) => {
    console.log("totalItem:", totalItem, "parPage:", parPage, "showItems:", showItems);

    let totalPage = Math.ceil(totalItem / parPage);
    let startPage = pageNumber;
    let dif = totalPage - pageNumber
    if (dif <= showItems) {
        startPage = totalPage - showItems;
    }
    let endPage = startPage < 0 ? showItems : startPage + showItems;
    if (startPage <= 0) {
        startPage = 1;
    }
    const createBtn = () => {
        const btns = [];
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li 
                onClick={() => setPageNumber(i)}
                    key={i} // Thêm key để tránh lỗi React
                    className={`w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer
                    ${pageNumber === i
                            ? 'bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white'
                            : 'bg-slate-400 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]'
                        }`
                    }
                >
                    {i}
                </li>
            );
        }
        return btns;
    };

    return (
        <ul className='flex gap-3'>

            {
                pageNumber > 1 && <li className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000]'><MdKeyboardDoubleArrowLeft /></li>
            }{
                createBtn()
            }

        </ul>
    )
}

export default Pagination