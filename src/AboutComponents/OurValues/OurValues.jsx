import { FaStar } from "react-icons/fa6";
import { FaArrowRight, FaLightbulb, FaUsers } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";





const OurValues = () => {
    return (
        <div className="mt-20 lg:my-40 xl:my-52 xl:w-[1200px] mx-auto">
            <div className="xl:flex justify-between">
                <div className="xl:w-[41%]">
                    <div className="flex justify-center xl:justify-normal">
                        <p className="text-xs flex items-center bg-gray-100 w-28 gap-1 justify-center p-2 rounded-full mb-4  ">
                            <FaStar className="h-7 w-7 text-white bg-slate-300 rounded-full p-2" />
                            Our Values
                        </p>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-center xl:text-left">Core Values (GO MPG)</h1>
                        <p className=" text-center xl:text-left mt-4">Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.</p>
                    </div>
                    <div className="flex justify-center xl:justify-normal">
                        <button className='primary-btn flex items-center'>
                            CTA 1
                            <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:w-[50%] gap-12 mx-2 ">
                    <div>
                        <p className="text-2xl">
                            <FaLightbulb />
                        </p>
                        <h3 className="text-2xl font-medium my-4">Growth-Oriented</h3>
                        <p>We embrace a culture of continuous learning and development where everyone can
                            maximize their lives to their full potential, regardless of where their paths take them. MPG
                            helps its employees attain their personal and professional goals by providing opportunities
                            for training, mentorship, skill-building, and financial literacy workshops.</p>
                    </div>
                    <div>
                        <p className="text-2xl">
                            <FaStar />
                        </p>
                        <h3 className="text-2xl font-medium my-4">Mastery</h3>
                        <p>At MPG, we don’t expect perfection, but we don’t half-ass anything, either. We encourage
                            everyone to maximize their potential by improving their skills, knowledge, and expertise
                            within their respective roles and preparing for their next ones.</p>
                    </div>
                    <div>
                        <p className="text-2xl">
                            <GiNetworkBars />
                        </p>
                        <h3 className="text-2xl font-medium my-4">Positivity</h3>
                        <p>We keep our glasses half-full, thank you very much. We know that a constructive mindset
                            seizes opportunities in life and ultimately achieves more. Plus, it’s just more fun to be around
                            positive people. That’s why we cultivate a supportive and uplifting environment by fostering
                            optimism and enthusiasm.</p>
                    </div>
                    <div>
                        <p className="text-2xl">
                            <FaUsers />
                        </p>
                        <h3 className="text-2xl font-medium my-4">Get Shit Done</h3>
                        <p>Actions speak louder than words and good intentions. “Gonna-dos” don’t cut it here. When
                            we say we’re going to do something, we get shit done. Pronto. That’s the MPG Way.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValues;