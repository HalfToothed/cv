
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abhishek Patil",
  initials: "AP",
  location: "Indore, Madhya Pradesh",
  locationLink: "https://www.google.com/maps/place/Indore",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "A seasoned Full Stack Developer specializing in crafting seamless web experiences. With a strong focus on driving innovation, I contribute to the development of dynamic web applications. Proficient across the stack, including languages like C#, Typescript and frameworks like .NET, Angular, React.",
  avatarUrl: "https://github.com/user-attachments/assets/ad7a06ef-4dfe-4011-92c1-db751d5db82e",
  personalWebsiteUrl: "https://halftoothed.github.io/",
  contact: {
    email: "abhishekandmails@gmail.com",
    tel: "+919893870432",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/HalfToothed",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishekpatil25/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/itszAbhishek",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Govt. Holkar Science College",
      degree: "Bachelor's Degree in Computer Application (BCA)",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Mosphe",
      link: "https://mosphe.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2024",
      end: null,
      description:
        "Created and deployed Full-Stack applications, ensured seamless integration, performance optimization, and adherence to best practices in software development. Technologies: C#, WPF, .NET, Angular, SQL",
    },
    {
      company: "Episeron Private Ltd.",
      link: "https://episeron.com",
      badges: ["On-Site"],
      title: "Full Stack Developer",
      start: "2023",
      end: "2024",
      description:
        "Focused on building efficient backend services and dynamic, user-friendly front-end interfaces. Technologies: C#, .NET, React, Angular, Threejs",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C#",
    "React",
    "Angular",
    ".NET",
    "Threejs",
    "SQL"
  ],
  projects: [
    {
      title: "InterviewAI",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "Angular",
        ".NET Web API",
        "Google Gemini API",
      ],
      description:
        "AI-powered tool simplifying interviews by generating tailored questions from resumes. ",
      link: {
        label: "github.com",
        href: "https://github.com/HalfToothed/interviewAI",
      },
    },
   
    {
      title: "Page-In-Picture",
      techStack: ["Side Project", "JavaScript", "Chrome Extension"],
      description:
        "Chrome extension that allows you to view webpage in Picture-in-Picture (PiP) mode, offering a convenient, distraction-free viewing experience",
        link: {
          label: "github.com",
          href: "https://github.com/HalfToothed/page-in-picture",
        },
    }
  ],
} as const;
