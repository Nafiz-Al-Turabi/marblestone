import Marquee from "react-fast-marquee";
import image1 from "./../../assets/Images/Company.svg"
import image2 from "./../../assets/Images/Institute.svg"
import image3 from "./../../assets/Images/Enterprise.svg"
import image4 from "./../../assets/Images/Agency.svg"
import image5 from "./../../assets/Images/Venture.svg"
import image6 from "./../../assets/Images/Application.svg"
import image7 from "./../../assets/Images/agent.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import CountUp from 'react-countup'; // Import CountUp


const TrustedCompany = () => {
    return (
        <div className="2xl:w-[1200px] mx-auto mb-40 ">
            <div className="mb-20">
                <h3 className="text-[18px] secondary-text text-center mb-6">As seen On:</h3>
                <Marquee >
                    <img src={image2} alt="" className=" ml-10" />
                    <img src={image3} alt="" className=" ml-10" />
                    <img src={image4} alt="" className=" ml-10" />
                    <img src={image1} alt="" className=" ml-10" />
                    <img src={image5} alt="" className=" ml-10" />
                    <img src={image6} alt="" className=" ml-10" />
                </Marquee>
            </div>
            <div className=" lg:flex justify-between lg:mx-6">
                <div className=" text-center lg:text-left 2xl:flex 2xl:w-1/2 space-x-2 mr-5 space-y-4 lg:space-y-0 ">
                    <div>
                        <h3 className="text-[18px]">Our Project</h3>
                        <p className="text-5xl 2xl:text-7xl my-[6px]">
                            <CountUp end={10} suffix="k+" />
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi!</p>
                    </div>
                    <div>
                        <h3 className="text-[18px]">Our Customer</h3>
                        <p className="text-5xl 2xl:text-7xl my-[6px]">
                            <CountUp end={200} prefix=" " suffix="k" />
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi!</p>
                    </div>
                </div>
                <div className="relative mx-10 lg:mx-0 mt-10 lg:mt-0">
                    <div className="lg:flex items-center lg:space-x-6 shadow rounded-3xl p-6 lg:p-12  ">
                        <div>
                            <img src={image7} alt="" className="rounded-full" />
                        </div>
                        <div className="">
                            <h3 className="text-lg lg:text-xl">“If you want convenience, call Tina”</h3>
                            <p className="my-[6px] text-xs md:text-base">Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <p className="text-lg lg:text-xl">Chicago, IL</p>
                        </div>
                        <button className=" absolute top-1/3 -right-5 h-12 w-12 bg-white opacity-45 shadow flex justify-center items-center rounded-full">
                            <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;