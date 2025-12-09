"use client"
//===== Imports
import React from "react";
//===== Components
import { FolioCards } from "@/components";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const Work = () => {
    return (
        <>
            <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative'>
                {/* About me */}
                <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black pt-[100px] xl:pt-[150px] 2xl:pt-[200px]'>
                    <div className='container mx-auto h-auto lg:h-full flex flex-col items-center'>
                        {/* Text */}
                        <div className='flex flex-col justify-center items-center'>
                            <motion.h2
                                variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                whileInView='show'
                                exit='hidden'
                                className='text-[30px] font-bold md:h2'
                            >
                                Projects & <span className='text-accent'>Creations</span>.
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('right', 0.4)}
                                initial='hidden'
                                whileInView='show'
                                exit='hidden'
                                className='w-full xl:w-[90%] xl:mx-0 mb-6 xl:mb-12 px-0 text-[14px] md:text-[16px] text-center'
                            >
                                Explore my portfolio, where you'll find a vibrant showcase of my web development expertise. I've had the pleasure of creating a diverse range of dynamic projects across various industries. Dive in and discover how my innovative approach can transform and elevate your online presence.
                            </motion.p>
                            <div className="w-full xl:w-[90%] h-px bg-slate-600"></div>
                        </div>
                        {/* Portfolio */}
                        <div className='w-full mt-14'>
                            <FolioCards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Work;