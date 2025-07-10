// Types
interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}