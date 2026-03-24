import IconLink from "./IconLink";

import GithubLogo from '../assets/imgs/socials/github.webp';
import ItchLogo from '../assets/imgs/socials/itchio.webp';
import LinkedInLogo from '../assets/imgs/socials/linkedin.webp';
import BskyLogo from '../assets/imgs/socials/bsky.webp';

export default function SocialsBar({ size = 8 }: { size?: 4 | 6 | 8 | 10 | 12 }) {
    return (
        <div className="w-full h-fit flex flex-row justify-center items-center gap-4 mt-4">
            <IconLink href="https://github.com/zeppelingames" src={GithubLogo} alt="Github" size={size} />
            <IconLink href="https://zeppelin-games.itch.io/" src={ItchLogo} alt="Itch.io" size={size} />
            <IconLink href="https://www.linkedin.com/in/mark-saba-672691250/" src={LinkedInLogo} alt="LinkedIn" size={size} />
            <IconLink href="https://bsky.app/profile/mark.pixelpasture.studio" src={BskyLogo} alt="Bsky" size={size} />
        </div>
    )
}