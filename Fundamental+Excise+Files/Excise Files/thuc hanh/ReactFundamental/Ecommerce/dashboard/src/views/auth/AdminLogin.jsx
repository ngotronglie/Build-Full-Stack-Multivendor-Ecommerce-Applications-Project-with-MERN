import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';

import { useSelector } from 'react-redux';



const AdminLogin = () => {
    const dispatch = useDispatch();
    const { loader } = useSelector((state) => state.auth);

    const [state, setState] = React.useState({
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
        dispatch(admin_login(state));
        // console.log(state);
    };

    const overrideStyle = {
        display: "flex",
        margin: "0 auto",
        height: '24px',
        justifyContent: 'center',
        alignItem: 'center',
    }



    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="" />
                        </div>
                    </div>
                    <form onSubmit={submit}>



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


                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <button disabled={loader ? true : false} className=' bg-slate-800 py-2 rounded-md hover:bg-slate-600  hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                                {
                                    loader ? <PropagateLoader cssOverride={overrideStyle} color='#fff' /> : 'Login'
                                }
                            </button>
                        </div>


                        {/* <div className='flex flex-col w-full gap-1 mb-3'>
                            <p>Already have an account? <Link className='text-blue-600' to={'/register'}>register</Link></p>
                        </div> */}

                        {/* <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[135px] h-[35px] flex rounded-md justify-center bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span>
                                    <FaGoogle />
                                </span>
                            </div>
                            <div className='w-[135px] h-[35px] flex rounded-md justify-center bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span>
                                    <FaFacebook />
                                </span>
                            </div>
                        </div> */}

                    </form>
                </div>
            </div >
        </div >
    );
}

export default AdminLogin;