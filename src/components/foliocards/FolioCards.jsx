"use client"
//===== Imports
import React, { useState } from "react";
import Image from "next/image";
//===== Icons
import { BsArrowRight } from "react-icons/bs";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
//===== Images
import web1 from 'media/thumbnils/web-1.webp'
import web2 from 'media/thumbnils/web-2.webp'
import web3 from 'media/thumbnils/web-3.webp'
import web4 from 'media/thumbnils/web-4.webp'
import web5 from 'media/thumbnils/web-5.webp'
import web6 from 'media/thumbnils/web-6.webp'
import web7 from 'media/thumbnils/web-7.webp'
import web8 from 'media/thumbnils/web-8.webp'
import web9 from 'media/thumbnils/web-9.webp'
import web10 from 'media/thumbnils/web-10.webp'
import web11 from 'media/thumbnils/web-11.webp'
import web12 from 'media/thumbnils/web-12.webp'
import web13 from 'media/thumbnils/web-13.webp'
import web14 from 'media/thumbnils/web-14.webp'
import web15 from 'media/thumbnils/web-15.webp'
import web16 from 'media/thumbnils/web-16.webp'
import web17 from 'media/thumbnils/web-17.webp'
import web18 from 'media/thumbnils/web-18.webp'
import web19 from 'media/thumbnils/web-19.webp'
import web20 from 'media/thumbnils/web-20.webp'
import web21 from 'media/thumbnils/web-21.webp'
import web22 from 'media/thumbnils/web-22.webp'
import web23 from 'media/thumbnils/web-23.webp'
import web24 from 'media/thumbnils/web-24.webp'
import web25 from 'media/thumbnils/web-25.webp'
import web26 from 'media/thumbnils/web-26.webp'
import web27 from 'media/thumbnils/web-27.webp'
import web28 from 'media/thumbnils/web-28.webp'
import web29 from 'media/thumbnils/web-29.webp'
import web30 from 'media/thumbnils/web-30.webp'
import web31 from 'media/thumbnils/web-31.webp'
import web32 from 'media/thumbnils/web-32.webp'
import web33 from 'media/thumbnils/web-33.webp'
import web34 from 'media/thumbnils/web-34.webp'
import web35 from 'media/thumbnils/web-35.webp'
import web36 from 'media/thumbnils/web-36.webp'
import web37 from 'media/thumbnils/web-37.webp'
import web38 from 'media/thumbnils/web-38.webp'
import web39 from 'media/thumbnils/web-39.webp'
import web40 from 'media/thumbnils/web-40.webp'
import web41 from 'media/thumbnils/web-41.webp'
import web42 from 'media/thumbnils/web-42.webp'
import web43 from 'media/thumbnils/web-43.webp'
import web44 from 'media/thumbnils/web-44.webp'
//==== Email Templates
import template1 from 'media/thumbnils/template1.webp'
import template2 from 'media/thumbnils/template2.webp'
import template3 from 'media/thumbnils/template3.webp'
import template4 from 'media/thumbnils/template4.webp'
import template5 from 'media/thumbnils/template5.webp'
import template6 from 'media/thumbnils/template6.webp'
import template7 from 'media/thumbnils/template7.webp'
//==== LPs
import lp1 from 'media/thumbnils/lp-1.webp'
import lp2 from 'media/thumbnils/lp-2.webp'
import lp3 from 'media/thumbnils/lp-3.webp'
import lp4 from 'media/thumbnils/lp-4.webp'
import lp5 from 'media/thumbnils/lp-5.webp'
import lp6 from 'media/thumbnils/lp-6.webp'
import lp7 from 'media/thumbnils/lp-7.webp'
import lp8 from 'media/thumbnils/lp-8.webp'
import lp9 from 'media/thumbnils/lp-9.webp'
import lp10 from 'media/thumbnils/lp-10.webp'
import lp11 from 'media/thumbnils/lp-11.webp'


