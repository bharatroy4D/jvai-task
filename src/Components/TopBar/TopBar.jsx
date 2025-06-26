import React from 'react';
import { FiUser } from 'react-icons/fi';

const TopBar = () => {
    return (
        <div>
            <FiUser />
            <div>
                <h1 className='text-2xl font-bold'>Guest</h1>
                <p className='text-base font-semibold pt-3'>Welcome to Back</p>
            </div>

        </div>
    );
};

export default TopBar;