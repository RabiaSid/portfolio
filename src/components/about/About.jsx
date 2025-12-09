"use client"
//===== Imports
import React from "react";
import Link from "next/link";
import Image from "next/image";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
//===== Counter
import CountUp from "react-countup";
//===== Components
import { CertificationCards, EducationCards, ExpericenceCards, SkillCards } from "@/components";
//===== Image
import profile from '../../../public/profile.jpg'

const About = () => {
    return (
        <>
            <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative'>
                <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
                    <div className='container mx-auto h-auto lg:h-full flex flex-col items-start gap-x-6 pt-8 md:pt-28 lg:pt-8'>
                        <div className="grid grid-cols-12 items-center relative pt-[70px] md:pt-0 pb-14 md:pb-20 lg:pb-0">
                            <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
                                <div className="bg-white/10 p-6 xl:p-8 rounded-3xl">
                                    <motion.div
                                        variants={fadeIn('down', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'>
                                        <Image src={profile} alt="Profile" className="rounded-2xl xl:rounded-3xl w-full" />
                                    </motion.div>
                                    <div>
                                        <motion.h2
                                            variants={fadeIn('right', 0.2)}
                                            initial='hidden'
                                            animate='show'
                                            exit='hidden'
                                            className='text-[24px] leading-[34px] xl:text-[30px] xl:leading-[40px] font-bold text-center mt-5 mb-0'
                                        >
                                            Rabia Azhar
                                        </motion.h2>
                                        <motion.p
                                            variants={fadeIn('left', 0.4)}
                                            initial='hidden'
                                            animate='show'
                                            exit='hidden'
                                            className='w-full text-[14px] md:text-[16px] text-center'
                                        >
                                            MERN Stack Developer
                                        </motion.p>
                                    </div>
                                    <div className="mt-6">
                                        <Link href="/contact" className="text-[14px] md:text-[16px] text-black text-center w-full h-[40px] bg-white flex items-center justify-center rounded-md">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-9 order-1 lg:order-2">
                                <div className='flex flex-col justify-center h-full xl:h-screen relative pt-[0px] pb-0 md:pt-[50px] md:pb-[50px] lg:py-[150px] xl:py-0'>
                                    <motion.h2
                                        variants={fadeIn('right', 0.2)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='text-[30px] font-bold md:h2 text-center'
                                    >
                                        About <span className='text-accent'>Me</span>.
                                    </motion.h2>
                                    <motion.p
                                        variants={fadeIn('right', 0.4)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='w-full lg:w-[90%] xl:w-[80%] mx-auto mb-6 md:mb-10 xl:mb-12 px-0 text-[14px] md:text-[16px] text-center'
                                    >
                                        I am a MERN Stack Developer with 3.5+ years of experience creating modern, scalable,
                                        and user-focused web applications. I specialize in React.js, Next.js, Node.js, and
                                        intuitive UI/UX development. My expertise includes building responsive, high-performance,
                                        and pixel-perfect interfaces using Tailwind CSS, Bootstrap, Framer Motion, and
                                        industry-standard tools. I focus on delivering clean code, smooth interactions, and
                                        seamless user experiences that elevate every project.
                                    </motion.p>
                                    {/* Counters */}
                                    <motion.div
                                        variants={fadeIn('right', 0.6)}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className='flex mb-8'
                                    >
                                        <div className='flex justify-center flex-1 gap-x-10 md:gap-x-20 xl:gap-x-6'>
                                            {/* Experience */}
                                            <div className='relative flex flex-col items-center w-full after:w-[1px] after:h-full after:bg-slate-600 after:absolute after:top-0 after:right-[-20px] md:after:right-[-45px] xl:after:right-[0px]'>
                                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 md:mb-4'>
                                                    <CountUp start={0} end={3} duration={5} /> +
                                                </div>
                                                <div className='text-xs text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                                    Years of experience
                                                </div>
                                            </div>
                                            {/* Clients */}
                                            <div className='relative flex flex-col items-center w-full after:w-[1px] after:h-full after:bg-slate-600 after:absolute after:top-0 after:right-[-20px] md:after:right-[-45px] xl:after:right-[0px]'>
                                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 md:mb-4'>
                                                    <CountUp start={0} end={15} duration={5} /> +
                                                </div>
                                                <div className='text-xs text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                                    Satisfied Clients
                                                </div>
                                            </div>
                                            {/* Projects */}
                                            <div className='relative flex flex-col items-center w-full'>
                                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 md:mb-4'>
                                                    <CountUp start={0} end={25} duration={5} /> +
                                                </div>
                                                <div className='text-xs text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                                    Finished Projects
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="mouseScroll hidden lg:block">
                                <div className="mouse"></div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-10 md:gap-y-12 w-full relative lg:pt-[30px] pb-[100px] overflow-x-hidden'>
                            <motion.div
                                variants={fadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView='show'
                                exit='hidden'
                                className='w-full flex flex-col gap-y-4 xl:gap-y-6 items-start'
                            >
                                <div className="cursor-default capitalize text-[24px] md:text-[30px] font-semibold text-accent relative after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4">
                                    Skills
                                </div>
                                <SkillCards />
                            </motion.div>
                            <div className="w-full xl:w-[95%] h-px bg-slate-600"></div>
                            <motion.div
                                variants={fadeIn('right', 0.4)}
                                initial='hidden'
                                whileInView='show'
                                exit='hidden'
                                className='w-full flex flex-col gap-y-4 xl:gap-y-6 items-start'
                            >
                                <div
                                    className="cursor-default capitalize text-[24px] md:text-[30px] font-semibold text-accent relative after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Expericence
                                </div>
                                <ExpericenceCards />
                            </motion.div>
                            <div className="w-full xl:w-[95%] h-px bg-slate-600"></div>
                            <motion.div
                                variants={fadeIn('left', 0.4)}
                                initial='hidden'
                                whileInView='show'
                                exit='hidden'
                                className='w-full flex flex-col gap-y-4 xl:gap-y-6 items-start'
                            >
                                <div
                                    className="cursor-default capitalize text-[24px] md:text-[30px] font-semibold text-accent relative after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Education
                                </div>
                                <EducationCards />
                            </motion.div>
                            <div className="w-full xl:w-[95%] h-px bg-slate-600"></div>
                            <motion.div
                                variants={fadeIn('up', 0.4)}
                                initial='hidden'
                                whileInView='show'
                                exit='hidden'
                                className='w-full flex flex-col gap-y-4 xl:gap-y-6 items-start'
                            >
                                <div
                                    className="cursor-default capitalize text-[24px] md:text-[30px] font-semibold text-accent relative after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Certification
                                </div>
                                <CertificationCards />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;