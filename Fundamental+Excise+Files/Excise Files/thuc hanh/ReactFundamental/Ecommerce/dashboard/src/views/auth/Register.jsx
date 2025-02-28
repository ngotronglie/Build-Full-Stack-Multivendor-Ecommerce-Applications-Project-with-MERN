import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>Welome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium'>please register your account</p>
                    <form action="">
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="name">Name:</label>
                            <input className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                                type="text" placeholder='Enter your name' name='name' id='name' required />
                        </div>

                        {/*  */}

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email:</label>
                            <input className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                                type="email" placeholder='Enter your email' name='email' id='email' required />
                        </div>

                        {/*  */}

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password:</label>
                            <input className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                                type="password" placeholder='Enter your password' name='password' id='password' required />
                        </div>
                        {/*  */}

                        <div className='flex items-center  w-full gap-1 mb-3'>
                            <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded forcus:ring-blue-500'
                                name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">I agree to privacy policy & treams</label>
                        </div>
                        {/*  */}

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <button className=' bg-slate-800 py-2 rounded-md hover:bg-slate-600  hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Register</button>
                        </div>


                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <p>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;