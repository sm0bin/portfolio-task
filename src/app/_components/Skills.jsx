import { getAllData } from '@/utils/getAllData';
import Image from 'next/image';
import React from 'react';

const Skills = ({ data }) => {
    const sortedSkills = data.user.skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);
    // const sortedSkills = data.user.skills.sort((a, b) => a.sequence - b.sequence);

    return (
        <div>
            <h2>Skills</h2>
            <div className="grid grid-cols-3 gap-4">
                {sortedSkills.map(skill => (
                    // <div key={skill.id} className="card shadow-lg bg-base-200">
                    //     <Image src={skill.image.url} alt={skill.name} width={500} height={500} />
                    //     <div className="card-body">
                    //         <h2 className="card-title">{skill.name}</h2>
                    //         <p>{skill.description}</p>
                    //     </div>
                    // </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            {/* <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
                            <Image src={skill.image.url} alt={skill.name} width={500} height={500} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{skill.name}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Skills;