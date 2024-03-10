import React, { Component } from 'react';
import Project from './components/Project';
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
import GoogleLogo from './assets/imgs/projects/google.webp';

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
                            </div>
                        </div>
                    </div>

                    <img className="downArrow" src={ScrollArrow} alt="Scroll Arrow" />
                </div>

                <hr />

                <div id="main-content">
                    <section id="projects-section">
                        <div className="content-title">Projects</div>
                        <div className="projects">

                            <Project
                                projectName="The Master's Pupil"
                                projectDescription="Worked on post-release bug fixes and patches"
                                projectImage={TMPLogo}
                                projectLink="https://www.themasterspupil.com/"
                            />

                            <Project
                                projectName="Which Way Up"
                                projectDescription="Game programmer and level designer using Unity/C#. Worked predominately on the 'Overload' gamemode and boost pad mechanics."
                                projectImage={WWULogo}
                                projectLink="https://www.whichwayup.info/"
                            />

                            <Project
                                projectName="Kopi Su Studio Website"
                                projectDescription="Developed home and work pages for Kopi Su's website following designer mockups. Developed using React"
                                projectImage={KopiLogo}
                                projectLink="https://www.kopisustudio.com/"
                            />

                            <Project
                                projectName="The Eternal Forest"
                                projectDescription="Developed iOS app utilising XR technologies for the Biennale of Architecture in Versailles, France in 2022. This project was in collaboration with Other Architects and Rowan Lear through Kopi Su Studio"
                                projectImage={EternalForestLogo}
                                projectLink="https://kopisustudio.com/work/eternalforest"
                            />

                            <Project
                                projectName="Hermannsburg Potters Landing Page"
                                projectDescription="Developed interactive homepage using Webflow and custom JS components catering towards clients updating content"
                                projectImage={HermannsburgLogo}
                                projectLink="https://www.hermannsburgpotters.com.au/"
                            />

                            <Project
                                projectName="Google XR Technologies"
                                projectDescription="Collaborated with Google through Kopi Su Studio to develop XR solutions."
                                projectImage={GoogleLogo}
                                projectLink="https://google.com.au/"
                            />
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