//===== Data
const websites = [
    // {
    //     title: 'title',
    //     path: web28,
    //     url: 'https://tyndalehousepublishing.co',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    {
        title: 'title',
        path: web23,
        url: 'https://www.realestateagents.com/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    },
    {
        title: 'title',
        path: web25,
        url: 'https://www.lazaret4.hr/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PSD'],
    },
    {
        title: 'title',
        path: web26,
        url: 'https://fsf-mart-pk.netlify.app/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Figma'],
    },
    // {
    //     title: 'title',
    //     path: web18,
    //     url: 'https://farooqaziz.netlify.app/websites/cryptocurrency-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PSD'],
    // },
    // {
    //     title: 'title',
    //     path: web19,
    //     url: 'https://farooqaziz.netlify.app/websites/coffee-shop-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web3,
    //     url: 'https://farooqaziz.netlify.app/websites/spa-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Figma'],
    // },
    // {
    //     title: 'title',
    //     path: web15,
    //     url: 'https://farooqaziz.netlify.app/websites/ecommerce-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web5,
    //     url: 'https://farooqaziz.netlify.app/websites/shipping-company-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web21,
    //     url: 'https://farooqaziz.netlify.app/websites/bakery-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Figma'],
    // },
    // {
    //     title: 'title',
    //     path: web7,
    //     url: 'https://farooqaziz.netlify.app/websites/security-guard-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web8,
    //     url: 'https://farooqaziz.netlify.app/websites/real-estate-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PSD'],
    // },
    // {
    //     title: 'title',
    //     path: web9,
    //     url: 'https://farooqaziz.netlify.app/websites/preschool-website-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PSD'],
    // },
    // {
    //     title: 'title',
    //     path: web10,
    //     url: 'https://farooqaziz.netlify.app/websites/physical-therapy-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web11,
    //     url: 'https://farooqaziz.netlify.app/websites/photo-studio-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web12,
    //     url: 'https://farooqaziz.netlify.app/websites/laboratory-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web13,
    //     url: 'https://farooqaziz.netlify.app/websites/hair-salon-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    {
        title: 'title',
        path: web24,
        url: 'https://barbaracamp.com/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PSD'],
    },
    // {
    //     title: 'title',
    //     path: web14,
    //     url: 'https://farooqaziz.netlify.app/websites/gym-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web4,
    //     url: 'https://farooqaziz.netlify.app/websites/solar-energy-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web16,
    //     url: 'https://farooqaziz.netlify.app/websites/driving-school-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web17,
    //     url: 'https://farooqaziz.netlify.app/websites/dental-clinic-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web1,
    //     url: 'https://farooqaziz.netlify.app/websites/travel-agency-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web22,
    //     url: 'https://farooqaziz.netlify.app/websites/ac-repair-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web20,
    //     url: 'https://farooqaziz.netlify.app/websites/cctv-camera-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    // {
    //     title: 'title',
    //     path: web6,
    //     url: 'https://farooqaziz.netlify.app/websites/seo-agency-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Figma'],
    // },
    // {
    //     title: 'title',
    //     path: web2,
    //     url: 'https://farooqaziz.netlify.app/websites/tourist-website/',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XD'],
    // },
    {
        title: 'title',
        path: web27,
        url: 'https://prescription-pk.netlify.app/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PSD'],
    }
]
// ==============
const reactnext = [
    {
        title: 'title',
        path: web44,
        url: 'https://aiproresume.com/',
        tags: ['React.JS', 'Next.JS', 'Tailwind css'],
    },
    {
        title: 'title',
        path: web29,
        url: 'https://bitswits.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: web30,
        url: 'https://videoanimations.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: web31,
        url: 'https://web-apps-new.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web32,
        url: 'https://orm-new.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web33,
        url: 'https://seo-company-new.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web34,
        url: 'https://bookmarketing.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web35,
        url: 'https://infinityanimations.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web36,
        url: 'https://bhaoo-inc-new.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web37,
        url: 'https://mini-investment.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web38,
        url: 'https://cloudstudios-new.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web39,
        url: 'https://creativelogodesigns.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: web40,
        url: 'https://bestsellingpublisher.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind', 'Bootstrap'],
    },
    {
        title: 'title',
        path: web41,
        url: 'https://amazonsquare.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: web42,
        url: 'https://bookwritingexperts-new.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: web43,
        url: 'https://crystallite-digital.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
]
// ==================
const landingPages = [
    {
        title: 'title',
        path: lp1,
        url: 'https://bitswits-lps.vercel.app/app-marketing',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: lp2,
        url: 'https://bitswits-lps.vercel.app/mobile-app-development-services',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: lp3,
        url: 'https://bitswits-lps.vercel.app/website-development-services',
        tags: ['React.JS', 'Next.JS', 'Bootstrap'],
    },
    {
        title: 'title',
        path: lp4,
        url: 'https://infinityanimations-lps.vercel.app/animated-games',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: lp5,
        url: 'https://infinityanimations-lps.vercel.app/animated-healthcare',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: lp6,
        url: 'https://infinityanimations-lps.vercel.app/animating-studio',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: lp7,
        url: 'https://bestsellingpublisher-lps.vercel.app/audiobook-production-services',
        tags: ['React.JS', 'Next.JS', 'Tailwind', 'Bootstrap'],
    },
    {
        title: 'title',
        path: lp8,
        url: 'https://bestsellingpublisher-lps.vercel.app/book-publishing-company',
        tags: ['React.JS', 'Next.JS', 'Tailwind', 'Bootstrap'],
    },
    {
        title: 'title',
        path: lp9,
        url: 'https://bestsellingpublisher-lps.vercel.app/book-marketing-company',
        tags: ['React.JS', 'Next.JS', 'Tailwind', 'Bootstrap'],
    },
    {
        title: 'title',
        path: lp11,
        url: 'https://farooqaziz.netlify.app/lps/ios-app-development-services/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: lp10,
        url: 'https://farooqaziz.netlify.app/lps/top-rated-seo-services/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
]
// ==================
const ecommerce = [
    {
        title: 'title',
        path: web26,
        url: 'https://fsf-mart-pk.netlify.app/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: web19,
        url: 'https://farooqaziz.netlify.app/websites/coffee-shop-website/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: web15,
        url: 'https://farooqaziz.netlify.app/websites/ecommerce-website/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: web21,
        url: 'https://farooqaziz.netlify.app/websites/bakery-website/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: web24,
        url: 'https://barbaracamp.com/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: web27,
        url: 'https://prescription-pk.netlify.app/',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    }
]
// ==================
// const email = [
//     {
//         title: 'title',
//         path: template1,
//         url: 'https://farooqaziz.netlify.app/email-templates/001',
//         tags: ['HTML', 'CSS'],
//     },
//     {
//         title: 'title',
//         path: template2,
//         url: 'https://farooqaziz.netlify.app/email-templates/002',
//         tags: ['HTML', 'CSS'],
//     },
//     {
//         title: 'title',
//         path: template3,
//         url: 'https://farooqaziz.netlify.app/email-templates/003/',
//         tags: ['HTML', 'CSS'],
//     },
//     {
//         title: 'title',
//         path: template4,
//         url: 'https://farooqaziz.netlify.app/email-templates/004/',
//         tags: ['HTML', 'CSS'],
//     },
//     {
//         title: 'title',
//         path: template5,
//         url: 'https://farooqaziz.netlify.app/email-templates/005/',
//         tags: ['HTML', 'CSS'],
//     },
//     {
//         title: 'title',
//         path: template6,
//         url: 'https://farooqaziz.netlify.app/email-templates/006/',
//         tags: ['HTML', 'CSS'],
//     },
//     {
//         title: 'title',
//         path: template7,
//         url: 'https://farooqaziz.netlify.app/email-templates/007/',
//         tags: ['HTML', 'CSS'],
//     },
// ]

const FolioCards = () => {
    // ===========================
    const [activeTab, setActiveTab] = useState("Websites");
    const [selectedWorkUrl, setSelectedWorkUrl] = useState(null);

    const handleTabClick = (tabId, workUrl) => {
        setActiveTab(tabId);
        setSelectedWorkUrl(workUrl);
    };

    return (
        <>
            <div className="w-full xl:w-[95%]">
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial='hidden'
                    whileInView='show'
                    exit='hidden'
                    className="tabs flex flex-wrap justify-center lg:justify-around gap-5 md:gap-16 gap-y-5 md:gap-y-8 lg:gap-0 mb-12"
                >
                    <button
                        className={`tab ${activeTab === "Websites" ? "active text-accent border-accent" : ""} btn border border-white/50 px-2 md:px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Websites")}
                    >
                        <span className="mb-[-5px]">Websites</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "ReactNext" ? "active text-accent border-accent" : ""} btn border border-white/50 px-2 md:px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("ReactNext")}
                    >
                        <span className="mb-[-2px]">React/Next</span>

                    </button>
                    <button
                        className={`tab ${activeTab === "Landing Pages" ? "active text-accent border-accent" : ""} btn border border-white/50 px-2 md:px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Landing Pages")}
                    >
                        <span className="mb-[-2px]">Landing Pages</span>

                    </button>
                    <button
                        className={`tab ${activeTab === "ECommerce" ? "active text-accent border-accent" : ""} btn border border-white/50 px-2 md:px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("ECommerce")}
                    >
                        <span className="mb-[-4px]">ECommerce</span>
                    </button>
                    {/* <button
                        className={`tab ${activeTab === "Email Templates" ? "active text-accent border-accent" : ""} btn border border-white/50 px-2 md:px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Email Templates")}
                    >
                        <span className="mb-[-4px]">Email Templates</span>
                    </button> */}
                </motion.div>
                {/* =================== */}
                <div className="workslider mb-24 xl:mb-12">
                    {activeTab === "Websites" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                websites.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-end justify-between px-5">
                                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-[6px] w-[75%] md:w-[80%] lg:w-[60%] xl:w-[85%]">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "ReactNext" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                reactnext.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "Landing Pages" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                landingPages.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "ECommerce" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                ecommerce.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "Email Templates" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                email.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full h-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FolioCards
