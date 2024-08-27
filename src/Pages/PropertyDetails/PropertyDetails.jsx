import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import AboutPropertyDetails from '../../PropertyComponents/AboutPropertyDetails/AboutPropertyDetails';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const { id } = useParams();
    const [propertyDetails, setPropertyDetails] = useState({});

    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        try {
            const response = await fetch('/properties.json')
            if (!response.ok) {
                throw new error('Oh no not good!')
            }
            const data = await response.json();
            const property = data.find(details => details.id == id)
            if (property) {
                setPropertyDetails(property);
                console.log(property)
            }
        } catch (error) {
            onsole.error('Failed to fetch property Details:', error);
        }
    }

    // for scroll topz
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='pt-20 lg:pt-32 lg:px-4 mb-20'>
            <div className='xl:w-[1440px] mx-auto'>
                <div className='flex items-center md:mb-10  lg:mb-16 mx-2 '>
                    <p className='flex items-center secondary-text gap-2'>Property
                        <MdArrowForwardIos />
                    </p>
                    <p className='ml-2 lg:ml-0'>Property Details</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-2 lg:mx-0'>
                    <div className='relative lg:col-span-2'>
                        <img src={propertyDetails.image} alt="image of property" className='w-full object-cover rounded-2xl' />
                    </div>
                    <div className='relative lg:col-span-2'>
                        <img src="https://i.ibb.co/wNDkC5q/4-min.jpg" alt="image of property" className='w-full object-cover rounded-2xl' />
                    </div>
                    <div className='relative '>
                        <img src="https://i.ibb.co/mhvJ2FR/1-min.jpg" alt="image of property" className='w-full object-cover rounded-2xl' />
                    </div>
                    <div className='relative'>
                        <img src="https://i.ibb.co/KG0TLrn/5-min.jpg" alt="image of property" className='w-full object-cover rounded-2xl' />
                    </div>
                    <div className='relative'>
                        <img src="https://i.ibb.co/xhCJFFX/2-min.png" alt="image of property" className='w-full object-cover rounded-2xl' />
                    </div>
                    <div className='relative'>
                        <img src="https://i.ibb.co/xhCJFFX/2-min.png" alt="image of property" className='w-full object-cover rounded-2xl' />
                    </div>
                </div>
            </div>
            <AboutPropertyDetails propertyDetail={propertyDetails} />
        </div>
    );
};

export default PropertyDetails;