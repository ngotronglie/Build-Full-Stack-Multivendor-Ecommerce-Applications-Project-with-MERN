import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers, FaUserTimes } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdGitPullRequest } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
    },
    {
        id: 2,
        title: 'Orders',
        path: '/admin/dashboard/orders',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
    },
    {
        id: 3,
        title: 'Category',
        path: '/admin/dashboard/category',
        icon: <BiCategory />,
        role: 'admin',
    },
    {
        id: 4,
        title: 'Sellers',
        path: '/admin/dashboard/sellers',
        icon: <FaUsers />,
        role: 'admin',
    },
    {
        id: 5,
        title: 'Payment Request',
        path: '/admin/dashboard/payment-request',
        icon: <MdPayment />,
        role: 'admin',
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        path: '/admin/dashboard/deactive-sellers',
        icon: <FaUserTimes />,
        role: 'admin',
    },
    {
        id: 7,
        title: 'Sellers Request',
        path: '/admin/dashboard/sellers-request',
        icon: <IoMdGitPullRequest />,
        role: 'admin',
    },
    {
        id: 8,
        title: 'Live Chat',
        path: '/admin/dashboard/live-chat',
        icon: <IoChatbubblesSharp />,
        role: 'admin',
    },
    {
        id: 9,
        title: 'Dashboard',
        path: '/seller/dashboard',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id:10,
        title: 'Add Product',
        path: '/seller/dashboard/add-product',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id: 11,
        title: 'All Product',
        path: '/seller/dashboard/all-product',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id: 12,
        title: 'Discount Product',
        path: '/seller/dashboard/discount-product',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id: 13,
        title: 'Orders',
        path: '/seller/dashboard/orders',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id: 14,
        title: 'Payments',
        path: '/seller/dashboard/payments',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id: 15,
        title: 'Chat-Customer',
        path: '/seller/dashboard/chat-customer',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    },
    {
        id: 16,
        title: 'Chat-Support',
        path: '/seller/dashboard/chat-support',
        icon: <AiOutlineDashboard />,
        role: 'seller',
    }
];
