import banner from './../../assets/Images/banner.png';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative bg-cover md:bg-top h-screen md:h-[620px] 2xl:h-screen bg-no-repeat 2xl:mx-6 2xl:rounded-3xl 2xl:mt-5 mb-20"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-10 2xl:rounded-3xl"></div>
            
            {/* Content */}
            <div className='relative text-white 2xl:flex justify-between 2xl:w-[1200px] mx-auto pt-[192px] text-center 2xl:text-left space-y-4 2xl:space-y-0'>
                <div>
                    <h1 className='example-heading text-4xl md:text-5xl lg:text-7xl 2xl:text-7xl font-bold 2xl:w-[800px]'>
                        Chicago’s Southside Property Management
                    </h1>
                </div>
                <div>
                    <p className='w-80  lg:w-[450px] 2xl:w-80 mx-auto text-base'>
                        Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                    </p>
                    <div className='flex justify-center 2xl:block'>
                        <button className='primary-btn flex items-center mt-6'>
                            See more
                            <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
