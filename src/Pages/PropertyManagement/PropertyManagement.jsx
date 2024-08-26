import React, { useState } from 'react';
import Overview from '../../PropertyComponents/Overview/Overview';
import Marketing from '../../PropertyComponents/Marketing/Marketing';
import TenantScreening from '../../PropertyComponents/TenantScreening/TenantScreening';
import RentCollection from '../../PropertyComponents/RentCollection/RentCollection';
import Maintenance from '../../PropertyComponents/Maintenance/Maintenance';
import FinancialReporting from '../../PropertyComponents/FinancialReporting/FinancialReporting';
import { FaCheck } from 'react-icons/fa';


const tabs = [
    { id: 'overview', label: 'Overview', component: <Overview /> },
    { id: 'marketing', label: 'Marketing', component: <Marketing /> },
    { id: 'tenant-screening', label: 'Tenant Screening', component: <TenantScreening /> },
    { id: 'rent-collection', label: 'Rent Collection', component: <RentCollection /> },
    { id: 'maintenance', label: 'Maintenance', component: <Maintenance /> },
    { id: 'financial-reporting', label: 'Financial Reporting', component: <FinancialReporting /> },
];

const PropertyManagement = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const activeComponent = tabs.find(tab => tab.id === activeTab)?.component;

    return (
        <div className='xl:m-6'>
            <div className='bg-black px-4 py-20 md:px-8 lg:px-16 xl:px-32 lg:py-24 xl:py-32 xl:rounded-2xl'>
                <div className='text-center'>
                    <div className='max-w-4xl mx-auto'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4'>
                            Property Management Essentials Best Practices
                        </h1>
                        <p className='text-white'>
                            Property management involves overseeing residential or commercial properties to ensure they are well-maintained, financially viable, and effectively occupied. To succeed in this field, several best practices are essential.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-6 xl:w-[1200px] mx-auto md:bg-white md:p-6 rounded-full'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-2 md:mx-0'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`flex-1 px-2 py-2 gap-1 text-xs xl:text-base font-semibold rounded-full shadow ${activeTab === tab.id ? 'bg-black text-white' : 'text-gray-600'} focus:outline-none`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className='mt-24 xl:w-[1440px] mx-auto'>
                {activeComponent}
            </div>
        </div>
    );
};

export default PropertyManagement;
