import React from 'react';
import { MdClose } from 'react-icons/md';

const FullMessage = ({toggleOpenMessage}) => {
    return (
        <div className='bg-black/10 w-full p-12 fixed top-0 left-0 right-0 z-50 min-h-screen'>
            <div className='bg-white w-1/2 mx-auto rounded-xl p-10 relative'>
                <div className='flex items-center space-x-3'>
                    <div>
                        <img src="https://i.ibb.co/9gk7p8p/avatar.png" alt="" className='w-16 h-16 rounded-full' />
                    </div>
                    <div>
                        <h1 className='text-lg'>Name of messager</h1>
                        <p className='secondary-text'>email@gmail.com</p>
                    </div>
                </div>
                <div className='mt-16 space-y-4'>
                    <p>Dear Marblestone, </p>
                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima repellat, id placeat eius laboriosam maxime ipsam aliquid illo quod soluta at repudiandae ratione aperiam ipsum hic, ab nemo! Et numquam animi dolorem ea voluptas incidunt sequi magnam non, saepe cum consectetur, at consequuntur itaque. Voluptate facere adipisci atque dicta minus tempora iste veritatis sequi, cupiditate totam omnis at nulla laudantium velit eum blanditiis repellat earum corrupti suscipit? Architecto quasi reiciendis hic cum deserunt facere magni cupiditate esse est nesciunt officiis perspiciatis veritatis repellendus illo iure accusantium provident doloremque quae autem error, dolores et quod molestiae voluptatem. Quod adipisci dolorem nesciunt!</p>
                    <p>Sincerly,</p>
                    <p>Name of messager</p>

                    <p>017225465455</p>
                </div>
                <button onClick={toggleOpenMessage} className='absolute top-5 right-5'>
                    <MdClose />
                </button>
            </div>
        </div>
    );
};

export default FullMessage;