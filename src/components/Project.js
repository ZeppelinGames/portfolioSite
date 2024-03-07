import './Project.css';

function Project({ projectName, projectDescription, projectImage, projectLink }) {
    return (
        <a className='project' href={projectLink} target='_blank'>
            <img src={projectImage} className='project-image' />
            <div className='project-content'>
                <div className='project-title'>
                    {projectName}
                </div>
                <div className='project-description'>
                    {projectDescription}
                </div>
            </div>
        </a>
    )
}

export default Project;