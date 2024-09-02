import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaBriefcase, FaPhoneAlt } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import logo from './../../assets/Images/logo.svg'
import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <footer className='bg-[#14161C] text-white  2xl:mb-7 p-2 lg:m-6 md:p-6 lg:px-[100px] lg:py-[106px]  lg:rounded-3xl'>
            <div className=' lg:flex justify-between' >
                <div className='lg:w-96'>
                    <h1 className='text-2xl lg:text-4xl mb-4'>Discover exclusive real estate opportunities</h1>
                    <p className='mb-8 text-[#A4A6B0]'>Lorem ipsum dolor sit amet consectetur. Egestas eu amet dictum tellus. Purus morbi lorem viverra cras.</p>
                    <form className="relative">
                        <input type="email" name="email" placeholder='Enter your email' className="bg-[#202127] py-3 px-4 w-full rounded-full" />
                        <button className='absolute top-1 right-2 bg-white text-black font-medium rounded-full pl-4 pr-2 py-[6px] flex items-cente'>Subscribe
                            <FaArrowRight className='bg-black text-white p-2 w-[28px] h-[28px] rounded-full ml-2 ' />
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-4">
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaXTwitter /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaLinkedinIn /></a>
                    </div>
                    <div className="  my-10 lg:mt-[145px]">
                        <img src={logo} alt=""  className="w-56"/>
                        <h1 className="text-[#A4A6B0] mt-6">Powerd by dataSolve</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-medium mb-5'>Main page</h1>
                    <div className=' md:grid md:grid-cols-3 lg:flex space-y-5 lg:space-x-10 text-xl'>
                        <div className='flex flex-col space-y-4'>
                            <Link to="/" className='text-base hover:text-gray-400 duration-300'>Home</Link>
                            <Link to="/about" className='text-base hover:text-gray-400 duration-300'>About</Link>
                            <Link to="/properties" className='text-base hover:text-gray-400 duration-300'>Properties</Link>
                            <Link to="/propertyLocation" className='text-base hover:text-gray-400 duration-300'>Location CMS</Link>
                            <Link to="/propertycms" className='text-base hover:text-gray-400 duration-300'>Property CMS</Link>
                            <Link to="/cmsSales" className='text-base hover:text-gray-400 duration-300'>Type CMS sales</Link>
                            <Link to="/" className='text-base hover:text-gray-400 duration-300'>Property single</Link>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <Link to="/agents" className='text-base hover:text-gray-400 duration-300'>Agents</Link>
                            <Link to="/" className='text-base hover:text-gray-400 duration-300'>Agents single</Link>
                            <Link to="/blogs" className='text-base hover:text-gray-400 duration-300'>Blog</Link>
                            <Link to="/blogs" className='text-base hover:text-gray-400 duration-300'>Blog post</Link>
                            <Link to="/" className='text-base hover:text-gray-400 duration-300'>Post a free property</Link>
                            <Link to="/" className='text-base hover:text-gray-400 duration-300'>Post a paid property</Link>
                            <Link to="/contact" className='text-base hover:text-gray-400 duration-300'>Contact</Link>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <Link to="/" className='text-base hover:text-gray-400 duration-300'>FAQs</Link>
                            <Link to="/propertyManagement" className='text-base hover:text-gray-400 duration-300'>Property Management</Link>
                            <Link to="/owner" className='text-base hover:text-gray-400 duration-300'>Owner Resource page</Link>
                            <Link to="/resources" className='text-base hover:text-gray-400 duration-300'>Resident Resource page</Link>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h1 className='text-xl font-medium mb-5'>Contact us</h1>
                        <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-8">
                            <div className="flex space-x-2">
                                <IoIosMail className="text-[32px] " />
                                <div>
                                    <h3 className="text-[#A4A6B0]">Email Address</h3>
                                    <p>info@home.com</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <FaBriefcase className="text-[32px] " />
                                <div>
                                    <h3 className="text-[#A4A6B0]">Sales executives</h3>
                                    <p>sales@home.com</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <FaPhoneAlt className="text-[32px] " />
                                <div>
                                    <h3 className="text-[#A4A6B0]">Phone number</h3>
                                    <p>+88 01756484568</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <BiSolidMessageRounded className="text-[32px] " />
                                <div>
                                    <h3 className="text-[#A4A6B0]">Help & support</h3>
                                    <p>support@home.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;