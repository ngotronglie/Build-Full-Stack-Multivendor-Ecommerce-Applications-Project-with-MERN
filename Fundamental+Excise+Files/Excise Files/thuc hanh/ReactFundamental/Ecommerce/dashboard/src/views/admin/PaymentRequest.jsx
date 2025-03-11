import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { forwardRef } from "react";

function handleOnWheel(event) {
    const { deltaY } = event;
    console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
));



const PaymentRequest = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const Row = ({ index, style }) => {
        return (
            <div style={style} className="flex text-sm font-medium text-[#d0d2d6]">
                <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
                <div className="w-[25%] p-2 whitespace-nowrap">$3434</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-sm">
                        Pending
                    </span>
                </div>
                <div className="w-[25%] p-2 whitespace-nowrap">25 dec 2025</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <button
                        className="
                                 bg-indigo-500 shadow-lg 
                                  hover:shadow-indigo-500/50 
                                     px-3 py-[2px] cursor-pointer 
                                     text-white rounded-sm text-sm
                                    "
                    >
                        Confirm
                    </button>

                </div>
            </div>
        );
    };

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <h2 className='text-xl font-medium pb-5 text-[#d0d2d6]'>
                    Withdrawal Request
                </h2>
                <div className='w-full'>
                    <div className='w-full overflow-x-auto'>
                        <div className='flex bg-[#a7a3de] uppercase text-xs min-w-[340px] font-bold rounded-md'>
                            <div className="w-1/5 p-2">No</div>
                            <div className="w-1/5 p-2">Amount</div>
                            <div className="w-1/5 p-2">Status</div>
                            <div className="w-1/5 p-2">Date</div>
                            <div className="w-1/5 p-2">Action</div>
                        </div>
                        {
                            <List
                                style={{ minWidth: '340px' }}
                                className="List"
                                height={350}
                                itemCount={1000}
                                itemSize={35}
                                outerElementType={outerElementType}
                            >
                                {Row}
                            </List>


                        }
                    </div>
                </div>

            </div>
        </div>

    )
}

export default PaymentRequest;