//===== Imports
import React from 'react'
import Link from "next/link";
import Image from "next/image";
//===== Image
import roundTxt from 'media/rounded-text.png'
//===== Icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
    return (
        <>
            <div className='mx-auto xl:mx-0'>
                <Link
                    href={'/work'}
                    className='relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
                >
                    <Image
                        src={roundTxt}
                        width={110}
                        height={115}
                        alt="Button"
                        className='animate-spin-slow w-full h-full max-w-[78px] max-h-[83px] md:max-w-[110px] md:max-h-[115px]'
                    />
                    <HiArrowRight className='absolute text-2xl md:text-4xl group-hover:translate-x-2 transition-all duration-300' />
                </Link>
            </div>
        </>
    )
}

export default ProjectsBtn
