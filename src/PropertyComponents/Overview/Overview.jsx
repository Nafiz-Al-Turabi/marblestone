import React from 'react';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';

const Overview = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Chicago Property Management</h1>
                <div className='xl:w-1/3'>
                    <h1 className='text-3xl mb-4'>Let Us Manage Your Chicago Rental Property</h1>
                    <p>We offer a full range of property management services tailored to you as an investor, homeowner, or landlord. We have an extensive portfolio of single family homes, 2,3,4, flats in the south Chicago area.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/fxYwfDJ/Rectangle-2-3.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <div>
                <AreaLocation/>
                <InquiryForm/>
            </div>
        </div>
    );
};

export default Overview;