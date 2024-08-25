import React from 'react';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';

const Marketing = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Marketing</h1>
                <div className='xl:w-1/3'>
                    <p>We offer a full range of property management services tailored to you as an investor, homeowner, or landlord. We have an extensive portfolio of single family homes, 2,3,4, flats in the south Chicago area.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/6YPfRDw/Rectangle-8196.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>

            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default Marketing;