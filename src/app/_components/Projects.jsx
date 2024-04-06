'use client';
import Image from 'next/image';
import React from 'react';
import SectionHead from '../_utils/SectionHead';

const Projects = ({ data }) => {
    const sortedProjects = data.user.projects.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);
    const [selectedProject, setSelectedProject] = React.useState(sortedProjects[0]);

    const handleShowProject = (project) => {
        setSelectedProject(project);
        document.getElementById('my_modal_5').showModal();
    }

    return (
        <div>
            <SectionHead title={'Projects'} />
            <div className="grid grid-cols-3 gap-4">
                {sortedProjects.map(project => (
                    <div className="card bg-base-100 border shadow-sm">
                        <figure>
                            <Image src={project.image.url} alt={project.title} width={500} height={500} className="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => handleShowProject(project)}
                                    className="btn btn-primary">See Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <dialog id="my_modal_5" className="modal">

                <div className="modal-box">
                    <figure>
                        <Image src={selectedProject.image.url} alt={selectedProject.title} width={500} height={500} className="rounded-md" />
                    </figure>
                    <h3 className="font-bold text-lg mt-2">{selectedProject.title}</h3>
                    <div className="card-actions justify-end">
                        {
                            selectedProject.techStack.map(tech => (
                                <div className="badge badge-outline">{tech}</div>
                            ))
                        }
                    </div>
                    <p className="py-4">{selectedProject.description}</p>
                    <div className="modal-action">
                        <a href={selectedProject.liveurl} target="_blank" className="btn btn-info">View Website</a>
                        <a href={selectedProject.githuburl} target="_blank" className="btn btn-info">View Code</a>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-[1000]">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Projects;