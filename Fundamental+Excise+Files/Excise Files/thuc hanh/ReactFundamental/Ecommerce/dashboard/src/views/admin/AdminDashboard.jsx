import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';


const AdminDashboard = () => {

    const state = {
        series: [
            {
                name: 'Orders',
                data: [50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 98, 43]
            },
            {
                name: 'revenue',
                data: [51, 90, 120, 180, 270, 380, 210, 230, 190, 191, 67, 50]
            },
            {
                name: 'sellers',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 65, 50]
            }
        ],

        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30,
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6',
            },
            dataLabels: {
                enabled: false,
            },
            strock: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            legend: {
                position: 'top',
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        }
                        ,
                        chart: {
                            height: "550px"
                        }
                    }

                }
            ]
        }
    }


    return (
        <div div className='px-2 md:px-7 py-5' >
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {/* ------------------------------------------------- */}
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3lx font-bold'>$ 1000</h2>
                        <span className='text-md font-medium'>Total sale</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                {/* ------------------------------------------------- */}
                <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3lx font-bold'>50</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#750077] flex justify-center items-center text-xl'>
                        <MdProductionQuantityLimits className='text-[#fde2ff] shadow-lg' />
                    </div>
                </div>
                {/* ------------------------------------------------- */}
                <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3lx font-bold'>60</h2>
                        <span className='text-md font-medium'>Sellers</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
                        <FaUsers className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                {/* ------------------------------------------------- */}
                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3lx font-bold'>3030</h2>
                        <span className='text-md font-medium'>orders</span>
                    </div>

                    <div className='w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
                        <FaCartArrowDown className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type="bar" height={350} />
                    </div>
                </div>
                {/* ------------------------------------------------ */}
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-between items-center pb-3'>
                            <h2 className='font-semibold text-lg text-[#d0d2d6]'>Recent Seller Message</h2>
                            <Link className='text-sm text-[#d0d2d6] font-semibold' to='/404'>View all</Link>
                        </div>

                        <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6] '>
                            <ol className='relative border-1 border-slate-600 ml-4'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] z-10 rounded-full'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-purple-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0' datetime="">2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800 '>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] z-10 rounded-full'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-purple-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0' datetime="">2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800 '>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] z-10 rounded-full'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-purple-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0' datetime="">2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800 '>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6'>
                <div className='flex justify-between items-center '>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                    <Link className='font-semibold text-sm text-[#d0d2d6]'>View all</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-[#d0d2d6] text-left '>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700 '>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment status</th>
                                <th scope='col' className='py-3 px-4'>Order status</th>
                                <th scope='col' className='py-3 px-4'>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) =>
                                    <tr>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#34343</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#34343</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>pending</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>pending</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><Link to={'/'}>View</Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}

export default AdminDashboard;