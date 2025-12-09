"use client"
//===== Import Components
import { Form } from "@/components";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
//===== Icons
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
            <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative'>
                <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black pt-[100px] lg:pt-[150px] pb-28 xl:pb-20 3xl:pb-0 3xl:h-screen'>
                    <div className='container mx-auto text-center xl:text-left flex flex-col items-center justify-center h-full overflow-x-hidden'>
                        <div className='flex flex-col justify-center mb-10 md:mb-20'>
                            <motion.h2
                                variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='text-[30px] font-bold md:h2 text-center !mb-0'
                            >
                                Contact <span className='text-accent'>Me</span>.
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('right', 0.4)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='w-full px-0 text-[14px] md:text-[16px] text-center'
                            >
                                Let’s work together. Feel free to contact me.
                            </motion.p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-between w-full xl:w-[90%]">
                            <div className='flex basis-1/4 flex-col gap-8 w-full mb-10 lg:mb-0'>
                                <div className="flex-col gap-10">
                                    <motion.div
                                        variants={fadeIn('down', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='text-[20px] font-normal mb-4 xl:mb-6 text-left'
                                    >
                                        Contact Info
                                    </motion.div>
                                    <motion.div
                                        variants={fadeIn('right', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='mt-5 md:mt-0 mb-4 xl:mb-6'
                                    >
                                        <div className="flex flex-col gap-10">
                                            <a href="mailto:rabiaazhardev@gmail.com" className="flex items-center gap-5 md:gap-6">
                                                <div className='p-4 md:p-5 bg-zinc-600/20 rounded-md'>
                                                    <FaRegEnvelope className="text-[20px] md:text-[30px]" />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <p>Email:</p>
                                                    <p className="text-white font-normal">rabiaazhardev@gmail.com</p>
                                                </div>
                                            </a>
                                            <a href="tel:+923162592884" className="flex items-center gap-5 md:gap-6">
                                                <div className='p-4 md:p-5 bg-zinc-600/20 rounded-md'>
                                                    <FaPhoneAlt className="text-[20px] md:text-[30px]" />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <p>Phone:</p>
                                                    <p className="text-white font-normal">+92 316 2300835</p>
                                                </div>
                                            </a>
                                            <a href="https://maps.app.goo.gl/mgGd26DMF3qw7bz66" target="_blank" className="flex items-center gap-5 md:gap-6">
                                                <div className='p-4 md:p-5 bg-zinc-600/20 rounded-md'>
                                                    <FaMapMarkerAlt className="text-[20px] md:text-[30px]" />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <p>Address:</p>
                                                    <p className="text-white font-normal">Karachi, Pakistan</p>
                                                </div>
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex-col gap-10">
                                    <motion.div
                                        variants={fadeIn('down', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='text-[20px] font-normal mb-4 xl:mb-6 text-left'
                                    >
                                        Social Info
                                    </motion.div>
                                    <motion.div
                                        variants={fadeIn('right', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='mt-5 md:mt-0'
                                    >
                                        <div className="flex items-center gap-6">
                                            <a href="https://www.linkedin.com/in/rabia-azhar-02a8bb155/" target="_blank" className='p-4 md:p-5 bg-zinc-600/20 rounded-full'>
                                                <FaLinkedin className="text-[20px] md:text-[30px]" />
                                            </a>
                                            <a href="https://github.com/RabiaSid" target="_blank" className='p-4 md:p-5 bg-zinc-600/20 rounded-full'>
                                                <FaGithub className="text-[20px] md:text-[30px]" />
                                            </a>
                                            {/* <a href="mailto:rabiaazhardev@gmail.com" target="_blank" className='p-5 bg-zinc-600/20 rounded-full'>
                                                    <FaFacebookF className="text-[30px]" />
                                                </a>
                                                <a href="mailto:rabiaazhardev@gmail.com" target="_blank" className='p-5 bg-zinc-600/20 rounded-full'>
                                                    <FaInstagram className="text-[30px]" />
                                                </a> */}
                                        </div>
                                    </motion.div>
                                </div>

                            </div>
                            <div className='flex basis-2/4 flex-col p-5 md:p-10 bg-zinc-600/20 rounded-2xl w-full'>
                                {/* Text */}
                                <motion.h2
                                    variants={fadeIn('down', 0.2)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='text-[30px] md:text-[40px] lg:h2 font-bold mb-4 xl:mb-6'
                                >
                                    Let's
                                    <span className='text-accent'> Connect</span>.
                                </motion.h2>
                                {/* Form */}
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;