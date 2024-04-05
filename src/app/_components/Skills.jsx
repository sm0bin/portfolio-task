import { getAllData } from '@/utils/getAllData';
import Image from 'next/image';
import React from 'react';
import SectionHead from '../_utils/SectionHead';

const Skills = ({ data }) => {
    const sortedSkills = data.user.skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);

    return (
        <div>
            <SectionHead title={'Skills'} />
            <div className="grid grid-cols-8 gap-4">
                {sortedSkills.map(skill => (
                    // <div key={skill.id} className="card shadow-lg bg-base-200">
                    //     <Image src={skill.image.url} alt={skill.name} width={500} height={500} />
                    //     <div className="card-body">
                    //         <h2 className="card-title">{skill.name}</h2>
                    //         <p>{skill.description}</p>
                    //     </div>
                    // </div>
                    <div className="card bg-base-100 group hover:relative hover:z-20 ">
                        <figure className="px-10 pt-10 group-hover:scale-125 transition duration-300">
                            <Image src={skill.image.url} alt={skill.name} width={500} height={500} className="" />
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