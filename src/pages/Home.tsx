import ComputerSpin from '../assets/imgs/compSpin.gif';
import JoystickSpin from '../assets/imgs/joySpinRev.gif';

import ScrollArrow from '../assets/imgs/down.webp';
import ProjectCard from '../components/ProjectCard';

import PixelPasture from '../assets/imgs/projects/pixelpasture.webp';
import KopiSu from '../assets/imgs/projects/kopisu.webp';
import TheMastersPupil from '../assets/imgs/projects/themasterspupil.webp';
import WhichWayUp from '../assets/imgs/projects/wwu.webp';
import GunRounds from '../assets/imgs/projects/gunrounds.gif';
import SocialsBar from '../components/SocialsBar';

import CardboardChef from '../assets/imgs/personal/cardboardchef.webp';
import PrettyFlower from '../assets/imgs/personal/prettyflower.webp';
import Reunion from '../assets/imgs/personal/reunion.webp';
import Sole from '../assets/imgs/personal/sole.webp';

import MiceFight from '../assets/imgs/personal/micefight.gif';
import GAW360 from '../assets/imgs/personal/gaw360.webp';

export default function Home() {
    return (
        <main className='bg-linear-to-b from-[#050505] to-[#0a0a0a]'>
            <section id="home" className='p-4 relative w-full h-screen overflow-hidden'>
                <img
                    className='absolute render-pixelated h-[min(max(50vw,500px),1000px)]'
                    style={{
                        left: 'max(calc(50% - 1200px), max(-250px, -10%))',
                        top: 0
                    }}
                    src={ComputerSpin}
                    alt=''
                />
                <img
                    className='absolute render-pixelated h-[min(max(50vw,500px),1000px)]'
                    style={{
                        right: 'max(calc(50% - 1200px), min(-100px, 10%))',
                        bottom: '7%'
                    }}
                    src={JoystickSpin}
                    alt=''
                />
                <div className="w-full h-screen flex flex-col justify-center items-center z-1 relative">
                    <div className='flex flex-col text-center'>
                        <div className="text-4xl">Hey I'm</div>
                        <h1 className="text-8xl font-bold">Mark Saba.</h1>
                        <div className="text-xl">game developer. fullstack dev. hardware tinkerer.</div>
                        <SocialsBar size={12} />
                    </div>

                    <img className="absolute bottom-4 animate-bounce size-8" src={ScrollArrow} alt="Scroll Arrow" />
                </div>
            </section>

            <section id="projects" className='p-4 min-h-screen max-w-400 mx-auto'>
                <section id="professional-work">
                    <h2 className='text-4xl'>Professional Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                        <ProjectCard
                            title="Pixel Pasture"
                            description="Co-founder/Lead Developer. Pixel Pasture hosts various community events in Sydney including game jams and Game-A-Week."
                            links={[{ title: "Website", url: "https://pixelpasture.studio/" }]}
                            image={PixelPasture}
                        />
                        <ProjectCard
                            title="Pat Naoum Games"
                            description="Core Unity developer for Dragon Valley focussing on player movement and control systems, tech art and multiplayer. Quality Assurance and post-launch bug fixes for The Master's Pupil."
                            links={[{ title: "The Master's Pupil", url: "https://www.themasterspupil.com/" }]}
                            image={TheMastersPupil}
                        />
                        <ProjectCard
                            title="Turtle Flip Studio"
                            description="Game programmer and level designer on Which Way Up: Galaxy Games. Worked predominantly on the 'Overload' gamemode and boost pad mechanics."
                            links={[{ title: "Which Way Up: Galaxy Games", url: "https://whichwayup.info/" }, { title: "Turtle Flip Studio", url: "https://turtleflip.studio/" }]}
                            image={WhichWayUp}
                        />
                        <ProjectCard
                            title="Kopi Su Studio"
                            description="Developed Kopi Su's website following designer mockups. Worked on numerous client projects from notable creatives such as Google, Hermannsberg Potters and Other Architects."
                            links={[{ title: "Website", url: "https://www.kopisustudio.com/" }]}
                            image={KopiSu}
                        />
                        <ProjectCard
                            title="Blabberf"
                            description="Quality Assurance and bug fixes for Gun Rounds mobile and PC release"
                            links={[{ title: "Itch.io", url: "https://blabberf.itch.io/gunrounds" }]}
                            image={GunRounds}
                        />
                    </div>
                </section>

                <section id="game-jams">
                    <h2 className='text-4xl'>Personal Games</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                        <ProjectCard
                            title="Cardboard Chef"
                            description="Created in 48 hours solo for Macquarie University's 3rd game jam with the theme of 'Revive' and constraint of 'Public Domain'"
                            links={[{ title: "Itch.io", url: "https://zeppelin-games.itch.io/cardboard-chef" }]}
                            image={CardboardChef}
                        />
                        <ProjectCard
                            title="Sole"
                            description="Created in 72 hours for Macquarie Association of Computing Students (MACS) game jam with a team of 2"
                            links={[{ title: "Itch.io", url: "https://zeppelin-games.itch.io/sole" }]}
                            image={Sole}
                        />
                        <ProjectCard
                            title="Reunion"
                            description="Created in 48 hours for Macquarie University's 1st game jam with the theme of 'reunion'. Placed 1st overall."
                            links={[{ title: "Itch.io", url: "https://zeppelin-games.itch.io/mq-game-jam" }]}
                            image={Reunion}
                        />
                        <ProjectCard
                            title="Pretty Flower"
                            description="A short puzzle platformer game made for Ludum Dare 48 compo."
                            links={[{ title: "Itch.io", url: "https://zeppelin-games.itch.io/pretty-flower" }]}
                            image={PrettyFlower}
                        />
                        <ProjectCard
                            title="Mice Fight"
                            description="Created for Game-A-Week 2024, Week 3 with the theme of Weird Input. Local multiplayer bullet hell game where each player's controller is a mouse (plug multiple mice into 1 computer)"
                            links={[{ title: "Itch.io", url: "https://zeppelin-games.itch.io/gaw-3" }]}
                            image={MiceFight}
                        />
                        <ProjectCard
                            title="360"
                            description="Created for Game-A-Week 2024 Week 1 with the theme of One Screen. First person puzzle game with a 360 degree field of view."
                            links={[{ title: "Itch.io", url: "https://zeppelin-games.itch.io/game-a-week-1" }]}
                            image={GAW360}
                        />
                    </div>
                </section>

            </section>

            <section id='footer' className="p-4 text-center text-sm">
                <SocialsBar size={8} />
                <p className='p-2'>Mark Saba {new Date().getFullYear()}</p>
            </section>
        </main>
    )
}