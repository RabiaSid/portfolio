//===== Imports
import { motion } from 'framer-motion';

//=====  Data
const educationData = [
    {
        degree: (<> Bachelor of Science In <br /> Software Engineering </>),
        institution: 'Indus University, Karachi',
        years: '2018 - 2022',
    },
    {
        degree: (<> Intermediate In <br /> Computer Science </>),
        institution: 'Atta Shad Degree Collage, Quetta',
        years: '2014 - 2016',
    },
    {
        degree: (<> Matriculation In <br /> Science </>),
        institution: 'KGH High School, Quetta',
        years: '2012 - 2014',
    },
];

const EducationCards = ({ onMouseMove, style }) => {
    return (
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 lg:gap-y-12 w-full xl:w-[95%] h-full">
            {educationData.map((item, index) => (
                <div
                    key={index}
                    onMouseMove={onMouseMove}
                    className="col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 w-full"
                >
                    <div className="pointer-events-none">
                        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                        <motion.div
                            className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50"
                            style={style}
                        />
                        <motion.div
                            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                            style={style}
                        />
                    </div>
                    <div className="relative w-full h-full p-4 md:p-8">
                        <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>
                            {item.degree}
                        </div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>
                            {item.institution}
                        </div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>
                            {item.years}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default EducationCards;
