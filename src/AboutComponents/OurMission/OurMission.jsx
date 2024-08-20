import { FaUser, FaLongArrowAltRight } from "react-icons/fa";
import image3 from './../../assets/AboutImages/image3.jpg'

const OurMission = () => {
    return (
        <div className="xl:w-[1200px] mx-auto my-20 lg:my-40 xl:mb-52">
            <div className="flex flex-col-reverse xl:flex xl:flex-row gap-20">
                <div className="relative ">
                    <img src={image3} alt="" className="xl:h-[564px] object-cover xl:rounded-3xl" />
                </div>
                <div className="xl:w-[60%]">
                    <div className="flex justify-center xl:justify-normal">
                        <p className="text-xs flex items-center bg-gray-100 w-28 gap-1 justify-center p-2 rounded-full mb-4  ">
                            <FaUser className="h-7 w-7 text-white bg-slate-300 rounded-full p-2" />
                            Our Values
                        </p>
                    </div>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center xl:text-left my-6 xl:mb-48">We have only one goal: To help you find your dream home</h1>
                    <div className="">
                        <p className="text-center xl:text-left">Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.</p>
                        <div className="flex justify-center xl:justify-normal">
                            <button className="primary-btn text-xs flex items-center bg-gray-100 w-36 gap-1 justify-center p-2 rounded-full mt-4 ">
                                Start exploring
                                <FaLongArrowAltRight className="h-7 w-7 text-black bg-white rounded-full p-2 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;