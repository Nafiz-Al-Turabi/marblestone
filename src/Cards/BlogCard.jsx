import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { image, title, date, id } = blog;
    return (
        <div>
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
        </div>
    );
};

export default BlogCard;