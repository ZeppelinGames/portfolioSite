import { useState, useEffect, useRef } from 'react';
import './Project.css';

function Project({ projectName, projectDescription, projectImage, projectLink }) {
    const [width, setWidth] = useState(window.innerWidth);
    const mainDiv = useRef(null);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    function MobileClick() {
        if (isMobile) {
            if (mainDiv.current.classList.contains("hover")) {
                window.open(projectLink, '_blank').focus();
            } else {
                mainDiv.current.classList.add("hover");
            }
        } else {
            window.open(projectLink, '_blank').focus();
        }
    }

    return (
        <div className='project' onClick={MobileClick} href={projectLink} ref={mainDiv}>
            <img src={projectImage} className='project-image' alt={projectName + " background"} />
            <div className='project-content'>
                <div className='project-title'>
                    {projectName}
                </div>
                <div className='project-description'>
                    {projectDescription}
                </div>
            </div>
        </div>
    )
}

export default Project;