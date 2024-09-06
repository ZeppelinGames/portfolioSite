import './Project.css';
import BlankImage from '../assets/imgs/BlankProject.webp';

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
            <img src={(projectImage ? projectImage : BlankImage)} className='project-image' alt={projectName}/>
            {(!projectImage ? <div className='center-title'>{projectName}</div> : <></>)}

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