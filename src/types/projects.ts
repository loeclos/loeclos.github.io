export interface ProjectImage {
    src: string;
    alt: string;
}

interface url {
    title: string;
    url: string;
}

export type ProjectStage = 'wip-not-working' | 'wip-alpha' | 'wip-stable' | 'finished';

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
    stage: ProjectStage;
}

export type ProjectsByCategory = Record<ProjectStage, Project[]>;

export interface CategoryWithProjects {
    category: ProjectStage;
    projects: Project[];
}

export type ProjectsResponse = Project[];
