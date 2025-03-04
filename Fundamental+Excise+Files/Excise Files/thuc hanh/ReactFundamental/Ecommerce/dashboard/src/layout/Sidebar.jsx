import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from './../navigation/index';
import { BiLogOut } from "react-icons/bi";

const SideBar = ({ showSidebar, setShowSidebar }) => {
    const { pathname } = useLocation();

    const [allNav, setAllNav] = useState([]);

    useEffect(() => {
        const navs = getNav('admin');
        setAllNav(navs);
    }, []);

    return (
        <div>
            <div
                onClick={() => setShowSidebar(false)}
                className={`fixed inset-0 z-10 transition-opacity duration-200 
                ${showSidebar ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible'}`}
            ></div>

            <div
                className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-md transition-all 
                ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}
                onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click vào sidebar
            >
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className='px-[16px]'>
                    <ul>
                        {allNav.map((n, i) => (
                            <li key={i}>
                                <Link
                                    to={n.path}
                                    className={`${pathname === n.path
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-[#030811] font-bold'}
                                        px-[12px] py-[9px] rounded-sm flex items-center gap-[12px] 
                                        hover:pl-4 transition-all w-full mb-1`}
                                >
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button
                                className="text-[#030811] font-bold px-[12px] py-[9px] rounded-sm flex items-center gap-[12px] 
                                hover:pl-4 transition-all w-full mb-1"
                            >
                                <span><BiLogOut /></span> <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
