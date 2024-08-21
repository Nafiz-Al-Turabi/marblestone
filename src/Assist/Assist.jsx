import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import image1 from './../../assets/Images/Company.svg';
import image2 from './../../assets/Images/Institute.svg';
import image3 from './../../assets/Images/Enterprise.svg';
import image4 from './../../assets/Images/Agency.svg';
import image5 from './../../assets/Images/Venture.svg';
import image6 from './../../assets/Images/Application.svg';
import image7 from './../../assets/Images/agent.png';
import image8 from './../assets/AboutImages/agent1.png';
import image9 from './../assets/AboutImages/agent2.png';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CountUp from 'react-countup'; // Import CountUp

const TrustedCompany = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            img: image7,
            text: '“If you want convenience, call Tina”',
            description: 'Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.',
            location: 'Chicago, IL'
        },
        {
            img: image8,
            text: '“Exceptional service and support”',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location: 'New York, NY'
        },
        {
            img: image9,
            text: '“Highly recommend for anyone”',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            location: 'San Francisco, CA'
        },
        // Add more testimonials here if needed
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="2xl:w-[1200px] mx-auto mb-40">
            <div className="mb-20">
                <h3 className="text-[18px] secondary-text text-center mb-6">As seen On:</h3>
                <Marquee>
                    <img src={image2} alt="Institute" className="ml-10" />
                    <img src={image3} alt="Enterprise" className="ml-10" />
                    <img src={image4} alt="Agency" className="ml-10" />
                    <img src={image1} alt="Company" className="ml-10" />
                    <img src={image5} alt="Venture" className="ml-10" />
                    <img src={image6} alt="Application" className="ml-10" />
                </Marquee>
            </div>
            <div className="lg:flex justify-between lg:mx-6">
                <div className="text-center lg:text-left 2xl:flex 2xl:w-1/2 space-x-2 mr-5 space-y-4 lg:space-y-0">
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
                {/* carousel  */}
                <div className="relative overflow-hidden">
                    <div className="carousel-wrapper flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="carousel-item w-full flex-shrink-0 px-4 py-6">
                                <div className="lg:flex items-center lg:space-x-6 shadow rounded-3xl p-6 lg:p-12 bg-white">
                                    <div className="flex-shrink-0">
                                        <img src={testimonial.img} alt="Testimonial" className="rounded-full w-24 h-24 lg:w-32 lg:h-32" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg lg:text-xl">{testimonial.text}</h3>
                                        <p className="my-[6px] text-xs md:text-base">{testimonial.description}</p>
                                        <p className="text-lg lg:text-xl">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 h-12 w-12 bg-white opacity-75 shadow flex justify-center items-center rounded-full">
                        <MdKeyboardArrowLeft className="text-2xl" />
                    </button>
                    <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 h-12 w-12 bg-white opacity-75 shadow flex justify-center items-center rounded-full">
                        <MdKeyboardArrowRight className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;

