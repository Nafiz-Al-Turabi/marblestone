import React from 'react';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';

const RentCollection = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Rent Collection</h1>
                <div className='xl:w-1/3'>
                    <p>Collecting rent is easy if you have the perfect tenant who pays on time! But what if they don’t? Having someone in your corner who knows tenant law and the proper notices to send is critical!</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/m6qhMPK/Rectangle-8196-4.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default RentCollection;