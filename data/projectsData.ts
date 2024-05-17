interface Project {
    title: string,
    description: string,
    href?: string,
    imgSrc?: string,
}

const projectsData: Project[] = [
    {
        title: 'Magic Campus cross-device',
        description: `Remake Magic Campus without using flash, playable on Mobile/PC/Web.`,
        imgSrc: '/blog/mc/3/2.png',
        href: '/blog/mc-mobile-dev-log',
    },
]

export default projectsData
