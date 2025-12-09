"use client"
//===== Imports
import React from 'react'
import Link from 'next/link';
//===== Components
import { ParticlesContainer } from "@/components";
//===== Former Motion
import { motion } from 'framer-motion';
//===== Varients
import { fadeIn } from '../variants';


const ThankYou = () => {
    return (
        <>
            <div className="bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative">
                {/* Text */}
                <div className='w-full h-[100dvh] md:h-full xl:h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black md:pt-[100px] md:pb-[140px] lg:py-[150px] xl:py-0'>
                    <div className='text-center flex flex-col justify-center items-center pt-0 w-full md:w-10/12 xl:w-6/12 h-full container mx-auto relative z-20'>
                        {/* Title */}
                        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mb-0" />
                        <h1
                            className="py-3.5 px-0.5 z-10 h1 text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-[50px] md:text-6xl whitespace-nowrap bg-clip-text">
                            Thank You
                        </h1>
                        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                        {/* Description */}
                        <motion.p
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-3 md:mb-6 text-center'
                            priority="true"
                        >
                            Reviewing your details and will get back to you shortly.
                        </motion.p>
                        {/* Btn */}
                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='flex'
                        >
                            <Link href="/" className='border rounded-md px-3 py-2 bg-white/10 backdrop:blur-sm hover:bg-transparent'>Back To Home</Link>
                        </motion.div>
                    </div>
                    {/* Particles */}
                    <div className='w-full h-full absolute right-0 bottom-0 z-10'>
                        <ParticlesContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou
