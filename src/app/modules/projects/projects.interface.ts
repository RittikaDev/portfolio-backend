export interface IProjectImages {
  url: string;
}

export interface IFrontBackProject {
  technologies: string[];
  deploymentLink: string;
  github: string;
}

export interface IProject {
  title: string;
  slug: string;
  brief: string;
  description: string[];
  cover: string;
  images: string[];
  type: string;
  frontend: IFrontBackProject;
  backend: IFrontBackProject;
}
