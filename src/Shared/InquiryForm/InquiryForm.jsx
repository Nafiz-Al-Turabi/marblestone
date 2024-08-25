import React from 'react';
import { AiFillBuild, AiFillFileZip } from 'react-icons/ai';
import { FaAddressCard, FaArrowRight, FaCity, FaPen, FaUser } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const InquiryForm = () => {
    return (
        <div className=' xl:w-[680px] mx-auto  lg:mt-40'>
            <h1 className='text-center text-4xl mb-10'>Inquire About Our Services</h1>
            <div className='bg-white p-11 rounded-3xl'>
                <form action="">
                    <h1 className='text-2xl font-semibold mb-5'>Property Information</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="relative">
                            <label htmlFor="" className='block mb-2.5 font-semibold'>
                                Adress
                            </label>
                            <div className="flex items-center">
                                <FaAddressCard className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                <input
                                    id=""
                                    type="text"
                                    name="name"
                                    placeholder='Adress'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="" className='block mb-2.5 font-semibold'>
                                City
                            </label>
                            <div className="flex items-center">
                                <FaCity className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                <input
                                    id=""
                                    type="text"
                                    name="name"
                                    placeholder='City'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="options" className="block mb-2.5 font-semibold">
                                State
                            </label>
                            <select
                                id="options"
                                name="options"
                                className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-full"
                            >
                                <option value="" disabled>Select State</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label htmlFor="" className='block mb-2.5 font-semibold'>
                                Zip code
                            </label>
                            <div className="flex items-center">
                                <AiFillFileZip className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                <input
                                    id=""
                                    type="text"
                                    name="name"
                                    placeholder='Type you zip code'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="options" className="block mb-2.5 font-semibold">
                                property Type
                            </label>
                            <select
                                id="options"
                                name="options"
                                className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-full"
                            >
                                <option value="" disabled>Select type</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="relative">
                            <label htmlFor="options" className="block mb-2.5 font-semibold">
                                Status
                            </label>
                            <select
                                id="options"
                                name="options"
                                className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-full"
                            >
                                <option value="" disabled>Select Status</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className="relative">
                            <label htmlFor="" className='block mb-2.5 font-semibold'>
                            Property Value
                            </label>
                            <div className="flex items-center">
                                <AiFillBuild className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                <input
                                    id=""
                                    type="text"
                                    name="name"
                                    placeholder='Type here...'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
                            </div>
                        </div>
                    </div>
                    <h1 className='text-2xl font-semibold my-5'>Contact Information</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="relative">
                            <label htmlFor="first-name" className='block mb-2.5 font-semibold'>
                                First name
                            </label>
                            <div className="flex items-center">
                                <FaUser className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                <input
                                    id="first-name"
                                    type="text"
                                    name="name"
                                    placeholder='First name'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
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
                                    name="name"
                                    placeholder='Last name'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
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
                                    type="text"
                                    name="name"
                                    placeholder='example@yourmail.com'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="phone" className='block mb-2.5 font-semibold'>
                                Email address
                            </label>
                            <div className="flex items-center">
                                <MdPhone className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                <input
                                    id="phone"
                                    type="text"
                                    name="name"
                                    placeholder='(123) 4567890'
                                    className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                />
                            </div>
                        </div>
                        <div className="relative md:col-span-2">
                            <label htmlFor="options" className="block mb-2.5 font-semibold">
                                Inquiry type
                            </label>
                            <select
                                id="options"
                                name="options"
                                className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-full"
                            >
                                <option value="" disabled>General inquiry</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="relative md:col-span-2">
                            <label htmlFor="comment" className="block mb-2.5 font-semibold text-gray-700">
                                Your Message
                            </label>
                            <div className="relative flex items-start">
                                <FaPen className="absolute top-3 left-3 text-gray-400" style={{ fontSize: '16px' }} />
                                <textarea
                                    id="comment"
                                    name="comment"
                                    placeholder='Write your message here...'
                                    className='bg-gray-50 pl-10 py-3 w-full h-32 resize-none focus:outline-none rounded-md'
                                />
                            </div>
                        </div>
                    </div>

                    <button className='primary-btn flex items-center mt-6 w-[167px]'>
                        Send message
                        <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquiryForm;