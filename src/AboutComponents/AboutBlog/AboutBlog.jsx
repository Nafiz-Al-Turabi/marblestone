import { IoPencil } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import image4 from './../../assets/AboutImages/image4.jpg'
import image5 from './../../assets/AboutImages/image5.jpg'
import image6 from './../../assets/AboutImages/image6.jpg'
import { Link } from "react-router-dom";


const AboutBlog = () => {
    return (
        <div className='2xl:w-[1200px] mx-auto my-24 lg:my-[160px] px-2'>
            <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                <IoPencil className='bg-white p-1  text-3xl text-slate-400 rounded-full mr-2 border-none' />
                Our Blog
            </button>
            <div className='md:flex justify-between mb-10 mx-2'>
                <h1 className='text-3xl lg:text-5xl font-medium'>Success Stories</h1>
                <button className='flex items-center '>Browse al articles
                    <IoIosArrowForward className='ml-2' />
                </button>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 mx-2'>
                <div>
                    <div className='h-96 overflow-hidden relative rounded-3xl'>
                        <img src={image4} alt="blog image" className='object-cover w-full h-full' />
                    </div>
                    <h1 className='text-2xl my-6 font-medium'>No money, no honey!🍯</h1>
                    <div className='flex justify-between'>
                        <p className='flex justify-center text-gray-500'>
                            <BsCalendar3 className='mr-2 text-xl' />
                            Mar 30, 2025
                        </p>
                        <Link to='/' className='flex items-center '>Read more
                            <IoIosArrowForward className='ml-2' />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='h-96 overflow-hidden relative rounded-3xl'>
                        <img src={image5} alt="blog image" className='object-cover w-full h-full' />
                    </div>
                    <h1 className='text-2xl my-6 font-medium'>How John Achieved 98% Tenant Satisfaction in Maintenance.</h1>
                    <div className='flex justify-between'>
                        <p className='flex justify-center text-gray-500'>
                            <BsCalendar3 className='mr-2 text-xl' />
                            Mar 28, 2025
                        </p>
                        <Link to='/' className='flex items-center '>Read more
                            <IoIosArrowForward className='ml-2' />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='h-96 overflow-hidden relative rounded-3xl'>
                        <img src={image6} alt="blog image" className='object-cover w-full h-full' />
                    </div>
                    <h1 className='text-2xl my-6 font-medium'>How we stopped a 70-unit portfolio from bleeding. </h1>
                    <div className='flex justify-between'>
                        <p className='flex justify-center text-gray-500'>
                            <BsCalendar3 className='mr-2 text-xl' />
                            Mar 26, 2025
                        </p>
                        <Link to='/' className='flex items-center '>Read more
                            <IoIosArrowForward className='ml-2' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBlog;