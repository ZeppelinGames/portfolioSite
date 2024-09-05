import './Project.css';

function Project({ projectName, projectDescription, projectImage, projectLink, outline }) {
    return (
        <>
            <a
                className={`project ${outline ? 'outline' : ''}`}
                href={projectLink ? projectLink : false}
                target={projectLink ? '_blank' : false}>
                {MainProjectContent({ projectName, projectDescription, projectImage })}
            </a>
        </>
    )
}

function MainProjectContent({ projectName, projectDescription, projectImage }) {
    return (
        <>
            <img src={projectImage} className='project-image' />
            <div className='project-content'>
                <div className='project-title'>
                    {projectName}
                </div>
                <div className='project-description'>
                    {projectDescription}
                </div>
            </div>
        </>
    );
}

export default Project;