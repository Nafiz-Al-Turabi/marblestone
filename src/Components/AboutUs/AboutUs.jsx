import man from './../../assets/Images/man.png'
import mobile from './../../assets/Images/mobile.png'
import { FaArrowRight, FaUserCircle } from "react-icons/fa";


const AboutUs = () => {
    return (
        <div className='md:flex justify-between items-center 2xl:w-[1200px] mx-auto mb-40 2xl:mb-80'>
            <div className='relative mx-2'>
                <div>
                    <img src={man} alt="" className='lg:block rounded-3xl md:w-full '   />
                </div>
                <div>
                    <img src={mobile} alt="" className='w-40 md:hidden lg:hidden 2xl:block 2xl:w-80 absolute -bottom-20 right-5 2xl:absolute 2xl:top-16 2xl:-right-40' />
                </div>
            </div>
            <div className='md:w-[420px] lg:text-left mt-32 md:mt-0 mx-2'>
                <button className=' bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                    <FaUserCircle className='bg-white  text-3xl text-slate-400 rounded-full mr-2 border-none' />
                    About Us
                </button>
                <h1 className='text-3xl 2xl:text-5xl font-medium mb-4'>The heart of real estate innovation</h1>
                <p className='text-[#464851] text-base mb-6'>Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum.</p>
                <button className='primary-btn flex items-center '>More
                    <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                </button>
            </div>
        </div>
    );
};

export default AboutUs;