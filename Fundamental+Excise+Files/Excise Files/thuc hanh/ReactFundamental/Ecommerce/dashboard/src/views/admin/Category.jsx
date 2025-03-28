import React, { useState } from "react";
import { BsBoxArrowInDown } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Category = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>

            <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
                <h1 className="text-lg font-semibold">Category</h1>
                <button onClick={() => setShow(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer text-sm">
                    Add
                </button>
            </div>




            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                        <div className="flex justify-between items-center">
                            <select onChange={(e) => setParPage(parseInt(e.target.value))} className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>

                            <input type="text" placeholder="search..." className="px-4 py-2 forcus:border-indigo-500 outline-none bg-[#283046]  border border-slate-700 rounded-md text-[#d0d2d6]" />
                        </div>
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-[#d0d2d6] text-left '>
                                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700 '>
                                    <tr>
                                        <th scope='col' className='py-3 px-4'>No</th>
                                        <th scope='col' className='py-3 px-4'>Image</th>
                                        <th scope='col' className='py-3 px-4'>Name</th>
                                        <th scope='col' className='py-3 px-4'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) =>
                                            <tr>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>#34343</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                                    <img
                                                        className="w-[45px] h-[45px]"
                                                        src={`http://localhost:3000/images/category/${d}.jpg`}
                                                        alt="Category Image"
                                                    />
                                                </td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>pending</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                                    <div className="flex justify-start items-center gap-4">
                                                        <Link
                                                            className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                                                        >
                                                            <FaEdit />
                                                        </Link>

                                                        <Link
                                                            className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                                                        >
                                                            <FaTrash />
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                        )
                                    }
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

                <div
                    className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed 
                                ${show ? 'right-0' : '-right-[340px]'} 
                                    z-[9999] top-0 transition-all duration-500`}
                >
                    <div className="w-full pl-5">
                        <div className="bg-[#6a5fdf] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">
                                    Add Category
                                </h1>
                                <div onClick={() => setShow(false)} className="block lg:hidden cursor-pointer text-gray-600 hover:text-gray-800 transition">
                                    <IoMdCloseCircle size={24} />
                                </div>
                            </div>


                            <form>
                                <div className="flex flex-col w-full gap-1 mb-3">
                                    <label htmlFor="name">Category Name</label>
                                    <input
                                        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#ffffff] 
                                                    border border-slate-700 rounded-md text-[#000000]"
                                        type="text"
                                        id="name"
                                        name="category_name"
                                        placeholder="Category Name"
                                    />
                                </div>

                                <div>
                                    <label
                                        className="flex justify-center items-center flex-col h-[238px] cursor-pointer 
                                                    border border-dashed hover:border-red-500 w-full border-[#d0d2d6]"
                                        htmlFor="image"
                                    >
                                        <span><FaImage /></span>
                                        <span>Select Image</span>
                                        <input className="hidden" type="file" name="image" id="image" />
                                    </label>
                                </div>
                                <div>
                                    <button className="bg-red-500 w-full hover:shadow-red-500 hover:shadow-md text-white py-2 rounded-md px-7 my-2 ">
                                        Add Category
                                    </button>

                                </div>




                            </form>


                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Category