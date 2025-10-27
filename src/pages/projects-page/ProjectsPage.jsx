import "./ProjectsPage.css";

import projectsData from "./projects.json";

import { Project } from "./Project";

export function ProjectsPage()
{
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <div className="projects-header">
                    <h1>Projects</h1>
                </div>
                <div className="projects-grid">
                    {
                        projectsData.projects.map((project) =>
                        {
                            return <Project
                                        key={project.id}
                                        name={project.name}
                                        description={project.description}
                                        stack={project.stack}
                                        image={project.image}
                                        url={project.url}
                                   />
                        })
                    }
                </div>
            </div>
        </section>
    )
}