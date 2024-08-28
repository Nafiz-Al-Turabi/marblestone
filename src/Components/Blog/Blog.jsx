
import { IoPencil } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogCard from "../../Cards/BlogCard";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogdata.json')
            .then(res => res.json())
            .then(result => {
                setBlogs(result)
                console.log(result)
            })
    }, []);

    return (
        <div className='2xl:w-[1200px] mx-auto my-24 lg:my-[160px] px-2'>
            <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                <IoPencil className='bg-white p-1  text-3xl text-slate-400 rounded-full mr-2 border-none' />
                Blog
            </button>
            <div className='md:flex justify-between mb-10 mx-2'>
                <h1 className='text-3xl lg:text-5xl font-medium'>Read Our Latest blog</h1>
                <Link to='/blogs' className='flex items-center '>Browse al articles
                    <IoIosArrowForward className='ml-2' />
                </Link>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 mx-2'>
                {
                    blogs.slice(0,6).map(blog =>
                        <BlogCard blog={blog} key={blog.id} />
                    )
                }
            </div>
        </div>
    );
};

export default Blog;