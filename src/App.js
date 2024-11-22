import React, { Component } from 'react';
import ProjectTile from './components/ProjectTile';
import './App.css';

import GithubLogo from './assets/imgs/socials/github-mark-white.webp';
import ItchLogo from './assets/imgs/socials/itchio.webp';
import LinkedInLogo from './assets/imgs/socials/linkedin.webp';
import TwitterLogo from './assets/imgs/socials/twitter.webp';
import BskyLogo from './assets/imgs/socials/BskyIcon.webp';

import ComputerSpin from './assets/imgs/compSpin.gif';
import JoystickSpin from './assets/imgs/joySpinRev.gif';

import ScrollArrow from './assets/imgs/down.webp';

import { projectCategories } from './ProjectData';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="main-window">

                    <img id="backgroundLeft" src={ComputerSpin} alt='' />
                    <img id="backgroundRight" src={JoystickSpin} alt='' />

                    <div id="main-flex">

                        <div id="main" className="content-window">
                            <div id="main-window-content">
                                <div className="subtitle">Hey I'm</div>
                                <div className="title">Mark Saba.</div>
                                <div className="subtitle">game developer. frontend dev. hardware tinkerer.</div>
                                <div className="links">
                                    <a className="linkLink" href="https://github.com/zeppelingames" target="_blank">
                                        <img className="linkImage" alt="Github" src={GithubLogo} />
                                    </a>
                                    <a className="linkLink" href="https://zeppelin-games.itch.io/" target="_blank">
                                        <img className="linkImage" alt="Itch.io" src={ItchLogo} />
                                    </a>
                                    <a className="linkLink" href="https://www.linkedin.com/in/mark-saba-672691250/" target="_blank">
                                        <img className="linkImage" alt="LinkedIn" src={LinkedInLogo} />
                                    </a>
                                    <a className="linkLink" href="https://twitter.com/mark_saba_" target="_blank">
                                        <img className="linkImage" alt="Twitter" src={TwitterLogo} />
                                    </a>
                                    <a className="linkLink" href="https://bsky.app/profile/mark.pixelpasture.studio" target="_blank">
                                        <img className="linkImage" alt="Bsky" src={BskyLogo} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="downArrow" src={ScrollArrow} alt="Scroll Arrow" />
                </div>

                <hr />

                <div id="main-content">
                    {Object.keys(projectCategories).map((k) => {
                        return (
                            <section key={k}>
                                <div className="content-title">{k}</div>
                                <div className="projects">
                                    {projectCategories[k].map((p) => {
                                        return (
                                            <ProjectTile
                                                key={p.projectName}
                                                projectName={p.projectName}
                                                projectDescription={p.projectDescription}
                                                projectImage={p.projectImage}
                                                projectLink={p.projectLink}
                                                outline={p.outline}
                                            />
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}
                </div>

                <hr />

                <section className="footer">
                    Mark Saba 2024
                </section>
            </div>
        );
    }
}

export default App;