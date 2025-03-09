import {lazy} from 'react';
import Category from '../../views/admin/Category';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard') )
const Orders = lazy(() => import('./../../views/admin/Orders') )

export const adminRoutes = [
    {
        path : 'admin/dashboard',
        element: <AdminDashboard/>,
        role: 'admin'
    },
    {
        path : 'admin/dashboard/orders',
        element: <Orders/>,
        role: 'admin'
    },
    {
        path : 'admin/dashboard/category',
        element: <Category/>,
        role: 'admin'
    },
]