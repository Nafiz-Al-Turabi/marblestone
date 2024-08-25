import React from 'react';
import { IoLocation } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AreaLocation = () => {
    const { ref: refBangladesh, inView: inViewBangladesh } = useInView({ triggerOnce: true });
    const { ref: refIndia, inView: inViewIndia } = useInView({ triggerOnce: true });
    const { ref: refNepal, inView: inViewNepal } = useInView({ triggerOnce: true });
    const { ref: refUSA, inView: inViewUSA } = useInView({ triggerOnce: true });
    const { ref: refCanada, inView: inViewCanada } = useInView({ triggerOnce: true });
    const { ref: refUAE, inView: inViewUAE } = useInView({ triggerOnce: true });
    const { ref: refSaudiArabia, inView: inViewSaudiArabia } = useInView({ triggerOnce: true });

    return (
        <div className='bg-black py-6 px-4 xl:px-10 xl:py-24 my-24 rounded-2xl text-white'>
            <h1 className='text-3xl mb-10'>Areas We Serve</h1>
            <div className='relative h-56'>
                <motion.p
                    className='flex absolute left-1/5'
                    ref={refBangladesh}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewBangladesh ? 1 : 0, y: inViewBangladesh ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    Bangladesh
                </motion.p>
                <motion.p
                    className='flex absolute right-24'
                    ref={refIndia}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewIndia ? 1 : 0, y: inViewIndia ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    India
                </motion.p>
                <motion.p
                    className='flex absolute top-1/2 right-56'
                    ref={refNepal}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewNepal ? 1 : 0, y: inViewNepal ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    Nepal
                </motion.p>
                <motion.p
                    className='flex absolute top-1/2 right-1/2'
                    ref={refUSA}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewUSA ? 1 : 0, y: inViewUSA ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    USA
                </motion.p>
                <motion.p
                    className='flex absolute top-1/3 right-1/3'
                    ref={refCanada}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewCanada ? 1 : 0, y: inViewCanada ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    Canada
                </motion.p>
                <motion.p
                    className='flex absolute top-1/5 right-3/4'
                    ref={refUAE}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewUAE ? 1 : 0, y: inViewUAE ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    UAE
                </motion.p>
                <motion.p
                    className='flex absolute top-3/4 right-3/4'
                    ref={refSaudiArabia}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inViewSaudiArabia ? 1 : 0, y: inViewSaudiArabia ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <IoLocation className='mr-2 text-xl' />
                    Saudi Arabia
                </motion.p>
            </div>
        </div>
    );
};

export default AreaLocation;
