import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import image from './../../assets/Images/macbook.png'
import LatestBlog from "../../Components/LatestBlog/LatestBlog";




const Blogs = () => {
    return (
        <div className='max-w-[1440px] mx-auto pt-20 lg:pt-40 lg:px-4 mb-20'>
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center lg:text-left'>News & articles</h1>
                <div className="lg:flex justify-between items-center mt-4 px-2">
                    <p className="lg:w-[560px] text-center lg:text-left">Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                    <form className="relative mt-6 lg:mt-0">
                        <input type="text" name="email" placeholder='Enter your email' className="bg-white  py-3 px-4 w-full lg:w-96 rounded-full focus:outline-none" />
                        <button className='absolute top-1 right-2'>
                            <IoSearch className='bg-black text-white p-2 w-10 h-10 rounded-full ml-2 ' />
                        </button>
                    </form>
                </div>
                {/* News letter */}
                <div className="max-w-[1440px] mx-auto bg-black xl:px-20  px-4 pb-20 pt-64 mr-4 ml-4 lg:mr-0 lg:ml-0 md:pt-16 xl:py-40  xl:mt-28 relative mt-28 rounded-lg xl:rounded-3xl">
                    <div className=" md:w-[360px] lg:w-[480px] text-white ">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl">Subscribe to our weekly newsletter</h1>
                        <p className="mt-4 mb-8">Lorem ipsum dolor sit amet consectetur. Volutpat et lacinia sit aenean consequat. Id tellus eget libero eget non odio tristique.</p>
                        <form className="relative">
                            <input type="email" name="email" placeholder='Enter your email' className="bg-[#202127] py-3 px-4 w-full rounded-full" />
                            <button className='absolute top-1 right-2 bg-white text-black font-medium rounded-full pl-4 pr-2 py-[6px] flex items-cente'>Subscribe
                                <FaArrowRight className='bg-black text-white p-2 w-[28px] h-[28px] rounded-full ml-2 ' />
                            </button>
                        </form>

                    </div>
                    <img src={image} alt="" className="absolute -top-24 right-0 md:top-10 md:right-0 lg:-top-10   lg:right-0 w-full md:w-[373px] lg:w-[573px] xl:w-[773px] " />
                </div>
            </div>
            <div>
                <LatestBlog />
            </div>
        </div>
    );
};

export default Blogs;