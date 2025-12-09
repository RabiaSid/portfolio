"use client"
//===== Imports
import React from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation"
//===== Icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiEnvelope,
} from 'react-icons/hi2';
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

//===== Nav Data
export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

const Nav = () => {
    const router = usePathname();
    const pathname = router
    return (
        <>
            <nav className='flex flex-col items-center justify-end xl:justify-center gap-y-3 fixed bottom-0 right-0 mt-auto xl:right-[1%] z-50 xl:top-0 w-full xl:w-14 xl:max-w-md xl:h-screen'>
                {/* Inner */}
                <div className='flex w-full xl:flex-col items-center justify-around xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[65px] md:h-[60px] xl:h-max py-8 bg-site xl:bg-white/10 backdrop:blur-sm text-3xl xl:text-xl xl:rounded-full'>
                    {navData.map((link, index) => {
                        return (
                            <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
                                href={link.path}
                                key={index}
                                aria-label="Navbar"
                            >
                                {/* Tooltip */}
                                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                                    <div className='bg-white relative text-primary flex items-center p-[6px] rounded-[3px]'>
                                        <div className='text-[12px] leading-none font-semibold capitalize'>
                                            {link.name}
                                        </div>
                                        {/* Triangle */}
                                        <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                                    </div>
                                </div>
                                {/* Icons */}
                                <motion.div
                                    variants={fadeIn('left', 0.2 + index * 0.1)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                >
                                    <div className='text-[24px] md:text-[28px] lg:text-[24px]'>{link.icon}</div>
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Nav
