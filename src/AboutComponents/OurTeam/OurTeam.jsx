import { AiFillHome } from "react-icons/ai";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { MdMail } from "react-icons/md";
import { useEffect, useState } from "react";
import axiosInstance from "../../Axios/AxiosInstance";


const OurTeam = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetchAgent();
    }, []);

    const fetchAgent = async () => {
        try {
            const response = await axiosInstance.get('/agents');
            if (response) {
                setAgents(response.data)
            }
        } catch (error) {

        }
    }
    return (
        <div className='pt-20 lg:pt-40 lg:px-4 mb-20'>
            <div className='lg:max-w-[1200px] mx-auto  px-6 lg:px-0'>
                <div className="">
                    <div className="flex justify-center ">
                        <button className="text-xs flex items-center bg-gray-100 gap-1 justify-center p-2 rounded-full mb-4  ">
                            <AiFillHome className="h-7 w-7 text-white bg-slate-300 rounded-full p-2" />
                            Our team
                        </button>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-center">Meet our team</h1>
                        <p className=" text-center mt-4 lg:w-[50%] mx-auto">Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.</p>
                    </div>
                    {/* Agents */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            agents.map(agent => (
                                <div key={agent._id} className="p-16 md:p-20 lg:p-16 xl:p-24 shadow rounded-3xl bg-white relative">
                                    <div className="flex justify-center">
                                        <img src={agent.image} alt="" className="rounded-full" />
                                    </div>
                                    <h1 className="flex justify-center text-base md:text-2xl my-3 font-semibold">{agent.name}</h1>
                                    <p className="flex justify-center secondary-text mb-4">{agent.designation}</p>
                                    <div className="flex justify-center gap-5">
                                        <button>
                                            <MdMail className="h-10 w-10 bg-slate-100 rounded-full text-gray-900 p-2" />
                                        </button>
                                        <button>
                                            <FaPhoneAlt className="h-10 w-10 bg-slate-100 rounded-full text-gray-900 p-2" />
                                        </button>
                                    </div>
                                    <button className="absolute top-5 right-5">
                                        <FaPlus className="h-10 w-10 bg-gray-900 rounded-full text-white p-2" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;