import React from 'react'
import styled from 'styled-components'

import SectionTitle from '../components/SectionTitle'
import ProjectItem from '../components/ProjectItem'

import ProjectInfo from '../data/projects'

const ProjectsStyles = styled.div`
    padding: 10rem 0;
    .project__allItems {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
`

const Projects = () => {

    // const [projectData, setProjectData] = useState(ProjectInfo)

    return (
        <ProjectsStyles>
            <div className='container'>
                <SectionTitle
                    heading='Projects'
                    subheading='some of my recent works'
                />
                <div className='project__allItems'>
                    {
                        ProjectInfo.map((project) => {
                            return (
                                <ProjectItem
                                    key={project.id}
                                    title={project.name}
                                    desc={project.desc}
                                    img={project.img}
                                />
                            )
                        })
                    }
                </div>
            </div>

        </ProjectsStyles>
    )
}

export default Projects
