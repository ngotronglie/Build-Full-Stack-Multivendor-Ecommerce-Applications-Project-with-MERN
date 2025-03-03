import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './Sidebar';


{/* 
        - Outlet là một component đặc biệt của react-router-dom.
        - Nó hoạt động như một placeholder để hiển thị component con (child routes).
        - Khi người dùng truy cập vào route con, component tương ứng sẽ được render tại vị trí Outlet.
*/}

const MainLayout = () => {
    return (
        <div className='bg-[#cdcae9] w-full min-h-screen'>
            <Header />
            <SideBar />
            <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
