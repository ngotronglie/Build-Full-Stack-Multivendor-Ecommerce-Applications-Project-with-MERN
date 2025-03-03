import React from 'react';
import { Outlet } from 'react-router-dom';


{/* 
        - Outlet là một component đặc biệt của react-router-dom.
        - Nó hoạt động như một placeholder để hiển thị component con (child routes).
        - Khi người dùng truy cập vào route con, component tương ứng sẽ được render tại vị trí Outlet.
*/}

const MainLayout = () => {
    return (
        <div>
            <h1> main layout page <Outlet /></h1>
        </div>
    )
}

export default MainLayout
