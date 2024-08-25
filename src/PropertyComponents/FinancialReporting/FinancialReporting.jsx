import React from 'react';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';

const FinancialReporting = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Financial Reporting</h1>
                <div className='xl:w-1/3'>
                    <p>We track your financials and reports to you monthly through our secure, advanced and fully automated web-based accounting system. With our detailed financial reporting tools, it's never been easier to keep tabs on your investment.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/QKLmyZ0/Rectangle-8196-3.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default FinancialReporting;