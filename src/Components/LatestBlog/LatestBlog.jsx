import React, { useEffect, useState } from 'react';
import { FaNewspaper, FaBook } from 'react-icons/fa';
import { MdOutlineSettings } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BlogCard from '../../Cards/BlogCard';
import axiosInstance from '../../Axios/AxiosInstance';

const LatestBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedTab, setSelectedTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // useEffect(() => {
    //     fetch('/blogdata.json')
    //         .then(res => res.json())
    //         .then(result => {
    //             setBlogs(result);
    //             console.log(result);
    //         });
    // }, []);


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

    // filter 
    const filterBlogs = () => {
        console.log("Selected Tab:", selectedTab); // Debugging line
        if (selectedTab === 'All') return blogs;
        return blogs.filter(blog => blog.blogtype === selectedTab);
    };
    // Pagination
    const paginatedBlogs = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filterBlogs().slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(filterBlogs().length / itemsPerPage);

    // Scroll Top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="p-4 mt-40">
            <div>
                <div className="lg:flex justify-between items-center mb-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-left">
                        Latest Post
                    </h1>
                    <div className="flex flex-wrap md:flex space-x-4 md:bg-white p-2 md:p-3 rounded-full">
                        {['All', 'Resources', 'News', 'Articles'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full ${selectedTab === tab ? 'bg-black text-white' : 'text-gray-700'}`}
                            >
                                {tab === 'All' && <MdOutlineSettings className="text-lg" />}
                                {tab === 'Resources' && <MdOutlineSettings className="text-lg" />}
                                {tab === 'News' && <FaNewspaper className="text-lg" />}
                                {tab === 'Articles' && <FaBook className="text-lg" />}
                                <span>{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        paginatedBlogs().map(blog =>
                            <BlogCard blog={blog} key={blog._id} />
                        )
                    }
                </div>
                <div className="flex items-center justify-between space-x-2 mt-10">
                    <button
                        onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex w-12 h-12 items-center justify-center p-2 border border-gray-300 rounded-full text-white bg-black disabled:bg-white disabled:text-black"
                    >
                        <FaChevronLeft />
                    </button>

                    <span className="text-gray-700 font-semibold">
                        {currentPage} / {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="flex w-12 h-12 items-center justify-center p-2 border border-gray-300 rounded-full text-white bg-black"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
