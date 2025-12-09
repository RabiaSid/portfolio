"use client"
//===== Imports
import React from 'react'
//===== Components
import { ProjectsBtn, ParticlesContainer } from "@/components";
//===== Former Motion
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'
//===== Varients
import { fadeIn } from '../variants';


const Hero = () => {
    return (
        <>
            <div className="bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative">
                {/* Text */}
                <div className='w-full h-[100dvh] md:h-full xl:h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black md:pt-[100px] md:pb-[140px] lg:py-[150px] xl:py-0'>
                    <div className='text-center flex flex-col justify-center items-center pt-0 w-full md:w-10/12 xl:w-6/12 h-full container mx-auto relative z-20'>
                        {/* Title */}
                        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mb-0" />
                        <h1
                            className="py-3.5 px-0.5 z-10 h1 text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-[50px] md:text-7xl xl:text-8xl whitespace-nowrap bg-clip-text">
                            Rabia Azhar
                        </h1>
                        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                        <motion.h1
                            className='text-[20px] md:text-[30px] xl:text-[40px] font-bold text-accent'
                        >
                            <TypeAnimation sequence={[
                                'Mern Stack Developer',
                                2000,
                                'React JS Developer',
                                2000
                            ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.h1>
                        {/* Description */}
                        <motion.p
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-3 md:mb-6 xl:mb-8 text-center'
                            priority="true"
                        >
                            A passionate MERN Stack and Front-End Developer with 3.5+ years of experience building high-performance, responsive, and modern web applications. I specialize in React.js, Next.js, Node.js, and UI/UX-focused development, delivering clean code, smooth user experiences, and scalable digital solutions. From landing pages to complex dashboards and eCommerce platforms, I turn ideas into polished, professional, and fully optimized web products.
                        </motion.p>
                        {/* Btn */}
                        <motion.div
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='flex'
                        >
                            <ProjectsBtn />
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

export default Hero
