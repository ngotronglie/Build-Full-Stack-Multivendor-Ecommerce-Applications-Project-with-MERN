import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaList } from 'react-icons/fa';

const ChatSellers = () => {

    const [show, setShow] = useState(false);
    let sellerId = 65


    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full bg-[#6a5fdf] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
                <div className="flex w-full h-full relative">
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]  ' : '-left-[336px]'} md:left-0 md:relative transition-all`}>
                        <div className="w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto">
                            <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                                <h2>Sellers</h2>
                                <span onClick={() => setShow(!show)} className='blog cursor-pointer md:hidden'>< IoMdCloseCircle /></span>
                            </div>

                            <div className="h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer bg-[#8288ed]">
                                <div className="relative">
                                    <img
                                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                                        src="http://localhost:3000/images/admin.jpg"
                                        alt="Admin Avatar"
                                    />
                                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                                </div>
                                <div className="flex justify-center items-start flex-col w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <h2 className="text-base font-semibold">NGO TRONG LIEM</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer">
                                <div className="relative">
                                    <img
                                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                                        src="http://localhost:3000/images/admin.jpg"
                                        alt="Admin Avatar"
                                    />
                                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                                </div>
                                <div className="flex justify-center items-start flex-col w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <h2 className="text-base font-semibold">HELLO KITY</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer">
                                <div className="relative">
                                    <img
                                        className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                                        src="http://localhost:3000/images/admin.jpg"
                                        alt="Admin Avatar"
                                    />
                                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                                </div>
                                <div className="flex justify-center items-start flex-col w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <h2 className="text-base font-semibold">Anonimous</h2>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
                        <div className="flex justify-between items-center">
                            {sellerId && (
                                <div className="flex justify-start items-center gap-3">
                                    <div className="relative">
                                        <img
                                            className="w-[45px]] h-[45px]] max-w-[38px] border-2 border-green-500 p-[2px] rounded-full"
                                            src="http://localhost:3000/images/admin.jpg"
                                            alt="Seller Avatar"
                                        />
                                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 border border-white"></div>
                                    </div>

                                </div>
                            )}
                            <div onClick={() => setShow(!show)} className="w-[35px] h-[35px] flex md:hidden rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center items-center cursor-pointer text-white">
                                <span>
                                    <FaList />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ChatSellers