import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
    const [state, setState] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium'>Please register your account</p>
                    <form onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="name">Name:</label>
                            <input onChange={inputHandle} value={state.name}
                                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                                type="text" placeholder='Enter your name' name='name' id='name' required />
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email:</label>
                            <input onChange={inputHandle} value={state.email}
                                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                                type="email" placeholder='Enter your email' name='email' id='email' required />
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password:</label>
                            <input onChange={inputHandle} value={state.password}
                                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                                type="password" placeholder='Enter your password' name='password' id='password' required />
                        </div>

                        <div className='flex items-center w-full gap-1 mb-3'>
                            <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                                name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">I agree to privacy policy & terms</label>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <button className='bg-slate-800 py-2 rounded-md hover:bg-slate-600 hover:shadow-blue-300 hover:shadow-lg text-white px-7'>Register</button>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <p>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                        </div>

                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>

                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 cursor-pointer items-center justify-center'>
                                <FaGoogle />
                            </div>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 cursor-pointer items-center justify-center'>
                                <FaFacebook />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
