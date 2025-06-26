import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const Dashboard = () => {
    return (
        <div className=''>
            {/* dashboard side bar */}
            <div className='secondary'>
                <Link>
                    <div className='flex items-center gap-4 p-4'>
                        <div className=' rounded-full  p-1.5 bg-white'>
                            <FiUser className='text-4xl text-gray-700' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Guest</h1>
                            <p className=' font-semibold '>Welcome to back</p>
                        </div>
                    </div>

                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;