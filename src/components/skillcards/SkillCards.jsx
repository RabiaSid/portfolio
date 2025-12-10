//===== Imports
import { motion } from 'framer-motion';
//===== Icons
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiBootstrap,
    SiTailwindcss,
    SiUnity,
    SiCsharp,
    SiGithub,
    SiFirebase,
    SiAdobephotoshop,
    SiAdobexd,
    SiFigma,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiFramer,
    SiTypescript,
    SiRedux
} from 'react-icons/si';

//=====  Data
const skills = [
    { icon: <SiHtml5 className="text-[40px] xl:text-[35px]" />, label: 'HTML' },
    { icon: <SiCss3 className="text-[40px] xl:text-[35px]" />, label: 'CSS' },
    { icon: <SiJavascript className="text-[40px] xl:text-[35px]" />, label: 'JavaScript' },
    { icon: <SiTypescript className="text-[40px] xl:text-[35px]" />, label: 'TypeScript' },
    { icon: <SiReact className="text-[40px] xl:text-[35px]" />, label: 'React.Js' },
    { icon: <SiNextdotjs className="text-[40px] xl:text-[35px]" />, label: 'Next.Js' },
    { icon: <SiBootstrap className="text-[40px] xl:text-[35px]" />, label: 'Bootstrap' },
    { icon: <SiTailwindcss className="text-[40px] xl:text-[35px]" />, label: 'Tailwind' },
    { icon: <SiRedux className="text-[40px] xl:text-[35px]" />, label: 'Redux' },
    // { icon: <SiFramer className="text-[40px] xl:text-[35px]" />, label: 'Framer' },
    { icon: <SiNodedotjs className="text-[40px] xl:text-[35px]" />, label: 'Node.js' },
    { icon: <SiMongodb className="text-[40px] xl:text-[35px]" />, label: 'MongoDB' },
    // { icon: <SiMysql className="text-[40px] xl:text-[35px]" />, label: 'MySQL' },
    { icon: <SiFirebase className="text-[40px] xl:text-[35px]" />, label: 'Firebase' },
    { icon: <SiGithub className="text-[40px] xl:text-[35px]" />, label: 'GitHub' },
    // { icon: <SiCsharp className="text-[40px] xl:text-[35px]" />, label: 'C#' },
    // { icon: <SiUnity className="text-[40px] xl:text-[35px]" />, label: 'Unity' },
    { icon: <SiFigma className="text-[40px] xl:text-[35px]" />, label: 'Figma' },
    // { icon: <SiAdobephotoshop className="text-[40px] xl:text-[35px]" />, label: 'Photoshop' },
    { icon: <SiAdobexd className="text-[40px] xl:text-[35px]" />, label: 'Adobe XD' },
];


const SkillCards = ({ onMouseMove, style }) => {
    return (
        <div className="flex flex-wrap justify-between xl:justify-start gap-x-12 gap-y-10">
            {skills.map((skill, index) => (
                <div key={index} onMouseMove={onMouseMove} className="w-[42%] md:w-[20%] lg:w-[14%] xl:w-[10%] overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600">
                    <div className="pointer-events-none">
                        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                        <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50" style={style} />
                        <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                    </div>
                    <div className="relative w-full h-full px-4 py-6 xl:py-8 flex flex-col justify-center items-center gap-4 xl:gap-2">
                        {skill.icon}
                        <span className='text-[16px] xl:text-[14px] text-white tracking-wider'>{skill.label}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillCards;
