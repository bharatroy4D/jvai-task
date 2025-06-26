import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import Sidebar from '../../Pages/Dashboaard/SideBar/SideBar';

const Dashboard = () => {
    return (
        <div className=''>
            {/* dashboard side bar */}
            <div className='secondary'>
                <Link to={'dashboard/toper'}>
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
            <div className='flex '>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;