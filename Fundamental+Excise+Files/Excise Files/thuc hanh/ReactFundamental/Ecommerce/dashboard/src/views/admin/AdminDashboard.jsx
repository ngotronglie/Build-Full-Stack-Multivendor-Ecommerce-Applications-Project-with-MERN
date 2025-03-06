import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Chart from "react-apexcharts";


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
            }
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
            </div>

        </div >
    )
}

export default AdminDashboard;