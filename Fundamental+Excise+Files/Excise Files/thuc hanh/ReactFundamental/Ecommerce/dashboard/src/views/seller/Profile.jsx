import React from 'react';
import { FaImages, FaRegEdit } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
const Profile = () => {

    const image = true
    const loader = true
    const status = 'active'
    const userInfo = true
    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-6/12">
                    <div className="w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]">
                        <div className="flex justify-center items-center py-3">
                            {image ? (
                                <label htmlFor="img" className='h-[150px] w-[200px] relative  p-3 cursor-pointer overflow-hidden'>
                                    <img src="http://localhost:3000/images/admin.jpg" alt="" />
                                    {!loader && (
                                        <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                                            <span>
                                                <FadeLoader />
                                            </span>
                                        </div>
                                    )}
                                </label>
                            ) : (
                                <label
                                    className="flex justify-center items-center flex-col h-[150px] w-[200px] 
                                                cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative"
                                    htmlFor="img"
                                >
                                    <span>
                                        <FaImages />
                                    </span>
                                    <span>Select Image</span>
                                    {loader && (
                                        <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                                            <span>
                                                <FadeLoader />
                                            </span>
                                        </div>
                                    )}
                                </label>
                            )}
                            <input type="text" className='hidden' id='img' />
                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative'>
                                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer'>
                                    <FaRegEdit />
                                </span>
                                <div className='flex gap-2'>
                                    <span>Name :</span>
                                    <span>Ariyan Khan</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email :</span>
                                    <span>ngotrongliem2004@gmail.com</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role :</span>
                                    <span>Seller</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>payment acount :</span>
                                    <p>
                                        {
                                            status === 'active' ? (
                                                <span className='bg-green-500 text-white text-sx cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Active</span>
                                            ) : (
                                                <span className='bg-red-500 text-white text-sx cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Deactive</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='px-0 md:px-5 py-2'>
                            {
                                !userInfo ?
                                    <form>
                                        <div className='flex flex-col w-full gap-1 mb-2'>
                                            <label htmlFor="shop">shop Name</label>
                                            <input
                                                className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                                type="text"
                                                name="shopName"
                                                id="shop"
                                                placeholder="shop Name"
                                            />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-2'>
                                            <label htmlFor="division">Division Name</label>
                                            <input
                                                className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                                type="text"
                                                name="division"
                                                id="division"
                                                placeholder="division Name"
                                            />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-2'>
                                            <label htmlFor="district"> district Name</label>
                                            <input
                                                className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                                type="text"
                                                name="district"
                                                id="district"
                                                placeholder="district Name"
                                            />
                                        </div>
                                        <div className='flex flex-col w-full gap-1 mb-2'>
                                            <label htmlFor="subdis">Sub district Name</label>
                                            <input
                                                className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                                type="text"
                                                name="subdis"
                                                id="subdis"
                                                placeholder="sub district Name"
                                            />
                                        </div>
                                        <button className='bg-red-500 hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>
                                            Save Changes
                                        </button>

                                    </form>
                                    :
                                    <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative'>
                                        <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer'>
                                            <FaRegEdit />
                                        </span>
                                        <div className='flex gap-2'>
                                            <span>shop name :</span>
                                            <span>easy shop</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>divission :</span>
                                            <span>divission name</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>district :</span>
                                            <span>sdfgsdfgsdf</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>sub district :</span>
                                            <span>sdfgsdfgsdf</span>
                                        </div>

                                    </div>

                            }

                        </div>


                    </div>
                </div>
                <div className="w-full md:w-6/12">
                    <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0 '>
                        <div className='bg-[#6a5fdf] rounded-md text-[#d0d2d6] p-4'>
                            <h1 className='text-[#d0d2d6] text-lg font-semibold mb-3 '>Change password</h1>
                            <form>
                                <div className='flex flex-col w-full gap-1 mb-2'>
                                    <label htmlFor="email">email</label>
                                    <input
                                        className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="email"
                                    />
                                </div>
                                <div className='flex flex-col w-full gap-1 mb-2'>
                                    <label htmlFor="o_password">old password</label>
                                    <input
                                        className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                        type="password"
                                        name="old_password"
                                        id="o_password"
                                        placeholder="old password"
                                    />
                                </div>
                                <div className='flex flex-col w-full gap-1 mb-2'>
                                    <label htmlFor="n_password">new password</label>
                                    <input
                                        className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                                        type="password"
                                        name="new_password"
                                        id="n_password"
                                        placeholder="new password"
                                    />
                                </div>


                                <button className='bg-red-500 hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>
                                    Save Changes
                                </button>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Profile;