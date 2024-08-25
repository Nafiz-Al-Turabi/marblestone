import React from 'react';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';

const TenantScreening = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Tenant Screening</h1>
                <div className='xl:w-1/3'>
                    <p>We strive to get your investment rented quickly, but feel it is important to get the RIGHT tenant versus the FAST tenant! Spending time up front and finding the BEST tenant for your rental creates a good experience all around, versus one that is stressful and frustrating.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/hXv6Jky/Rectangle-8196-1.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default TenantScreening;