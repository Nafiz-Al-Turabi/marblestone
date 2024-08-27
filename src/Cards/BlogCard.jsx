import React from 'react';
import { AiFillSetting, AiFillSound } from 'react-icons/ai';
import { BsCalendar3, BsNewspaper } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { image, title, date, id, blogtype } = blog;

    const renderBlogTypeIcon = () => {
        switch (blogtype) {
            case 'Resources':
                return <AiFillSetting className='mr-3 text-xl' />;
            case 'Articles':
                return <BsNewspaper className='mr-3 text-xl' />;
            case 'News':
                return <AiFillSound className='mr-3 text-xl' />;
            default:
                return null;
        }
    };

    return (
        <div className='relative'>
            <div className='h-96 overflow-hidden relative rounded-3xl'>
                <img src={image} alt="blog image" className='object-cover w-full h-full' />
            </div>
            <h1 className='text-2xl my-6 font-medium'>{title}</h1>
            <div className='flex justify-between'>
                <p className='flex justify-center text-gray-500'>
                    <BsCalendar3 className='mr-2 text-xl' />
                    {date}
                </p>
                <Link to={`/blogDetails/${id}`} className='flex items-center '>Read more
                    <IoIosArrowForward className='ml-2' />
                </Link>
            </div>
            <button className='flex items-center absolute top-5 left-5 bg-white px-3 py-1.5 rounded-full font-semibold'>
                {renderBlogTypeIcon()}
                {blogtype}
            </button>
        </div>
    );
};

export default BlogCard;
