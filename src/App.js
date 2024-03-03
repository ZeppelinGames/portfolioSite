import React, { Component } from 'react';
import './App.css';

import GithubLogo from './assets/imgs/github-mark-white.png';
import ItchLogo from './assets/imgs/itchio.png';
import LinkedInLogo from './assets/imgs/linkedin.png';
import TwitterLogo from './assets/imgs/twitter.png';

import ComputerSpin from './assets/imgs/compSpin.gif';
import JoystickSpin from './assets/imgs/joySpinRev.gif';

import ScrollArrow from './assets/imgs/down.webp';

import TMPLogo from './assets/imgs/projects/themasterspupil.webp';
import WWULogo from './assets/imgs/projects/whichwayup.webp';
import KopiLogo from './assets/imgs/projects/kopisu.webp';
import EternalForestLogo from './assets/imgs/projects/eternalforest.webp';
import HermannsburgLogo from './assets/imgs/projects/hermannsburg.webp';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="main-window">

                    <img id="backgroundLeft" src={ComputerSpin} />
                    <img id="backgroundRight" src={JoystickSpin} />

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
                                </div>

                                <div className="links">
                                    <a className="linkLink" href="pages/games.html"><u>Games</u></a>
                                    <a className="linkLink" href="pages/projects.html"><u>Projects</u></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="downArrow" src={ScrollArrow} alt="Scroll Arrow"/>
                </div>

                <hr/>

                    <div id="main-content">
                        <section id="projects-section">
                            <div className="content-title">Projects</div>
                            <div className="projects">

                                <a className="project" href="https://www.themasterspupil.com/" target="_blank">
                                    <img src={TMPLogo} className="project-image" />
                                    <div className="project-content">
                                        <div className="project-title">
                                            The Master's Pupil
                                        </div>
                                        <div className="project-description">
                                            Description goes here about what I worked on
                                        </div>
                                    </div>
                                </a>

                                <a className="project" href="https://www.whichwayup.info/" target="_blank">
                                    <img src={WWULogo} className="project-image" />
                                    <div className="project-content">
                                        <div className="project-title">
                                            Which Way Up
                                        </div>
                                        <div className="project-description">
                                            Description goes here about what I worked on
                                        </div>
                                    </div>
                                </a>

                                <a className="project" href="https://www.kopisustudio.com/" target="_blank">
                                    <img src={KopiLogo} className="project-image" />
                                    <div className="project-content">
                                        <div className="project-title">
                                            Kopi Su Studio Website
                                        </div>
                                        <div className="project-description">
                                            Description goes here about what I worked on
                                        </div>
                                    </div>
                                </a>

                                <a className="project" href="https://kopisustudio.com/work/eternalforest" target="_blank">
                                    <img src={EternalForestLogo} className="project-image" />
                                    <div className="project-content">
                                        <div className="project-title">
                                            The Eternal Forest
                                        </div>
                                        <div className="project-description">
                                            Description goes here about what I worked on
                                        </div>
                                    </div>
                                </a>

                                <a className="project" href="https://www.hermannsburgpotters.com.au/" target="_blank">
                                    <img src={HermannsburgLogo} className="project-image" />
                                    <div className="project-content">
                                        <div className="project-title">
                                            Hermannsburg Potters Landing Page
                                        </div>
                                        <div className="project-description">
                                            Description goes here about what I worked on
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </section>
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