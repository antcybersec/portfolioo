import { Icons } from "@/components/icons";
import { HomeIcon, GraduationCap, School, FileText } from "lucide-react";
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
  awardBadge?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

export const DATA = {
  name: "Anant Kumar",
  initials: "AK",
  namePronunciationUrl: "",
  url: "https://antsec.xyz",
  githubUsername: "antcybersec",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "Distributed Systems & Cloud-Native Engineer. 35+ merged PRs across Kubernetes, Kubeflow, Argo CD & CNCF projects. CS undergraduate at BITS Pilani (CGPA 8.9/10).",
  summary:
    "CS undergraduate at [BITS Pilani](/#education) (CGPA **8.9/10**) with **35+ merged PRs** across CNCF and cloud-native ecosystems: **13 merged PRs** in [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes), **9 merged PRs** in [Kubeflow](https://github.com/kubeflow/hub), **3 merged PRs** in [Argo CD](https://github.com/argoproj/argo-cd), and **5 merged PRs** in CNCF [kubernetes-sigs/kro](https://github.com/kubernetes-sigs/kro) including feature design-and-implementation (KREP-10). Experienced in distributed systems, controller-runtime reconciliation logic, and production Go/Rust backend services. [Explore my projects](/#projects).",
  avatarUrl: "/avatar.png",
  skills: [
    { name: "Go", icon: Golang },
    { name: "Rust", icon: undefined },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "Python", icon: Python },
    { name: "SQL", icon: undefined },
    { name: "Bash", icon: undefined },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "client-go / CRDs", icon: undefined },
    { name: "Argo CD", icon: undefined },
    { name: "Kubeflow", icon: undefined },
    { name: "WebSockets", icon: undefined },
    { name: "Redis", icon: undefined },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: undefined },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Icons.express },
    { name: "Axum", icon: undefined },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: undefined },
    { name: "LLM APIs", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "GitHub Actions", icon: undefined },
    { name: "Linux", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: FileText, label: "Resume" },
  ],
  overview: {
    role: "Distributed Systems Engineer",
    timeZone: "Asia/Kolkata",
    pronouns: "he/him",
    urls: [
      "https://antsec.xyz",
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
        url: "https://linkedin.com/in/anant-kumar-0253a0281",
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
      start: "",
      end: "",
    },
    {
      school: "IIT Guwahati",
      href: "https://www.iitg.ac.in/",
      degree: "Post Graduate Programme in Cyber Security",
      logoUrl: "/iitg.png",
      icon: School,
      start: "",
      end: "",
    },
  ],

  projects: [
    {
      title: "CodeUsagi — AI-Powered Code Review Tool",
      href: "https://github.com/codeusagi-ai/CodeUsagi",
      repoUrl: "https://github.com/codeusagi-ai/CodeUsagi",
      dates: "2026",
      active: true,
      description:
        "Built an automated PR-review pipeline that parses diffs and posts context-aware inline suggestions via an LLM API, wired into GitHub Actions CI/CD. Slashed PR review turnaround time by ~70%, processing diffs of 1,000+ lines in under 30 seconds.",
      technologies: [
        "TypeScript",
        "Next.js",
        "LLM APIs",
        "GitHub Actions",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/codeusagi-ai/CodeUsagi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codeusagi.png",
      video: "",
    },
    {
      title: "Exness — Multi-Asset Trading Platform",
      href: "https://github.com/antcybersec/exness",
      repoUrl: "https://github.com/antcybersec/exness",
      dates: "2026",
      active: true,
      description:
        "Architected a full-stack trading platform supporting 10+ asset classes with real-time WebSocket feeds, achieving sub-200ms order execution latency across 500+ daily transactions. Spearheaded a responsive multi-chart dashboard handling 5+ simultaneous live chart instances with full MT5-terminal feature parity.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "WebSocket",
        "PostgreSQL",
        "Redis",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/antcybersec/exness",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/exness.png",
      video: "",
    },
    {
      title: "rustCanvas — Real-Time Collaborative Whiteboard",
      href: "https://antcybersec-my-excaildraw.hf.space",
      repoUrl: "https://github.com/antcybersec/excaildraw",
      dates: "2026",
      active: true,
      description:
        "Full-stack, Excalidraw-compatible whiteboard: Yew/WASM frontend, Axum/Tokio backend broadcasting live edits over WebSocket rooms, optional PostgreSQL persistence with Redis pub/sub for multi-instance scale, plus a Tauri desktop build.",
      technologies: [
        "Rust",
        "Yew / WASM",
        "Axum",
        "Tokio",
        "WebSockets",
        "Tauri",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/antcybersec/excaildraw",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://antcybersec-my-excaildraw.hf.space",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rustcanvas.png",
      video: "",
    },
    {
      title: "diskMon — Cross-Platform System Resource Monitor",
      href: "https://github.com/antcybersec/diskMon",
      repoUrl: "https://github.com/antcybersec/diskMon",
      dates: "2026",
      active: true,
      description:
        "High-performance cross-platform system monitor written in Rust. Groups processes into app bundles (30+ workloads like Docker, Ollama, IDEs) with interactive nested treemaps (RAM, CPU, disk I/O), memory pressure anomaly detection, and zero-network privacy.",
      technologies: [
        "Rust",
        "egui",
        "Systems Programming",
        "libproc / Mach",
        "Linux / macOS / Windows",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/antcybersec/diskMon",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Releases",
          href: "https://github.com/antcybersec/diskMon/releases",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/diskmon.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "100x School & Superteam India Solana Hackathon",
      dates: "2025",
      location: "India — 2nd Place of 200+ Teams",
      awardBadge: "🥈 2nd Place Nationwide (200+ Teams)",
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
      awardBadge: "🏆 Top 5 Finalist (80+ Participants)",
      description:
        "Ranked top 5 out of 80+ participants by cracking advanced challenges in cryptography, network security, and binary exploitation under strict time constraints.",
      image: "/iitg.png",
      links: [],
    },
  ] as Hackathon[],

  openSource: [
    {
      org: "kubernetes/kubernetes",
      orgUrl: "https://github.com/kubernetes/kubernetes",
      logoUrl: "",
      icon: Kubernetes,
      description:
        "13 merged PRs in core Kubernetes across SIG Node, SIG Scheduling, SIG Auth, and SIG Architecture, fixing client-go races, serving certificates, apiserver storage, and validation.",
      prs: [
        {
          title: "kubelet: honor serverCertificateKeyAlgorithm for self-signed serving cert",
          href: "https://github.com/kubernetes/kubernetes/pull/142434",
          number: "#142434",
          merged: "Oct 2026",
          description:
            "Implemented Kubelet serving certificate algorithm selection supporting modern cryptographic standards.",
        },
        {
          title: "client-go/util/cert: let callers choose self-signed key algorithm",
          href: "https://github.com/kubernetes/kubernetes/pull/142350",
          number: "#142350",
          merged: "Sep 2026",
          description:
            "Allowed callers to configure key algorithms for self-signed certificate generation in client-go.",
        },
        {
          title: "Fix client-go data race in reflector / informer sync",
          href: "https://github.com/kubernetes/kubernetes/pull/140410",
          number: "#140410",
          merged: "Sep 2026",
          description:
            "Fixed a concurrent data race in client-go reflector state, improving stability across high-throughput informer watches.",
        },
        {
          title: "Fix race condition in NoExecuteTaintManager pod eviction",
          href: "https://github.com/kubernetes/kubernetes/pull/140198",
          number: "#140198",
          merged: "Sep 2026",
          description:
            "Diagnosed and resolved premature pod eviction caused by race conditions in NoExecuteTaintManager after 3 maintainer review rounds.",
        },
        {
          title: "Fix ServiceAccount storage correctness in apiserver",
          href: "https://github.com/kubernetes/kubernetes/pull/141892",
          number: "#141892",
          merged: "Sep 2026",
          description:
            "Resolved an edge-case deduplication state bug in ServiceAccount storage representation in kube-apiserver.",
        },
        {
          title: "Migrate PodSpec to declarative validation rules",
          href: "https://github.com/kubernetes/kubernetes/pull/141157",
          number: "#141157",
          merged: "Sep 2026",
          description:
            "Refactored PodSpec validation logic to modern declarative CEL validation schemas in apiserver.",
        },
      ],
    },
    {
      org: "argoproj/argo-cd",
      orgUrl: "https://github.com/argoproj/argo-cd",
      logoUrl: "",
      icon: Kubernetes,
      description:
        "3 merged PRs in Argo CD GitOps controller, apiserver health endpoints, and config-management plugins.",
      prs: [
        {
          title: "fix(server): allow gRPC health check without authentication",
          href: "https://github.com/argoproj/argo-cd/pull/30474",
          number: "#30474",
          merged: "Oct 2026",
          description:
            "Enabled standard unauthenticated gRPC health probe check on Argo CD server endpoints.",
        },
        {
          title: "fix(health): report inactive Crossplane MRDs as Healthy",
          href: "https://github.com/argoproj/argo-cd/pull/30404",
          number: "#30404",
          merged: "Oct 2026",
          description:
            "Corrected health assessment evaluation logic for inactive Crossplane ManagedResourceDefinitions.",
        },
        {
          title: "test(cmpserver): fix flaky timing assertions in RunCommand timeout tests",
          href: "https://github.com/argoproj/argo-cd/pull/30378",
          number: "#30378",
          merged: "Oct 2026",
          description:
            "Fixed non-deterministic race conditions and timing assertions in CMP plugin server tests.",
        },
      ],
    },
    {
      org: "kubeflow",
      orgUrl: "https://github.com/kubeflow/hub",
      logoUrl: "",
      icon: Kubernetes,
      description:
        "9 merged PRs across Kubeflow Hub and MCP server: OCI layer packaging, backend error handling, and event pipelines.",
      prs: [
        {
          title: "fix(async-upload): keep base image layout out of model layers",
          href: "https://github.com/kubeflow/hub/pull/3411",
          number: "#3411",
          merged: "Oct 2026",
          description:
            "Isolated base image layers during async OCI packaging to prevent image layer bloat and pollution.",
        },
        {
          title: "fix(python): scrub OCI backend errors that are not CalledProcessError",
          href: "https://github.com/kubeflow/hub/pull/3413",
          number: "#3413",
          merged: "Oct 2026",
          description:
            "Enhanced Python SDK exception handling for non-zero process errors in OCI backend operations.",
        },
        {
          title: "fix(python): decode JWT payloads as base64url",
          href: "https://github.com/kubeflow/hub/pull/3400",
          number: "#3400",
          merged: "Oct 2026",
          description:
            "Fixed JWT payload parsing by properly implementing RFC 7515 base64url decoding.",
        },
        {
          title: "fix(trainer): keep most recent events when limiting get_training_events",
          href: "https://github.com/kubeflow/mcp-server/pull/439",
          number: "#439",
          merged: "Oct 2026",
          description:
            "Ensured proper temporal ordering when limiting training event output in Kubeflow MCP server.",
        },
      ],
    },
    {
      org: "kubernetes-sigs/kro",
      orgUrl: "https://github.com/kubernetes-sigs/kro",
      logoUrl: "",
      icon: Kubernetes,
      description:
        "CNCF Kubernetes SIG project — Kube Resource Orchestrator. 5 merged PRs including end-to-end design and implementation of KREP-10.",
      prs: [
        {
          title: "feat: implement KREP-10 — cluster-scoped instance CRDs",
          href: "https://github.com/kubernetes-sigs/kro/pull/1152",
          number: "#1152",
          merged: "Mar 17, 2026",
          description:
            "Added scope field (Namespaced|Cluster) to ResourceGraphDefinition.spec.schema, enabling cluster-scoped instance CRDs with full controller reconciliation.",
        },
        {
          title: "KREP-10 — design proposal for cluster-scoped instance CRDs",
          href: "https://github.com/kubernetes-sigs/kro/pull/1030",
          number: "#1030",
          merged: "Mar 17, 2026",
          description:
            "Authored KREP design document for cluster-scoped instance CRD support, accepted after review by core maintainers.",
        },
        {
          title: "Add fail-fast apiVersion/kind schema validation",
          href: "https://github.com/kubernetes-sigs/kro/pull/980",
          number: "#980",
          merged: "Dec 2025",
          description:
            "Implemented early fail-fast validation for CRD group/version/kind declarations during synthesis.",
        },
      ],
    },
    {
      org: "railgrid/railgrid",
      orgUrl: "https://github.com/railgrid/railgrid",
      logoUrl: "",
      icon: undefined,
      description:
        "Early-stage AI infrastructure startup. Cold-reached team and shipped 2 merged PRs within days of first contact.",
      prs: [
        {
          title: "Remove legacy kro broker-client stub trap",
          href: "https://github.com/railgrid/railgrid/pull/747",
          number: "#747",
          merged: "Sep 2026",
          description:
            "Audited codebase, identified dead broker-client code with hardcoded stubs, and executed cleanup.",
        },
        {
          title: "Add end-to-end integration test suite for provider integration",
          href: "https://github.com/railgrid/railgrid/pull/761",
          number: "#761",
          merged: "Sep 2026",
          description:
            "Built comprehensive e2e test suite validating provider integration pipelines under real workload conditions.",
        },
      ],
    },
    {
      org: "kube-rs / Hyperledger",
      orgUrl: "https://github.com/kube-rs/kube",
      logoUrl: "/lfdt.png",
      icon: undefined,
      description:
        "Rust and Go cloud/security ecosystems. 4 merged PRs across kube-rs, Hyperledger Fabric-CA, and Hyperledger Identus.",
      prs: [
        {
          title: "Add no_spec attribute for CRDs without top-level spec in kube-rs",
          href: "https://github.com/kube-rs/kube",
          number: "kube-rs",
          merged: "2026",
          description:
            "Added no_spec derive attribute for CustomResourceDefinition synthesis in Rust.",
        },
        {
          title: "Fix client command flag parsing in Hyperledger Fabric-CA",
          href: "https://github.com/hyperledger/fabric-ca/pull/506",
          number: "#506",
          merged: "Jun 2026",
          description:
            "Fixed command detection when global flags precede subcommands in CLI invocation.",
        },
      ],
    },
  ],
} as const;
