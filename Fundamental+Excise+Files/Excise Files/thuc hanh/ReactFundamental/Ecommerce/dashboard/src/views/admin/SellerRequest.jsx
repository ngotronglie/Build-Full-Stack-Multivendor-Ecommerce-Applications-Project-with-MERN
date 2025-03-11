import React, { useState } from "react";
import Pagination from './../Pagination';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const SellerRequest = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);



    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3">
                Seller request
            </h1>
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center">

                    {/* Select box để chọn số lượng item */}
                    <select
                        onChange={(e) => setParPage(parseInt(e.target.value))}
                        className="px-4 py-2 border border-slate-700 rounded-md bg-[#6a5fdf] text-[#d0d2d6] focus:border-indigo-500 outline-none"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>

                    {/* Ô input search */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 border border-slate-700 rounded-md bg-[#6a5fdf] text-[#d0d2d6] focus:border-indigo-500 outline-none"
                    />

                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-[#d0d2d6] text-left '>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700 '>
                            <tr>
                                {[
                                    "No",
                                    "Name",
                                    "Email",
                                    "Payment status",
                                    "status",
                                    "Action",
                                ].map((header) => (
                                    <th key={header} scope="col" className="py-3 px-4">
                                        {header}
                                    </th>
                                ))}
                            </tr>

                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr key={i} className="border-b border-slate-700">
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">{i + 1}</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">Product {i + 1}</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">user{i + 1}@email.com</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap text-yellow-500">Inactive</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">Pending</td>
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                                        <div className="flex justify-start items-center gap-4">
                                            <Link
                                                className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                                            >
                                                <FaEye />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
                <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItems={3}
                    />
                </div>
            </div>
        </div>

    )
}

export default SellerRequest;