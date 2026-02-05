export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  images: ProjectImage[];
  codeURL: string;
  projectUrl: string;
  skills: string[];
  projectType: string;
}


export type ProjectsResponse = Project[];