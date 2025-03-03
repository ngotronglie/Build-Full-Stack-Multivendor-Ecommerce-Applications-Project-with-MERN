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
    }
];
