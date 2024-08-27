import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos, MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import cover from './../../assets/Images/agentback.png'
import { FaBriefcase } from 'react-icons/fa6';
import { IoCopy, IoSearch } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import AgentProperties from '../../AgentComponents/Agent\'sProperties/AgentProperties';


const AgentDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        try {
            const response = await fetch('/agents.json')
            if (!response.ok) {
                throw new error('Oh no not good!')
            }
            const data = await response.json(); // Convert response to JSON
            const agent = data.find(detail => detail.id == id);
            if (agent) {
                setDetails(agent);
                console.log(agent);
            }
        } catch (error) {
            console.error('Failed to fetch agent:', error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { name, title, image, phone, mail, about, experience } = details;
    return (
        <div>
            <div className='pt-20 lg:pt-32 lg:px-4 mb-20 max-w-[1440px] mx-auto'>
                <div className='flex items-center md:mb-10  lg:mb-16 mx-2'>
                    <p className='flex items-center secondary-text gap-2'>Agents
                        <MdArrowForwardIos />
                    </p>
                    <p className='ml-2 lg:ml-0'>Agent Details</p>
                </div>

                <div className='lg:flex gap-12 mx-2 lg:mx-0 mt-10 lg:mt-0'>
                    <div className='w-full lg:w-[486px] lg:h-[650px] bg-white rounded-b-3xl relative'>
                        <div>
                            <img src={cover} alt="" className='rounded-t-3xl w-full' />
                        </div>
                        <div>
                            <img src={image} alt="" className='w-20 h-20 md:w-24 md:h-24 rounded-full absolute sm:top-0 sm:left-0 top-20 left-10 md:top-44 md:left-10 lg:top-24 lg:left-10' />
                        </div>
                        <div className='mt-[75px] px-11'>
                            <h1 className='text-xl lg:text-2xl'>{name}</h1>
                            <div className='mt-6'>
                                <div className='mb-5'>
                                    <p className='flex items-center secondary-text text-base'>
                                        <MdEmail className='text-xl mr-1.5' />
                                        Email adress
                                    </p>
                                    <p className='ml-7 font-semibold'>{mail}</p>
                                </div>
                                <div className='mb-5'>
                                    <p className='flex items-center secondary-text text-base'>
                                        <MdPhone className='text-xl mr-1.5' />
                                        Phone number
                                    </p>
                                    <p className='ml-7 font-semibold'>{phone}</p>
                                </div>
                                <div className='mb-5'>
                                    <p className='flex items-center secondary-text text-base'>
                                        <MdLocationPin className='text-xl mr-1.5' />
                                        Location
                                    </p>
                                    <p className='ml-7 font-semibold'>Dhaka Bangladesh</p>
                                </div>
                                <div className=''>
                                    <p className='flex items-center secondary-text text-base'>
                                        <FaBriefcase className='text-xl mr-1.5' />
                                        Position
                                    </p>
                                    <p className='ml-7 font-semibold'>{title}</p>
                                </div>
                                <form className="relative mt-7 lg:mt- pb-20 lg:pb-12">
                                    <input type="text" name="" placeholder='Enter your email' defaultValue='marblestone/agent' className="bg-[#f7f7f7]  py-3 px-4 w-full lg:w-96 text-gray-600 rounded-full focus:outline-none" />
                                    <button className='absolute top-1 right-2 lg:right-5'>
                                        <IoCopy className='bg-black text-white p-2.5 w-10 h-10 rounded-full ml-2 ' />
                                    </button>
                                </form>
                                <button className='primary-btn flex items-center absolute top-32 right-10 md:top-60 md:right-11 lg:top-40 lg:right-11'>
                                    Book a call
                                    <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center lg:text-left xl:w-[870px] mt-16 lg:mt-0'>
                        <div>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl mb-4'>About me</h1>
                            <p className='text-justify'>{about}</p>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl mb-4'>My experience</h1>
                            <p className='text-justify'>{experience}</p>
                        </div>
                    </div>
                </div>
            </div>
            <AgentProperties name={name} />
        </div>
    );
};

export default AgentDetails;