import React from 'react';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import AgentSignature from '../../Shared/AgentSignature/AgentSignature';
import { FaArrowRight } from 'react-icons/fa';

const RentCollection = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28 mx-2 lg:mx-0'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Rent Collection</h1>
                <div className='xl:w-1/3'>
                    <p>Collecting rent is easy if you have the perfect tenant who pays on time! But what if they don’t? Having someone in your corner who knows tenant law and the proper notices to send is critical!</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/m6qhMPK/Rectangle-8196-4.png" alt="" className='w-full object-cover rounded-2xl' />
                <div className='mt-4'>
                    <p>If a tenant has gone beyond the grace period of the lease we provide them with a late rent notice, where we collect the appropriate late fees along with the normal rent amount. Worse case, if we have a tenant that does stop paying rent, we will assist in the eviction process and re-renting the property quickly.

                        We make paying rent easy for tenants with the online tenant portal that can be accessed 24/7. We encourage tenants to pay online, which means we can pay you out faster.</p>
                    <div className="mt-4">
                        <button className='primary-btn flex items-center mt-6'>
                            Get started
                            <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                        </button>
                    </div>
                </div>
            </div>
            <AgentSignature />
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default RentCollection;