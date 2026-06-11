import { Icons } from "@/components/icons";
import { HomeIcon, GraduationCap, School } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Java } from "@/components/ui/svgs/java";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import type { ReactNode } from "react";

export type WorkItem = {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description?: string;
  highlights?: string[];
};

type HackathonLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

export const DATA = {
  name: "Anant Kumar",
  initials: "AK",
  namePronunciationUrl: "",
  url: "https://portfolioo-s1az.vercel.app/",
  githubUsername: "antcybersec",
  location: "Pilani, Rajasthan, India",
  locationLink: "https://www.google.com/maps/place/BITS+Pilani",
  description:
    "Full-Stack Software Engineer and CS undergraduate at BITS Pilani building production-grade apps at the intersection of dev, AI, and cybersecurity.",
  summary:
    "Full-stack software engineer and CS undergraduate at [BITS Pilani](/#education) (CGPA **8.9/10**) with **3+ shipped production-grade applications** in LLM integration, real-time systems, and cloud-native infrastructure. Merged **5+ PRs** into [kubernetes-sigs/kro](https://github.com/kubernetes-sigs/kro) (CNCF Kubernetes SIG), collaborating with engineers from Google, Microsoft, and AWS. Hackathon finalist — Top 2 of 200+ teams. IIT Guwahati Cyber Security alumnus. [Explore my projects](/#projects).",
  avatarUrl: "/avatar.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "Go", icon: Golang },
    { name: "Java", icon: Java },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Icons.express },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Git", icon: Icons.git },
    { name: "C", icon: undefined },
    { name: "SQL", icon: undefined },
    { name: "Bash", icon: undefined },
    { name: "GitHub Actions", icon: undefined },
    { name: "Linux", icon: undefined },
    { name: "Solana / Web3", icon: undefined },
    { name: "Penetration Testing", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  overview: {
    role: "Full-Stack Software Engineer",
    timeZone: "Asia/Kolkata",
    pronouns: "he/him",
    urls: [
      "https://portfolioo-s1az.vercel.app/",
      "https://github.com/antcybersec",
    ],
  },
  contact: {
    email: "anant123445@gmail.com",
    tel: "+91-9310057682",
    bookingUrl: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/antcybersec",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anant-kumar-0253a0281",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/antcybersec",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anant123445@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [] satisfies WorkItem[],

  education: [
    {
      school: "BITS Pilani",
      href: "https://www.bits-pilani.ac.in/",
      degree: "B.Sc. in Computer Science — CGPA: 8.9/10",
      logoUrl: "",
      icon: GraduationCap,
      start: "2025",
      end: "2029",
    },
    {
      school: "IIT Guwahati",
      href: "https://www.iitg.ac.in/",
      degree: "Post Graduate Programme in Cyber Security",
      logoUrl: "",
      icon: School,
      start: "2024",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Exness — Multi-Asset Trading Platform",
      href: "https://github.com/antcybersec",
      repoUrl: "https://github.com/antcybersec",
      dates: "",
      active: true,
      description:
        "Full-stack trading platform supporting 10+ asset classes with real-time WebSocket feeds, achieving sub-200ms order execution latency across 500+ daily transactions. Spearheaded a responsive multi-chart dashboard handling 5+ simultaneous live chart instances with full MT5-terminal feature parity, including portfolio tracking and equity/margin display.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "WebSocket",
        "REST APIs",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/antcybersec",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CodeUsagi — AI-Powered Code Review Tool",
      href: "https://github.com/antcybersec",
      repoUrl: "https://github.com/antcybersec",
      dates: "",
      active: true,
      description:
        "AI code review system that slashed PR review turnaround by ~70%, processing diffs of 1,000+ lines and delivering context-aware inline suggestions within 30 seconds. Automated a scalable diff-processing pipeline with static analysis integrated into GitHub Actions CI/CD, covering 100% of pull requests across a 3+ member engineering workflow.",
      technologies: [
        "Python",
        "Node.js",
        "LLM APIs",
        "GitHub Actions",
        "REST APIs",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/antcybersec",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Lovable — AI Application Builder",
      href: "https://github.com/antcybersec",
      repoUrl: "https://github.com/antcybersec",
      dates: "",
      active: true,
      description:
        "LLM-powered code generation pipeline that produces production-ready React/TypeScript apps exceeding 500 lines of code from a single prompt in under 60 seconds. Launched live preview rendering, iterative chat-based refinement, and one-click deployment, cutting app scaffolding time from hours to under 60 seconds.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "LLM APIs",
        "Docker",
        "REST APIs",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/antcybersec",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "kubernetes-sigs/kro — Open Source",
      href: "https://github.com/kubernetes-sigs/kro",
      repoUrl: "https://github.com/kubernetes-sigs/kro",
      dates: "",
      active: true,
      description:
        "Merged 5+ PRs into kubernetes-sigs/kro (CNCF Kubernetes SIG), reducing false-positive schema errors by ~40%. Partnered with senior engineers from Google, Microsoft, and AWS across 15+ asynchronous code review cycles.",
      technologies: [
        "Go",
        "Kubernetes",
        "YAML",
        "CI/CD",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/kubernetes-sigs/kro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "100x School & Superteam India Solana Hackathon",
      dates: "2025",
      location: "India — 2nd Place of 200+ Teams",
      description:
        "Secured 2nd place out of 200+ nationwide participants by delivering a functional Solana blockchain product under a 48-hour deadline. Recognised by Superteam India, the leading Solana builder community.",
      image: "",
      links: [],
    },
    {
      title: "CTF Competition — IIT Guwahati Cyber Security Programme",
      dates: "2024",
      location: "India — Top 5 of 80+ Participants",
      description:
        "Ranked top 5 out of 80+ participants by cracking advanced challenges in cryptography, network security, and binary exploitation under strict time constraints.",
      image: "",
      links: [],
    },
  ] as Hackathon[],
} as const;
