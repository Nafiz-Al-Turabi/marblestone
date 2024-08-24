import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaPlus, FaTag } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { IoPencil } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropertiesCard from '../../Cards/PropertiesCard';
import AgentBlog from '../Agent\'sBlog/AgentBlog';

const AgentProperties = ({ name }) => {
    return (
        <div className='mt-56 lg:mx-6'>
            <div className=' bg-black px-2 py-20 md:px-24 lg:p-40  lg:rounded-3xl xl:relative mb-44 '>
                <button className='bg-[#202127] flex items-center text-white pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                    <FaHouse className='bg-[#464851] p-1  text-3xl text-white rounded-full mr-2 border-none' />
                    All properties
                </button>
                <div className='md:flex justify-between mb-10 mx-2 text-white'>
                    <h1 className='text-3xl lg:text-5xl font-medium mb-4'>Properties in charge of {name}</h1>
                    <Link to='/blogs' className='flex items-center '>Browse al articles
                        <IoIosArrowForward className='ml-2' />
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  mx-auto gap-5 px-2 xl:px-0'>
                    <PropertiesCard />
                    <PropertiesCard />
                </div>
            </div>
            <AgentBlog name={name} />

        </div>
    );
};

export default AgentProperties;