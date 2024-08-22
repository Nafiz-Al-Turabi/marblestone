import { AiFillHome } from "react-icons/ai";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { MdMail } from "react-icons/md";
import agent1 from './../../assets/AboutImages/agent1.png'
import agent2 from './../../assets/AboutImages/agent2.png'
import agent3 from './../../assets/AboutImages/agent3.png'
import { useEffect, useState } from "react";

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/agents.json')
            if (!response.ok) {
                throw new error('Network response not ok')
            }
            const data = await response.json()
            setAgents(data);
            console.log(data)
        } catch (error) {
            console.error('Failed to fetch agents:', error);
        }
    };
    return (
        <div className='pt-20 lg:pt-40 lg:px-4 mb-20'>
            <div className='text-center'>
                <div className="flex justify-center ">
                    <button className="text-xs flex items-center bg-gray-100 gap-1 justify-center p-2 rounded-full mb-4  ">
                        <AiFillHome className="h-7 w-7 text-white bg-slate-300 rounded-full p-1" />
                        Our team / agents
                    </button>
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl mb-4'>Meet our team/agents</h1>
                <p className='secondary-text'>We can use this page for both, one for only agents and one for the MPG team.</p>
            </div>
            <div className='lg:max-w-[1200px] mx-auto mt-14 px-6 lg:px-0'>
                {/* Agents */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        agents.map((agent) => (
                            <div key={agent.id} className="p-16 md:p-20 lg:p-16 xl:p-24 shadow rounded-3xl bg-white relative">
                                <div className="flex justify-center">
                                    <img src={agent.image} alt="" className="rounded-full h-32 w-32" />
                                </div>
                                <h1 className="flex justify-center text-base md:text-2xl my-3 font-semibold">John Carter</h1>
                                <p className="flex justify-center secondary-text mb-4">Inmobiliary Agent</p>
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
    );
};

export default Agents;