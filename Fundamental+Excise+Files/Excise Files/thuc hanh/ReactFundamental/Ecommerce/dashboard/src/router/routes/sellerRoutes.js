import {lazy} from 'react';



const Home = lazy(()=>import('./../../views/Home') )
const SellerDashboard = lazy(()=>import('./../../views/seller/SellerDashboard') )
const AddProduct = lazy(()=>import('./../../views/seller/AddProduct') )
const EditProduct = lazy(()=>import('./../../views/seller/EditProduct') )
const Products = lazy(()=>import('./../../views/seller/Products') )
const DiscountProducts = lazy(()=>import('./../../views/seller/DiscountProducts') )
const Orders = lazy(()=>import('./../../views/seller/Orders') )
const Payments = lazy(()=>import('./../../views/seller/Payments') )
const SellerToCustomer = lazy(()=>import('./../../views/seller/SellerToCustomer') )
const SellerToAdmin = lazy(()=>import('./../../views/seller/SellerToAdmin') )
const Profile = lazy(()=>import('./../../views/seller/Profile') )
const OrderDetails = lazy(()=>import('./../../views/seller/OrderDetails') )



export const sellerRoutes = [
    {
        path : '/',
        element: <Home/>,
        ability: ['admin', 'seller']
    },
    {
        path : '/seller/dashboard',
        element: <SellerDashboard/>,
        role: 'seller',
        status: 'active'
    }
    ,{
        path : '/seller/dashboard/edit-product/:productId',
        element: <EditProduct/>,
        role: 'seller',
        status: 'active'
    }
    ,{
        path : '/seller/dashboard/add-product',
        element: <AddProduct/>,
        role: 'seller',
        status: 'active'
    },{
        path : '/seller/dashboard/all-product',
        element: <Products/>,
        role: 'seller',
        status: 'active'
    }
    ,{
        path : '/seller/dashboard/discount-product',
        element: <DiscountProducts/>,
        role: 'seller',
        status: 'active'
    },
    {
        path : '/seller/dashboard/orders',
        element: <Orders/>,
        role: 'seller',
        ability: ['active', 'deactive']
    },
    {
        path : '/seller/dashboard/orders/details/:orderId',
        element: <OrderDetails/>,
        role: 'seller',
        ability: ['active', 'deactive']
    },
    {
        path : '/seller/dashboard/payments',
        element: <Payments/>,
        role: 'seller',
        status: 'active'
    },
    {
        path : '/seller/dashboard/chat-support',
        element: <SellerToAdmin/>,
        ability: ['active', 'deactive','pending']
    }
    ,
    {
        path : '/seller/dashboard/chat-customer/:customerId',
        element: <SellerToCustomer/>,
        role: 'seller',
        status: 'active'
    },
    {
        path : '/seller/dashboard/chat-customer',
        element: <SellerToCustomer/>,
        role: 'seller',
        status: 'active'
    },
    {
        path : '/seller/dashboard/profile',
        element: <Profile/>,
        role: 'seller',
        status: 'active'
    }
]