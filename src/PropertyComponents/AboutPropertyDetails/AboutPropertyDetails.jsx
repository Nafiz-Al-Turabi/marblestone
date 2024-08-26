import React from 'react';
import { FaArrowRight, FaBath, FaBed, FaCar, FaSatelliteDish, FaSquare, FaTv } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import agent from './../../assets/AboutImages/agent1.png'
import { MdEmail, MdPhone } from 'react-icons/md';

const AboutPropertyDetails = ({propertyDetail}) => {
    const {location,title,image}=propertyDetail
    return (
        <div className='pt-20 lg:pt-32 lg:px-4 mb-20 mx-2'>
            <div className='xl:w-[1440px] mx-auto lg:flex justify-between gap-24'>
                <div className='lg:w-3/5 '>
                    <div className='border-b pb-16'>
                        <p className='flex items-center '>
                            <FaLocationPin className='mr-3' />
                            {location}
                        </p>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-medium my-4'>{title}</h1>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.</p>
                        <div className='flex items-center gap-6'>
                            <p className='flex items-center text-gray-400'>
                                <FaSquare className='mr-2' />
                                25000 sqre
                            </p>
                            <p className='flex items-center text-gray-400'>
                                <FaBath className='mr-2' />
                                2
                            </p>
                            <p className='flex items-center text-gray-400'>
                                <FaBed className='mr-2' />
                                3
                            </p>
                            <p className='flex items-center text-gray-400'>
                                <FaCar className='mr-2' />
                                4
                            </p>
                        </div>
                    </div>
                    <div className='mt-32 border-b pb-16'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-medium my-4'>About the property</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.</p>
                        <ul className='list-decimal list-inside pl-4 space-y-2 text-gray-700 my-6'>
                            <li>Morbi fringilla molestie magna sed dictum. Praesent.</li>
                            <li>Cras mi purus, viverra vitae felis sit amet.</li>
                            <li>Non mattis urna ex nec sem. Donec varius diam et suscipit venenati.</li>
                            <li>Quisque euismod posuere lacus sit amet volutpat.</li>
                        </ul>
                        <p>Quis faucibus massa sit egestas. Sit fermentum est ac pulvinar et sagittis sed sit ut. Quis faucibus aenean nibh vestibulum enim mi sit. Sollicitudin ultrices ultrices in ipsum urna fringilla massa leo. Sapien ultricies vitae rhoncus molestie purus. Urna urna dolor euismod porttitor et. Magna adipiscing dictum et adipiscing mollis feugiat.</p>
                    </div>
                    <div className='mt-16'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-medium my-4'>Amenities</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaArrowRight className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Air contidioner
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaTv className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Cable TV
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaSatelliteDish className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Dishwasher
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaArrowRight className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Air contidioner
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaTv className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Cable TV
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaSatelliteDish className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Dishwasher
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaArrowRight className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Air contidioner
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaTv className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Cable TV
                            </button>
                            <button className=' flex items-center bg-white p-4 rounded-xl '>
                                <FaSatelliteDish className='bg-black p-2 w-[28px] h-[28px] rounded-full text-white mr-2' />
                                Dishwasher
                            </button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/5 mt-12 xl:mt-0 '>
                    <div className='bg-white py-10 px-12 rounded-3xl shadow hover:scale-105 duration-300'>
                        <h2 className='text-xl md:text-3xl lg:text-5xl font-medium mb-2.5'>$8,000 <span className='text-xl text-gray-500 '>USD</span></h2>
                        <p className='text-xl text-gray-500'>Property for rent</p>
                    </div>
                    <div className='bg-white py-10 px-12 rounded-3xl shadow hover:scale-105 duration-300 mt-6'>
                        <h2 className='text-xl mb-4'>Get in touch to receive more info</h2>
                        <p>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
                        <div className='flex items-center mt-12 gap-5'>
                            <button className='primary-btn flex items-center '>
                                Apply
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                            <button className='flex bg-gray-300  text-black pl-4 pr-2 py-[6px] rounded-full'>
                                Application process
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                        </div>
                    </div>
                    <div className='bg-white py-10 px-12 rounded-3xl shadow hover:scale-105 duration-300 mt-6'>
                        <h2 className='text-xl mb-4'>Get in touch with the agent</h2>
                        <p>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
                        <div className='flex items-center mt-12 gap-5'>
                            <div>
                                <img src={agent} alt="" className='w-20  rounded-full' />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold mb-4'>Nafiz Al Turabi</h1>
                                <p className='flex items-center secondary-text text-base'>
                                    <MdEmail className='text-xl ' />
                                    <p className='ml-7 font-semibold'>nafiz.@gmail.com</p>
                                </p>
                                <p className='flex items-center secondary-text text-base'>
                                    <MdPhone className='text-xl ' />
                                    <p className='ml-7 font-semibold'>+880 17456985</p>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className=" bg-black xl:px-20  px-4 pb-20 pt-64 mr-4 ml-4 lg:mr-0 lg:ml-0 md:pt-16 xl:py-40  xl:mt-28 relative mt-28 rounded-lg xl:rounded-3xl">
                    <div className=" md:w-[360px] lg:w-[480px] text-white ">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl">Explore your dream home today</h1>
                        <p className="mt-4 mb-8">Lorem ipsum dolor sit amet consectetur. Volutpat et lacinia sit aenean consequat. Id tellus eget libero eget non odio tristique.</p>
                        <form className="relative">
                            <button className=' bg-white text-black font-medium rounded-full pl-4 pr-2 py-[6px] flex items-cente'>Start exploring
                                <FaArrowRight className='bg-black text-white p-2 w-[28px] h-[28px] rounded-full ml-2 ' />
                            </button>
                        </form>

                    </div>
                    <img src="https://i.ibb.co/gZdKZq6/ipad.png" alt="" className="absolute -top-24 right-0 md:top-10 md:right-0 lg:-top-10   lg:right-0 w-full md:w-[373px] lg:w-[573px] xl:w-[773px] " />
                </div>
            </div>
        </div>
    );
};

export default AboutPropertyDetails;
