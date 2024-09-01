import React from 'react';
import { MdClose } from 'react-icons/md';

const FullMessage = ({ toggleOpenMessage, message }) => {
    const { email, phone, message: messageContent, firstName, lastName } = message;
    
    return (
        <div className='bg-black/10 w-full p-12 fixed top-0 left-0 right-0 z-50 min-h-screen'>
            <div className='bg-white xl:w-1/2 mx-auto rounded-xl p-10 relative'>
                <div className='flex items-center space-x-3'>
                    <div>
                        <img src="https://i.ibb.co/9gk7p8p/avatar.png" alt="" className='w-16 h-16 rounded-full' />
                    </div>
                    <div>
                        <h1 className='text-lg'>{firstName + lastName}</h1>
                        <p className='secondary-text'>{email}</p>
                    </div>
                </div>
                <div className='mt-16 space-y-4'>
                    <p>Dear Marblestone,</p>
                    <p className='text-justify'>{messageContent}</p>
                    <p>Sincerely,</p>
                    <p>{firstName}</p>
                    <p>Phone: {phone}</p>
                </div>
                <button onClick={toggleOpenMessage} className='absolute top-5 right-5'>
                    <MdClose />
                </button>
            </div>
        </div>
    );
};

export default FullMessage;
