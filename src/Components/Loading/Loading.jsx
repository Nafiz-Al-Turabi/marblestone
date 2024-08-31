import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div className='bg-white flex justify-center items-center min-h-screen'>
            <div className="">
                <img src="https://i.ibb.co/p44CCbf/loading.gif" alt="" className='w-96' />
            </div>
        </div>
    );
};

export default Loading;