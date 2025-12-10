//===== Imports
import { motion } from 'framer-motion';

//=====  Data
const experience = [
  {
    title: 'Senior Front-End Developer',
    company: 'Cognitive IT Solutions',
    stage: 'Dec 2024 – Present | Karachi, Pakistan',
    details: [
      "Improved UI rendering speed by 30% and reduced layout shifts by 40%, enhancing overall user experience.",
      "Built reusable React components and optimized API integrations for high performance.",
      "Enhanced frontend architecture performance and scalability."
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Crystallite Pvt Ltd',
    stage: 'Apr 2024 – Nov 2024 | Karachi, Pakistan',
    details: [
      "Converted UI designs into pixel-perfect layouts while improving component performance.",
      "Enhanced API request handling, delivering stable and responsive user experiences.",
      "Developed advanced UIs using React.js, Next.js, emphasizing reusability and optimization."
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Blakaces',
    stage: 'Aug 2022 – Apr 2023 | Karachi, Pakistan',
    details: [
      "Developed frontend apps using React & JavaScript, delivering clean UI and smooth deployment cycles.",
      "Created websites for Real Estate, Hotel Management, SEO companies, eBook Publishers, and Digital Marketing Agencies.",
      "Tested, debugged, and optimized code to ensure compatibility and stability across browsers and devices."
    ]
  },
];


const ExpericenceCards = ({ onMouseMove, style }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full xl:w-[95%]">
            {experience.map(({ title, company, stage, details }, index) => (
                <div key={index} onMouseMove={onMouseMove} className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                    <div className="pointer-events-none">
                        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                        <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50" style={style} />
                        <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                    </div>
                    <div className="relative w-full h-full p-4 md:p-8">
                        <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>{title}</div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{company}</div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{stage}</div>
                        {details && details.length > 0 && (
                            <ul className='ps-4 mt-2 flex flex-col gap-1'>
                                {details.map((detail, detailsItemIndex) => (
                                    <li key={detailsItemIndex} className="list-disc text-[15px] text-left mb-0">{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExpericenceCards;
