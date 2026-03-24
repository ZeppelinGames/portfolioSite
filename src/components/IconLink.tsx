export default function IconLink({ href, src, alt, size = 10 }: { href: string, src: string, alt: string, size?: 4 | 6 | 8 | 10 | 12  }) {
    const sizeClasses= {
        4: 'w-4 h-4',
        6: 'w-6 h-6',
        8: 'w-8 h-8',
        10: 'w-10 h-10',
        12: 'w-12 h-12',
    };

    return (
        <a className={`${sizeClasses[size]} pointer hover:scale-110 transition-transform`} href={href} target="_blank">
            <img className="object-fit select-none -z-1" alt={alt} src={src} />
        </a>
    )
}