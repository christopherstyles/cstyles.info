export type Agency = {
  name: string;
  prefix: string;
  url: string;
};

export type Brand = {
  icon: string;
  backgroundColor: string;
  name: string;
};

export type Project = {
  agency: Agency;
  awards: string;
  brand: Brand;
  challenge: string;
  deck: string;
  description: string;
  frameColorEnd: string;
  frameColorStart: string;
  links: ProjectLink[];
  position: number;
  posterImages: Screenshot[];
  primaryTechnologies: string[];
  roles: Role[];
  screenshots: Screenshot[];
  slug: string;
  stack: string[];
  title: string;
};

export type Role = {
  backend: boolean;
  description: string;
  frontend: boolean;
  project: string;
  technologies: string;
};

export type Screenshot = {
  caption?: string;
  src: string;
  alt?: string;
};

export type ProjectLink = {
  href: string;
  title: string;
};

export type WorkRole = {
  agency: string;
  date: string;
  highlights: string[];
  id: string;
  location: string;
  title: string;
};
