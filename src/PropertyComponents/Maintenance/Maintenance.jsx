import React from 'react';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';

const Maintenance = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Maintenance</h1>
                <div className='xl:w-1/3'>
                    <p>We know that a well-maintained home results in quicker rentals, lower turnovers, and in general, happier tenants! We offer our residents a secure portal to submit all maintenance issues, which can be accessed online with a simple click. Our Vendors are trustworthy and very quick to respond. We coordinate and communicate with the tenants, with you, and vendor for our maintenance scenarios. Protecting and maintaining your home and your investment is a top priority for us.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/MntSCmG/Rectangle-8196-2.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default Maintenance;