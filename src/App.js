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

// Projects
import TMPLogo from './assets/imgs/projects/themasterspupil.webp';
import WWULogo from './assets/imgs/projects/whichwayup.webp';
import KopiLogo from './assets/imgs/projects/kopisu.webp';
import EternalForestLogo from './assets/imgs/projects/eternalforest.webp';
import HermannsburgLogo from './assets/imgs/projects/hermannsburg.webp';
import GoogleLogo from './assets/imgs/projects/google.webp';
import FatalError from './assets/imgs/projects/fatalerror.webp';

// Gamejams
import SoleLogo from './assets/imgs/gamejams/sole.webp';
import CardboardChefLogo from './assets/imgs/gamejams/cardboardchef.webp';
import ReunionLogo from './assets/imgs/gamejams/reunion.webp';

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
                    <section id="projects-section" className='projectSection'>
                        <div className="content-title">Projects</div>
                        <div className="projects">

                            <Project
                                projectName="Pixel Pasture"
                                projectDescription="Co-founder ig"
                                projectImage={TMPLogo}
                                projectLink="https://www.pixelpasture.studio/"
                            />

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

                    <section id="gamejams-section" className='projectSection'>
                        <div className="content-title">Game Jams</div>
                        <div className="projects">

                            <Project
                                projectName="sole"
                                projectDescription={(<>
                                    <i>"you play as a lone soul travelling to its next life"</i>
                                    <div>This game was made by Aniko (Art) and myself (Gameplay) in three days for the first <a href='https://macs.codes/'>MACS</a> game jam</div> 
                                </>)}
                                projectImage={SoleLogo}
                                projectLink="https://zeppelin-games.itch.io/sole"
                            />
                             <Project
                                projectName="Cardboard Chef"
                                projectDescription="This game was made in 48 hours for Macquarie University's 3rd Game Jam with the theme of 'Revive' and constraint of 'Public Domain'"
                                projectImage={CardboardChefLogo}
                                projectLink="https://zeppelin-games.itch.io/cardboard-chef"
                            />
                             <Project
                                projectName="Reunion"
                                projectDescription={(<>
                                    <i>"Help reunite people who have lost their friends or loved ones in a crowd of people."</i>
                                    <div>Created in 48hours for Macquarie University's 1st game jam, themed 'reunion', placing 1st overall</div> 
                                </>)}
                                projectImage={ReunionLogo}
                                projectLink="https://zeppelin-games.itch.io/mq-game-jam"
                                outline={true}
                            />
                        </div>
                    </section>

                    {/* <section id="misc-section" className='projectSection'>
                        <div className="content-title">Misc</div>
                        <div className="projects">
                            <Project
                                projectName="Fatal Error Filter"
                                projectDescription={
                                    <>
                                        <p>A filter for Snapchat and Instagram built using Lens Studio and Meta Spark Studio respectively, amassing over 38m impressions, 28m plays and 800k shares.</p>
                                        <div>Open in <a target='_blank' href="https://www.instagram.com/ar/4972798932786244/">Instagram</a></div>
                                        <div>Open in <a target='_blank' href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5ee53801d555442bbc941df11b7db9fa&metadata=01">Snapchat</a></div>
                                    </>
                                }
                                projectImage={FatalError}
                            />
                        </div>
                    </section> */}
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