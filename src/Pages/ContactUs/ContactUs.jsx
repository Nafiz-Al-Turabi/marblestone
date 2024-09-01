import React from 'react';
import { FaArrowRight, FaPen, FaUser } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import './ContactUs.css'
import { IoLocation } from 'react-icons/io5';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ContactUs.css';
import Slider from 'react-slick';
import NavbarBlack from '../../Shared/Navbar/NavbarBlack';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../Axios/AxiosInstance';


const ContactUs = () => {
    const slides = [
        {
            location: "Chicago, IL",
            description: "Lorem ipsum dolor sit amet consectetur tellus eu enim ultrices imperdiet faucibus elementum.",
            phone: "01745968723",
            image: "https://i.ibb.co/fxYwfDJ/Rectangle-2-3.png"
        },
        {
            location: "New York, NY",
            description: "Lorem ipsum dolor sit amet consectetur, tellus eu enim ultrices imperdiet faucibus elementum.",
            phone: "01234567890",
            image: "https://i.ibb.co/fxYwfDJ/Rectangle-2-3.png"
        },
        {
            location: "San Francisco, CA",
            description: "Lorem ipsum dolor sit amet consectetur, tellus eu enim ultrices imperdiet faucibus elementum.",
            phone: "09876543210",
            image: "https://i.ibb.co/fxYwfDJ/Rectangle-2-3.png"
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    };

    const { register, handleSubmit, formState: { errors },reset} = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('/contacts',data);
            if(response){
                alert('Message sent!')
                reset()
            }
        } catch (error) {

        }
    };

    return (
        <div className='xl:p-6 '>
            <NavbarBlack />
            <div className='2xl:w-[1440px] mx-auto pt-20 lg:pt-40 lg:px-4 mb-20'>
                <div className='xl:flex justify-between xl:gap-24'>
                    <div className='lg:w-full 2xl:w-[640px] '>
                        <div className='mx-2 lg:flex justify-between xl:block'>
                            <div className='border-b lg:border-none xl:border-b'>
                                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-center lg:text-left'>Contact us</h1>
                                <p className='mt-4 mb-6  text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus.</p>
                                <div className='flex gap-5 mb-7 justify-center lg:justify-normal'>
                                    <div>
                                        <p className='flex items-center  text-gray-700'>
                                            <MdEmail className='text-xl mr-2' />
                                            Send us an email
                                        </p>
                                        <p className='ml-7 font-semibold'>nafiz@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center text-gray-700'>
                                            <MdPhone className='text-xl mr-2' />
                                            Phone number
                                        </p>
                                        <p className='ml-7 font-semibold'>+880 1745968723</p>
                                    </div>
                                </div>
                            </div>
                            <div className='xl:mt-12'>
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-center lg:text-left'>Need help?</h1>
                                <p className='mt-4 mb-6  text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus.</p>
                                <div className='flex gap-5 justify-center lg:justify-normal'>
                                    <div>
                                        <p className='flex items-center text-gray-700'>
                                            <MdEmail className='text-xl mr-2' />
                                            Sales executives
                                        </p>
                                        <p className='ml-7 font-semibold'>sales@casa.com</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center text-gray-700'>
                                            <MdPhone className='text-xl mr-2' />
                                            Help & support
                                        </p>
                                        <p className='ml-7 font-semibold'>support@casa.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-11 w-full rounded-3xl mt-12 lg:mt-0 '>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="relative">
                                <label htmlFor="first-name" className='block mb-2.5 font-semibold'>
                                    First name
                                </label>
                                <div className="flex items-center">
                                    <FaUser className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="first-name"
                                        type="text"
                                        placeholder='First name'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                        {...register('firstName', { required: 'First name is required' })}
                                    />
                                    {errors.firstName && <p className='text-red-500 text-xs'>{errors.firstName.message}</p>}
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="last-name" className='block mb-2.5 font-semibold'>
                                    Last name
                                </label>
                                <div className="flex items-center">
                                    <FaUser className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="last-name"
                                        type="text"
                                        placeholder='Last name'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                        {...register('lastName', { required: 'Last name is required' })}
                                    />
                                    {errors.lastName && <p className='text-red-500 text-xs'>{errors.lastName.message}</p>}
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className='block mb-2.5 font-semibold'>
                                    Email address
                                </label>
                                <div className="flex items-center">
                                    <MdEmail className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder='example@yourmail.com'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                        {...register('email', { required: 'Email address is required', pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' } })}
                                    />
                                    {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="phone" className='block mb-2.5 font-semibold'>
                                    Phone
                                </label>
                                <div className="flex items-center">
                                    <MdPhone className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder='(123) 4567890'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                        {...register('phone', { required: 'Phone number is required' })}
                                    />
                                    {errors.phone && <p className='text-red-500 text-xs'>{errors.phone.message}</p>}
                                </div>
                            </div>
                            <div className="relative md:col-span-2">
                                <label htmlFor="options" className="block mb-2.5 font-semibold">
                                    Inquiry type
                                </label>
                                <select
                                    id="options"
                                    className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-full"
                                    {...register('inquiryType', { required: 'Inquiry type is required' })}
                                >
                                    <option value="" disabled>Select inquiry type</option>
                                    <option value="Property-sale">Property for sale</option>
                                    <option value="Property-location">Property Location</option>
                                    <option value="Property-rent">Property Rent</option>
                                </select>
                                {errors.inquiryType && <p className='text-red-500 text-xs'>{errors.inquiryType.message}</p>}
                            </div>
                            <div className="relative md:col-span-2">
                                <label htmlFor="message" className="block mb-2.5 font-semibold">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Your message"
                                    className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-xl"
                                    {...register('message', { required: 'Message is required' })}
                                />
                                {errors.message && <p className='text-red-500 text-xs'>{errors.message.message}</p>}
                            </div>
                            <button type='submit' className='primary-btn flex items-center mt-6 w-[167px]'>
                                Send message
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className=' bg-black px-2 py-20 md:px-32 lg:p-40  lg:rounded-3xl xl:relative my-44 '>
                <div className='text-center'>
                    <div className="flex justify-center ">
                        <button className="text-xs flex items-center text-white bg-gray-900 opacity-80 gap-1 justify-center p-2 rounded-full mb-4  ">
                            <IoLocation className="h-7 w-7 text-white bg-slate-500 rounded-full p-1" />
                            Our offices
                        </button>
                    </div>
                    <div className='lg:w-[765px] mx-auto mt-4'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4'>Come and visit our offices</h1>
                        <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                    </div>
                </div>
                {/* slider */}
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className='relative'>
                            <div
                                className='bg-cover h-96 2xl:w-[1200px] mx-auto bg-center mt-6'
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className='text-white w-full space-y-4 p-5 lg:p-20 text-center lg:text-left'>
                                    <h1 className='text-2xl'>{slide.location}</h1>
                                    <p className='lg:w-1/3'>{slide.description}</p>
                                    <p className='flex items-center justify-center lg:justify-normal'>
                                        <MdPhone className='text-xl mr-2' />
                                        {slide.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-center mt-6 ">
                    <button className="text-base flex items-center bg-white  opacity-80 gap-5 justify-center p-2 rounded-full mb-4  ">
                        contact us
                        <FaArrowRight className="h-7 w-7 text-white bg-slate-500 rounded-full p-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;