"use client"
//===== Imports
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
//===== Image
import logo from "media/logo.png"
//===== Components
import { Socials } from "@/components";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <header className={`w-full flex items-center px-0 h-[60px] xl:h-[90px] fixed top-0 left-0 z-[99] xl:z-50 ${isScrolled ? 'bg-black/20 backdrop-blur' : ''}`}>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center gap-y-6 py-0 xl:py-8'>
                        {/* Logo */}
                        <Link href={'/'} className='block text-lg'>
                            <Image
                                src={logo}
                                alt="Logo"
                                priority={true}
                                className="invert w-[50px] xl:w-[70px] h-auto"
                            />
                        </Link>
                        {/* Socials */}
                        <Socials />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
