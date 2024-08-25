import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

const AgentSignature = () => {
    return (
        <div className='xl:w-[1200px] mx-auto mt-40'>
            <div className='text-center'>
                <h1 className='text-3xl xl:text-5xl'>Behind marketing</h1>
                <p>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
            </div>
            <div className='bg-white md:flex justify-between items-center p-16 rounded-3xl mt-10'>
                <div className='md:w-[33.3%] space-y-3 '>
                    <div className='flex justify-center md:block md:justify-normal'>
                        <img src="https://i.ibb.co/P1x2P0S/agent3.png" alt="" className='w-24 rounded-full' />
                    </div>
                    <h1 className='text-2xl text-center md:text-left'>Nafiz Al turabi</h1>
                    <div className='mb-5 flex justify-center md:block md:justify-normal'>
                        <p className='flex items-center secondary-text text-base'>
                            <MdEmail className='text-xl mr-1.5' />
                            yourmail@gmail.com
                        </p>
                    </div>
                    <div className='mb-5 flex justify-center md:block md:justify-normal'>
                        <p className='flex items-center secondary-text text-base'>
                            <MdPhone className='text-xl mr-1.5' />
                            (012) 005698
                        </p>
                    </div>
                </div>
                <div className='md:w-[33.3%] my-16 flex justify-center md:block md:justify-normal'>
                    <hr className=' w-44 md:rotate-90' />
                </div>
                <div className='md:w-[33.3%] '>
                    <h1 className='text-2xl mb-4 text-center md:text-left'>Get in touch with the agent</h1>
                    <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem. Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
                </div>
            </div>
        </div>
    );
};

export default AgentSignature;