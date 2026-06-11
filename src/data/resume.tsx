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
      logoUrl: "/bits.png",
      icon: GraduationCap,
      start: "2025",
      end: "2029",
    },
    {
      school: "IIT Guwahati",
      href: "https://www.iitg.ac.in/",
      degree: "Post Graduate Programme in Cyber Security",
      logoUrl: "/iitg.png",
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
      image: "/100x.png",
      links: [
        {
          title: "Submission",
          href: "https://superteam.fun/earn/feed/submission/1a0891a8-d124-472c-9cbb-a8a28ebe52cf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "CTF Competition — IIT Guwahati Cyber Security Programme",
      dates: "2024",
      location: "India — Top 5 of 80+ Participants",
      description:
        "Ranked top 5 out of 80+ participants by cracking advanced challenges in cryptography, network security, and binary exploitation under strict time constraints.",
      image: "/iitg.png",
      links: [],
    },
  ] as Hackathon[],

  openSource: [
    {
      org: "kubernetes-sigs/kro",
      orgUrl: "https://github.com/kubernetes-sigs/kro",
      logoUrl: "",
      icon: Kubernetes,
      description:
        "CNCF Kubernetes SIG project — Kubernetes Resource Orchestrator. Collaborated with engineers from Google, Microsoft, and AWS across 15+ asynchronous code review cycles.",
      prs: [
        {
          title: "feat: implement KREP-10 — cluster-scoped instance CRDs",
          href: "https://github.com/kubernetes-sigs/kro/pull/1152",
          number: "#1152",
          merged: "Mar 17, 2026",
          description:
            "Added a scope field (Namespaced|Cluster) to ResourceGraphDefinition.spec.schema, enabling cluster-scoped instance CRDs with full backward compatibility. Touched the API, CRD synthesizer, graph builder, controller, and added integration tests.",
        },
        {
          title: "KREP-10 — design proposal for cluster-scoped instance CRDs",
          href: "https://github.com/kubernetes-sigs/kro/pull/1030",
          number: "#1030",
          merged: "Mar 17, 2026",
          description:
            "Authored and landed the KREP design document for cluster-scoped instance CRD support, accepted for the kro 0.9 milestone after review by maintainers including a-hilaly, jakobmoellerdev, and chrisdoherty4.",
        },
      ],
    },
    {
      org: "hyperledger/fabric-ca",
      orgUrl: "https://github.com/hyperledger/fabric-ca",
      logoUrl: "/lfdt.png",
      icon: undefined,
      description:
        "Linux Foundation Decentralized Trust (LFDT) project — Hyperledger Fabric CA server and client. Contributed Go fixes and dependency modernisation reviewed by Hyperledger maintainers.",
      prs: [
        {
          title: "Fix client command detection when flags precede subcommand",
          href: "https://github.com/hyperledger/fabric-ca/pull/506",
          number: "#506",
          merged: "Jun 7, 2026",
          description:
            "Used cobra's Find to resolve the top-level subcommand instead of assuming args[1], fixing incorrect enrollment validation when global flags like --loglevel appear before enroll. Added unit and positive integration tests.",
        },
        {
          title: "Replace archived Knetic/govaluate with casbin/govaluate",
          href: "https://github.com/hyperledger/fabric-ca/pull/502",
          number: "#502",
          merged: "Jun 2, 2026",
          description:
            "Swapped the archived LDAP expression-evaluator dependency to the maintained casbin/govaluate fork. No user-facing LDAP syntax or config changes — a zero-risk dependency modernisation.",
        },
      ],
    },
  ],
} as const;
