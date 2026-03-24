import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    links?: {
        title: string;
        url: string;
        icon?: string;
    }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, links }) => {
    return (
        <div className="group relative bg-linear-to-b from-[#0f0f0f] to-[#050505] rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#333] transition-all duration-300 hover:scale-[1.02]">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-[#0a0a0a]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-center object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bg-linear-to-t from-[#0a0a0a] to-transparent h-[30%] w-full -bottom-2 opacity-100"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
                    </div>
                {/* Links */}
                {links && (
                    <div className="flex gap-3">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] rounded transition-colors"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;