// Data


import { 
  Code,
  Database,
  Cloud,
  Settings,
  TestTube,
  Award,
  Users,
  Zap,
  Target,

} from 'lucide-react';

export const personalInfo: PersonalInfo = {
  name: "Ajay Kumar",
  title: "Senior Frontend Engineer",
  location: "New Delhi, Delhi, India",
  email: "ajayhunt04@gmail.com",
  phone: "+91 807XXXXXXXX",
  linkedin: "in/ajay-kumar-04",
  github: "AjeyOS",
  summary: "Senior Frontend Engineer with 5+ years of experience in building scalable web applications, reusable UI components, and RESTful API integrations using React.js, Next.js, and TypeScript. Excels in Agile team collaboration to transform business requirements into technical implementations."
};

export const experiences: Experience[] = [
  {
    company: "Coforge",
    position: "Senior Software Engineer",
    duration: "05-2024 – 03-2025",
    location: "Gurugram, India",
    description: [
      "Led the migration of a legacy React application to Angular 17 using TypeScript and Kendo UI, improving code modularity by 30% and reducing technical debt",
      "Designed and implemented a robust enterprise data management module using Kendo UI Data Grid with tri-level centralized filtering, increasing data processing efficiency by 25%",
      "Built dynamic, reactive form systems with advanced validation and RESTful API integration, enhancing CRUD speed and reducing form error rates by 40%",
      "Automated CI/CD pipelines using Azure DevOps, reducing release cycle times by 35% through integrated testing and deployment workflows",
      "Collaborated in Agile sprints with cross-functional teams (QA, Product, Backend), improving bug resolution turnaround by 50% using structured task tracking"
    ],
    technologies: ["React.js", "Angular 17", "TypeScript", "Kendo UI", "Azure DevOps", "RESTful APIs", "CI/CD"]
  },
  {
    company: "Smart Energy Water",
    position: "Senior Product Engineer",
    duration: "06-2023 - 03-2024",
    location: "Noida, India",
    description: [
      "Developed a responsive and scalable web application using ReactJS, TypeScript, Redux, and Material UI, ensuring modularity and cross-browser compatibility",
      "Integrated APAC E-Chart into the usage module to visualize water and electricity consumption, improving user interaction and enabling real-time utility tracking",
      "Implemented multilingual capabilities through RESTful API integration, enabling real-time language switching and improving global user experience",
      "Delivered new product features and UI enhancements with optimized rendering performance, improving functionality across all devices",
      "Collaborated with cross-functional teams in an Agile environment, managing sprints and issue tracking through Jira for timely delivery"
    ],
    technologies: ["React.js", "TypeScript", "Redux", "Material UI", "CI/CD", "Apache ECharts", "RESTful APIs", "Jira"]
  },
  {
    company: "Chetu Inc.",
    position: "Senior Software Engineer",
    duration: "07-2021 – 06-2023",
    location: "Noida, India",
    description: [
      "Developed the frontend architecture of Carrejoue, a real-time sports gaming platform that maps sporting outcomes to dynamically progressing Game Cards",
      "Engineered match logic using Subject Square advancement rules and Key Element inputs, enabling accurate result validation and persistent match state",
      "Built gameplay modules for recognizing Winning Patterns (Line, Diagonal, X, Blackout) and triggering payouts through multi-pattern Prize Pools",
      "Integrated Firebase for real-time data storage, player state synchronization, and backendless event logging for smooth gameplay experience",
      "Implemented Redux Thunk middleware for asynchronous data flows, optimizing complex form logic and session management"
    ],
    technologies: ["React.js", "Firebase", "Redux", "React Bootstrap", "Redux Thunk"]
  },
  {
    company: "Tenali Education Academy (GharPeShiksha)",
    position: "Frontend Developer",
    duration: "12-2019 - 07-2021",
    location: "Delhi, India",
    description: [
      "Built a course-selling e-commerce platform using ReactJS, Material UI, and Context API, enabling students to browse and purchase courses based on class levels",
      "Developed a real-time virtual classroom system using WebRTC for video streaming and Socket.io for chat functionality with progress tracking",
      "Engineered a responsive tutor discovery website using HTML, CSS, JavaScript, Ajax, and jQuery for subject and availability-based search",
      "Seamlessly integrated RESTful APIs across all applications in collaboration with backend developers, ensuring real-time data synchronization"
    ],
    technologies: ["React.js", "Redux", "Material UI", "Context API", "WebRTC", "Socket.io", "JavaScript", "jQuery", "Bootstrap", "Ajax"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend Technologies",
    items: ["HTML5", "CSS3", "SCSS", "React.js", "Next.js", "Angular 17", "TypeScript", "JavaScript (ES6)", "Material UI", "Kendo UI", "React Bootstrap"],
    icon: <Code className="w-6 h-6" />
  },
  {
    category: "State Management & APIs",
    items: ["Redux", "Redux Thunk", "Redux Toolkit", "Context API", "RESTful APIs", "JSON", "Firebase", "Google APIs"],
    icon: <Database className="w-6 h-6" />
  },
  {
    category: "Cloud & Developer Tools",
    items: ["Azure DevOps", "CI/CD", "Git", "Jira", "Postman", "Swagger", "Webpack", "Vite", "Visual Studio Code"],
    icon: <Cloud className="w-6 h-6" />
  },
  {
    category: "Real-time & Data Visualization",
    items: ["WebSockets", "WebRTC", "Socket.io", "WebSockets", "Apache ECharts", "Google Charts", "Firebase Realtime DB"],
    icon: <Settings className="w-6 h-6" />
  },
  {
    category: "Testing & Mobile",
    items: ["Jest", "Unit Testing", "React Native"],
    icon: <TestTube className="w-6 h-6" />
  }
];

export const projects: Project[] = [
  {
    name: "Carrejoue Sports Gaming Platform",
    description: "Real-time, event-driven sports gaming platform with dynamic game cards and live result processing",
    technologies: ["React.js", "Firebase", "Redux", "WebRTC", "Socket.io", "Material UI"],
    highlights: [
      "Real-time match logic with Subject Square advancement rules",
      "Multi-pattern prize pool system (Line, Diagonal, X, Blackout)",
      "Geo-restricted group pool selection and registration",
      "Event-based workflows for game card generation and pricing"
    ]
  },
  {
    name: "Enterprise Data Management System",
    description: "Robust data management module with advanced filtering and automated deployment workflows",
    technologies: ["Angular 17", "TypeScript", "Kendo UI", "Azure DevOps", "RESTful APIs"],
    highlights: [
      "Tri-level centralized filtering system (master, input, column)",
      "30% improvement in code modularity through component-based architecture",
      "25% increase in data processing efficiency",
      "35% reduction in release cycle times through automated CI/CD"
    ]
  },
  {
    name: "Smart Energy Water SaaS Platform",
    description: "Customer engagement platform for energy and utility sector with real-time analytics",
    technologies: ["React.js", "TypeScript", "Redux", "Material UI", "Apache ECharts"],
    highlights: [
      "Responsive and scalable web application with cross-browser compatibility",
      "Real-time utility consumption visualization with interactive charts",
      "Multilingual support with real-time language switching",
      "Optimized rendering performance across all devices"
    ]
  },
  {
    name: "Educational Technology Suite",
    description: "Complete e-learning ecosystem with course marketplace and virtual classroom",
    technologies: ["React.js", "Material UI", "Context API", "WebRTC", "Socket.io"],
    highlights: [
      "E-commerce platform for course sales with class-based filtering",
      "Real-time virtual classroom with video streaming and chat",
      "Tutor discovery system with advanced search and filtering",
      "Seamless API integration for real-time data synchronization"
    ]
  }
];

export const achievements = [
  { icon: <Award className="w-8 h-8" />, title: "5+ Years", subtitle: "Experience", color: "from-amber-400 to-orange-500" },
  { icon: <Users className="w-8 h-8" />, title: "50+ Projects", subtitle: "Completed", color: "from-blue-400 to-cyan-500" },
  { icon: <Zap className="w-8 h-8" />, title: "40% Faster", subtitle: "Development", color: "from-purple-400 to-pink-500" },
  { icon: <Target className="w-8 h-8" />, title: "99%", subtitle: "Client Satisfaction", color: "from-green-400 to-emerald-500" },
];
