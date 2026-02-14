export interface ProjectImage {
    src: string;
    alt: string;
}

interface url {
    title: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    images: ProjectImage[];
    urls: url[]
    skills: string[];
    projectType: string;
    date: number;
}


export type ProjectsResponse = Project[];
