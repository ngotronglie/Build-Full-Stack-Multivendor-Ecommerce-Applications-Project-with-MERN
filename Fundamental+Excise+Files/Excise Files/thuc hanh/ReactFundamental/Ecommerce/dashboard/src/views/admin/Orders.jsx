import React, { useState } from "react";
import { BsBoxArrowInDown } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Pagination from "../Pagination";
const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center">
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>

                    <input type="text" placeholder="search..." className="px-4 py-2 forcus:border-indigo-500 outline-none bg-[#283046]  border border-slate-700 rounded-md text-[#d0d2d6]" />
                </div>

                <div className="relative mt-5 overflow-x-auto">
                    <div className="w-full text-sm text-left text-gray-500 ">
                        <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                            <div className="flex justify-between items-center">
                                <div className="py-3 w-[25%] font-bold">Order id</div>
                                <div className="py-3 w-[13%] font-bold">price</div>
                                <div className="py-3 w-[18%] font-bold">payment status</div>
                                <div className="py-3 w-[18%] font-bold">Order status</div>
                                <div className="py-3 w-[18%] font-bold">Action</div>
                                <div className="py-3 w-[8%] font-bold"><BsBoxArrowInDown /></div>
                            </div>
                        </div>
                        {/* ****************************** td **************************************** */}
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#11111</div>
                                <div className="py-3 w-[13%] font-medium">$5456</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">view</div>
                                <div onClick={(e) => setShow(!show)} className="py-3 w-[8%] font-medium cursor-pointer"><MdKeyboardDoubleArrowDown /></div>
                            </div>
                            {/* ---------------------------------show --------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                            {/* --------------------------------end show 1--------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                        </div>
                        {/* ****************************** end td ************************************* */}
                        {/* ****************************** td **************************************** */}
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#11111</div>
                                <div className="py-3 w-[13%] font-medium">$5456</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">view</div>
                                <div onClick={(e) => setShow(!show)} className="py-3 w-[8%] font-medium cursor-pointer"><MdKeyboardDoubleArrowDown /></div>
                            </div>
                            {/* ---------------------------------show --------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                            {/* --------------------------------end show 1--------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                        </div>
                        {/* ****************************** end td ************************************* */}
                        {/* ****************************** td **************************************** */}
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#11111</div>
                                <div className="py-3 w-[13%] font-medium">$5456</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">view</div>
                                <div onClick={(e) => setShow(!show)} className="py-3 w-[8%] font-medium cursor-pointer"><MdKeyboardDoubleArrowDown /></div>
                            </div>
                            {/* ---------------------------------show --------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                            {/* --------------------------------end show 1--------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                        </div>
                        {/* ****************************** end td ************************************* */}
                        {/* ****************************** td **************************************** */}
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#11111</div>
                                <div className="py-3 w-[13%] font-medium">$5456</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">view</div>
                                <div onClick={(e) => setShow(!show)} className="py-3 w-[8%] font-medium cursor-pointer"><MdKeyboardDoubleArrowDown /></div>
                            </div>
                            {/* ---------------------------------show --------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                            {/* --------------------------------end show 1--------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                        </div>
                        {/* ****************************** end td ************************************* */}
                        {/* ****************************** td **************************************** */}
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium whitespace-nowrap">#11111</div>
                                <div className="py-3 w-[13%] font-medium">$5456</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">pending</div>
                                <div className="py-3 w-[18%] font-medium">view</div>
                                <div onClick={(e) => setShow(!show)} className="py-3 w-[8%] font-medium cursor-pointer"><MdKeyboardDoubleArrowDown /></div>
                            </div>
                            {/* ---------------------------------show --------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                            {/* --------------------------------end show 1--------------------------- */}
                            <div className={show ? 'block border-b border-slate-700 bg-[##8282b3]' : 'hidden'}>
                                <div className="flex justify-start items-start border-b border-slate-700 bg-[#808EEC] text-[#d0d2d6]">
                                    <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">#11111</div>
                                    <div className="py-3 w-[13%] font-medium">$5456</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                    <div className="py-3 w-[18%] font-medium">pending</div>
                                </div>
                            </div>
                        </div>
                        {/* ****************************** end td ************************************* */}


                    </div>
                </div>

                <Pagination
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem={50}
                    parPage={parPage}
                    showItems={3}
                />

            </div>
        </div>
    )

};

export default Orders;