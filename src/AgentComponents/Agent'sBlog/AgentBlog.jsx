import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoPencil } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BlogCard from '../../Cards/BlogCard';
import axiosInstance from '../../Axios/AxiosInstance';

const AgentBlog = ({ name }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/blogs');
            if (response) {
                setBlogs(response.data)
            }
        } catch (error) {
            console.log('blog fetch failed in blogs page:', error)
        }
    }
    return (
        <div>
            <div className='max-w-[1200px] mx-auto mb-44'>
                <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                    <IoPencil className='bg-white p-1  text-3xl text-slate-400 rounded-full mr-2 border-none' />
                    Blog
                </button>
                <div className='md:flex justify-between mb-10 mx-2'>
                    <h1 className='text-3xl lg:text-5xl font-medium'>Articles by {name}</h1>
                    <Link to='/blogs' className='flex items-center '>Browse al articles
                        <IoIosArrowForward className='ml-2' />
                    </Link>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 mx-2'>
                    {
                        blogs.map(blog =>

                            <BlogCard blog={blog} key={blog._id} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AgentBlog;