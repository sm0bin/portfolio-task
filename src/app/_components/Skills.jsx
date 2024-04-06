import Image from 'next/image';
import React from 'react';
import SectionHead from '../_utils/SectionHead';

const Skills = ({ data }) => {
    const sortedSkills = data.user.skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);

    return (
        <div>
            <SectionHead title={'Skills'} />
            <div className="grid grid-cols-10 gap-4">
                {sortedSkills.map(skill => (
                    <div className="card bg-base-100 group hover:relative hover:z-20 ">
                        <figure className="px-10 pt-10 group-hover:scale-125 transition duration-300">
                            <Image src={skill.image.url} alt={skill.name} width={500} height={500} className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title group-hover:text-primary">{skill.name}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Skills;