import { getAllData } from '@/utils/getAllData';
import Image from 'next/image';
import React from 'react';

const Projects = ({ data }) => {
    const sortedProjects = data.user.projects.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);

    return (
        <div>
            <h2>Projects</h2>
            <div className="grid grid-cols-3 gap-4">
                {sortedProjects.map(project => (
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <Image src={project.image.url} alt={project.name} width={500} height={500} className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end">
                                {/* <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div> */}
                                {
                                    project.techStack.map(tech => (
                                        <div className="badge badge-outline">{tech}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Projects;