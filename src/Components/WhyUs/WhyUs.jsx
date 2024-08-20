import { FaUserCircle } from "react-icons/fa";
import image from './../../assets/Images/Rectangle.png'
import { MdBathtub } from "react-icons/md";
import { FaCar, FaCheckCircle } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaRegSquareFull } from "react-icons/fa6";






const WhyUs = () => {
    return (
        <div className="2xl:w-[1200px] mx-auto my-[188px] lg:flex justify-between items-center gap-20 ">
            <div className="lg:w-[476px] mx-4">
                <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 '>
                    <FaUserCircle className='bg-white  text-3xl text-slate-400  rounded-full mr-2 border-none' />
                    Why us
                </button>
                <h1 className=" text-3xl 2xl:text-5xl font-medium mb-4">Innovation defines our real estate</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa.</p>
                <div className="space-y-2 mt-4">
                    <p className="flex items-center gap-3 text-gray-500">
                        <FaCheckCircle className="text-black" />
                        Point number 1
                    </p>
                    <p className="flex items-center gap-3 text-gray-500">
                        <FaCheckCircle className="text-black" />
                        Point number 2
                    </p>
                    <p className="flex items-center gap-3 text-gray-500">
                        <FaCheckCircle className="text-black" />
                        Point number 3
                    </p>
                    <p className="flex items-center gap-3 text-gray-500">
                        <FaCheckCircle className="text-black" />
                        Point number 4
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={image} alt="" className="rounded-3xl hidden xl:block" />
                <div className="grid grid-cols-2 gap-5 mt-6 lg:mt-0 mx-2">
                    <div className="w-full 2xl:w-[160px] px-4 py-3 flex items-center bg-white border rounded-xl 2xl:absolute top-48 -left-16 ">
                        <div className="h-8 w-8 flex justify-center items-center bg-slate-200 rounded-full text-white mr-[10px]">
                            <MdBathtub />
                        </div>
                        <p>2 bathroom</p>
                    </div>
                    <div className="w-full 2xl:w-[190px] px-4 py-3 flex items-center bg-white border rounded-xl 2xl:absolute bottom-20 left-10 ">
                        <div className="h-8 w-8 flex justify-center items-center bg-slate-200 rounded-full text-white mr-[10px]">
                            <FaCar />
                        </div>
                        <p>4 parking zone</p>
                    </div>
                    <div className="w-full 2xl:w-[160px] px-4 py-3 flex items-center bg-white border rounded-xl 2xl:absolute bottom-16 right-10">
                        <div className="h-8 w-8 flex justify-center items-center bg-slate-200 rounded-full text-white mr-[10px]">
                            <IoBed />
                        </div>
                        <p>2 bedroom</p>
                    </div>
                    <div className="w-full 2xl:w-[160px] px-4 py-3 flex items-center bg-white border rounded-xl 2xl:absolute top-32 -right-16">
                        <div className="h-8 w-8 flex justify-center items-center bg-slate-200 rounded-full text-white mr-[10px]">
                            <FaRegSquareFull />
                        </div>
                        <p>2553 sqtf</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;