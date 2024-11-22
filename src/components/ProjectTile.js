import './ProjectTile.css';
import BlankImage from '../assets/imgs/BlankProject.webp';

export default function ProjectTile({ projectName, projectDescription, projectImage, projectLink, outline }) {
    return (
        <div className={`project ${outline ? 'outline' : ''}`}>

            <img src={(projectImage ? projectImage : BlankImage)} className='project-image' alt={projectName} />
            {(!projectImage ? <div className='center-title'>{projectName}</div> : <></>)}

            <div className='project-content'>
                <div className='project-title'>
                    {projectName}
                </div>
                <div className='project-description'>
                    {projectDescription}

                    <a className='read-more' href={projectLink ? projectLink : false} target={projectLink ? '_blank' : false}>Read More</a>
                </div>
            </div>

        </div>
    )
}