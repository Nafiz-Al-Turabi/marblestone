import React, { useEffect, useState } from 'react';
import { BsCalendar3, BsNewspaper } from "react-icons/bs";
import { PiArticleMediumFill } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBriefcase, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaCirclePlus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { AiFillSetting, AiFillSound } from 'react-icons/ai';
import NavbarBlack from '../../Shared/Navbar/NavbarBlack';




const BlogDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch('/blogdata.json')
            .then(res => res.json())
            .then(result => {
                const data = result.find(detail => detail.id == id)
                if (data) {
                    setDetails(data)
                    console.log(data)
                }
            })
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { title, image, description, date, agent_name, agent_email, blogtype } = details;

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
        <div className='xl:p-6'>
            <NavbarBlack />
            <div className='py-40'>
                <div className='xl:max-w-[1440px] mx-auto'>
                    <div className='flex items-center gap-5 px-2'>
                        <p className='flex items-center justify-center text-white bg-gray-400 w-24 rounded-full p-1 '>
                            {renderBlogTypeIcon()}
                            {blogtype}
                        </p>
                        <p className='flex items-center text-gray-500 '>
                            <BsCalendar3 className='mr-2 text-base' />
                            {date}
                        </p>
                    </div>
                    <div className='lg:flex flex-row-reverse gap-5 xl:gap-10 mt-5'>
                        <div className='relative shadow m-2 lg:m-2 xl:m-0 p-4 md:rounded-3xl  xl:w-[446px]'>
                            <div className='flex items-center'>
                                <div>
                                    <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" className='w-16' />
                                </div>
                                <div>
                                    <h1 className='text-xl font-medium'>{agent_name}</h1>
                                    <p className='secondary-text'>{agent_email}</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaXTwitter /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedinIn /></a>
                            </div>
                            <button className='text-3xl absolute top-5 right-5'>
                                <FaCirclePlus />
                            </button>
                        </div>
                        <div>
                            <h1 className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-medium my-2 px-2'>{title}</h1>
                            <p className='secondary-text px-2 text-justify mb-10'>{description}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='xl:max-w-[1440px] mx-auto xl:h-[490px] overflow-hidden relative '>
                        <img src={image} alt=""
                            className='object-cover w-full h-full xl:rounded-3xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;