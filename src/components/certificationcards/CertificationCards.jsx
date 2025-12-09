//===== Imports
import { motion } from 'framer-motion';

//=====  Data
const certification = [
    {
        title: 'Advance Game Development',
        company: 'NeXskill, Karachi',
        stage: '2024',
    },
    {
        title: 'JavaScript',
        company: 'kandi.openweaver.com',
        stage: '2022',
    },
    {
        title: 'Html5 & Css3',
        company: 'pirple.com',
        stage: '2021',
    },
    {
        title: 'Web & Mobile App Development',
        company: 'Jawan Pakistan, Karachi',
        stage: '2020',
    },
    {
        title: 'WordPress',
        company: 'Digiskills Training Program',
        stage: '2020',
    },
    {
        title: 'SEO (Search Engine Optimization)',
        company: 'Digiskills Training Program',
        stage: '2020',
    },
    {
        title: 'Freelancing',
        company: 'Digiskills Training Program',
        stage: '2020',
    },
    {
        title: 'Graphic Design',
        company: 'Digiskills Training Program',
        stage: '2020',
    },
    {
        title: ' E-Commerce Management',
        company: 'Digiskills Training Program',
        stage: '2020',
    },
    {
        title: 'Certified Information Technology',
        company: 'Global Computer Institute',
        stage: '2017',
    },
];

const CertificationCards = ({ onMouseMove, style }) => {
    return (
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 w-full xl:w-[95%] h-full">
            {certification.map(({ title, company, stage}, index) => (
                <div key={index} onMouseMove={onMouseMove} className="col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600">
                    <div className="pointer-events-none">
                        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                        <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50" style={style} />
                        <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                    </div>
                    <div className="relative w-full h-full p-4 md:p-8">
                        <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>{title}</div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{company}</div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{stage}</div>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default CertificationCards;
