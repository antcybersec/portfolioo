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
    "Distributed Systems, Systems & Cloud-Native Engineer. 139+ merged PRs across Kubernetes, Meshery, Argo CD, OpenAirInterface 5G & CNCF projects. Computer Science at BITS Pilani (CGPA 8.9/10).",
  summary:
    "Computer Science at [BITS Pilani](/#education) (CGPA **8.9/10**) with **139+ merged PRs** across global infrastructure: **18 merged PRs** in [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes), **24 merged PRs** in [Meshery](https://github.com/meshery/meshery), **14 merged PRs** in [OpenAirInterface 5G](https://github.com/duranta-project/openairinterface5g), **11 merged PRs** in [Argo CD](https://github.com/argoproj/argo-cd), **12 merged PRs** in [Kubeflow](https://github.com/kubeflow/hub), **14 merged PRs** in [ProjectDiscovery](https://github.com/projectdiscovery), **6 merged PRs** in [SeaweedFS](https://github.com/seaweedfs/seaweedfs), **4 merged PRs** in [LLVM libc++](https://github.com/llvm/llvm-project), and **5 merged PRs** in CNCF [kubernetes-sigs/kro](https://github.com/kubernetes-sigs/kro) including feature design-and-implementation (KREP-10). Experienced in distributed systems, controller-runtime reconciliation logic, SIMD vectorization, and production Go/Rust/C++ services. [Explore my projects](/#projects).",
  avatarUrl: "/avatar.png",
  skills: [
    { name: "Go", icon: Golang },
    { name: "Rust", icon: undefined },
    { name: "C / C++", icon: undefined },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "Python", icon: Python },
    { name: "SQL", icon: undefined },
    { name: "Bash", icon: undefined },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "client-go / CRDs", icon: undefined },
    { name: "Meshery", icon: undefined },
    { name: "Argo CD", icon: undefined },
    { name: "Kubeflow", icon: undefined },
    { name: "OpenAirInterface 5G", icon: undefined },
    { name: "LLVM libc++", icon: undefined },
    { name: "SeaweedFS", icon: undefined },
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
    { href: "/cv.pdf", icon: FileText, label: "CV" },
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
      href: "https://diskmon.vercel.app/",
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
          type: "Website",
          href: "https://diskmon.vercel.app/",
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
    {
      title: "Summer of Bitcoin Developer Challenge",
      dates: "2026",
      location: "Global",
      description:
        "Built Chain Lens, a Bitcoin transaction and block analyzer with an interactive CLI and a web interface.",
      links: [],
    },
  ] as Hackathon[],

  openSource: [
    {
      org: "meshery/meshery",
      orgUrl: "https://github.com/meshery/meshery",
      logoUrl: "/logos/meshery.png",
      icon: undefined,
      description:
        "24 merged PRs in Meshery cloud native management plane: server nil-guards, MeshSync handlers, UUID validation, and UI state management.",
      prs: [
        {
          title: "Guard nil provider and nil logger in performance profile handlers",
          href: "https://github.com/meshery/meshery/pull/23772",
          number: "#23772",
          merged: "Nov 2026",
          description:
            "Hardened performance profile HTTP handlers against nil-pointer dereferences.",
        },
        {
          title: "Guard nil provider, persister, and logger across MeshSync handlers",
          href: "https://github.com/meshery/meshery/pull/23770",
          number: "#23770",
          merged: "Nov 2026",
          description:
            "Guarded MeshSync event and status handlers against uninitialized runtime context panics.",
        },
        {
          title: "Return 404 for missing filters and validate path UUIDs in filter handlers",
          href: "https://github.com/meshery/meshery/pull/23726",
          number: "#23726",
          merged: "Nov 2026",
          description:
            "Implemented strict UUID path param validation and RESTful 404 error responses.",
        },
      ],
    },
    {
      org: "kubernetes/kubernetes",
      orgUrl: "https://github.com/kubernetes/kubernetes",
      logoUrl: "/logos/kubernetes.png",
      icon: undefined,
      description:
        "18 merged PRs in core Kubernetes across SIG Node, SIG Scheduling, SIG Auth, and SIG Architecture: client-go races, serving certificates, apiserver storage, and validation.",
      prs: [
        {
          title: "scheduler: avoid mutating package-level scheduledPodInfo in test",
          href: "https://github.com/kubernetes/kubernetes/pull/143132",
          number: "#143132",
          merged: "Nov 2026",
          description:
            "Eliminated race condition from shared package-level test state mutation in scheduler tests.",
        },
        {
          title: "kubelet: honor serverCertificateKeyAlgorithm for serving cert",
          href: "https://github.com/kubernetes/kubernetes/pull/142434",
          number: "#142434",
          merged: "Oct 2026",
          description:
            "Configured kubelet to honor serverCertificateKeyAlgorithm during self-signed serving cert generation (ECDSA-P256, RSA, ML-DSA).",
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
      org: "duranta-project/openairinterface5g",
      orgUrl: "https://github.com/duranta-project/openairinterface5g",
      logoUrl: "/logos/openairinterface.png",
      icon: undefined,
      description:
        "14 merged PRs in 3GPP 5G NR RAN Stack (C/C++): SIMD vectorization without AVX2, NAS/F1AP/NGAP decoders, and integer overflow mitigations.",
      prs: [
        {
          title: "PHY: use 128-bit vectors in mult_complex_vectors() without AVX2",
          href: "https://github.com/duranta-project/openairinterface5g/pull/1085",
          number: "#1085",
          merged: "Nov 2026",
          description:
            "Implemented 128-bit SIMD vector routines accelerating complex vector multiplication on non-AVX2 architectures.",
        },
        {
          title: "NGAP, S1AP: fix signed shift overflow in node ID from hostname",
          href: "https://github.com/duranta-project/openairinterface5g/pull/1045",
          number: "#1045",
          merged: "Nov 2026",
          description:
            "Resolved undefined behavior in gNB node ID bitshifts derived from hostnames across NGAP/S1AP.",
        },
        {
          title: "nrPolar: use 128-bit vectors in decoder without AVX2",
          href: "https://github.com/duranta-project/openairinterface5g/pull/992",
          number: "#992",
          merged: "Nov 2026",
          description:
            "Optimized 5G NR polar channel decoder kernels with 128-bit vectorization.",
        },
      ],
    },
    {
      org: "argoproj/argo-cd",
      orgUrl: "https://github.com/argoproj/argo-cd",
      logoUrl: "/logos/argocd.png",
      icon: undefined,
      description:
        "11 merged PRs in Argo CD GitOps controller, unauthenticated gRPC health probes, Vault health checks, and CMP plugin servers.",
      prs: [
        {
          title: "feat(health): add health check for Vault Secrets Operator VaultStaticSecret",
          href: "https://github.com/argoproj/argo-cd/pull/30574",
          number: "#30574",
          merged: "Oct 2026",
          description:
            "Authored native health assessment check evaluating VaultStaticSecret CRD readiness.",
        },
        {
          title: "fix(server): allow gRPC health check without authentication",
          href: "https://github.com/argoproj/argo-cd/pull/30474",
          number: "#30474",
          merged: "Oct 2026",
          description:
            "Enabled standard unauthenticated gRPC health probe check on Argo CD server endpoints (cherry-picked for 3.3).",
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
      logoUrl: "/logos/kubeflow.png",
      icon: undefined,
      description:
        "12 merged PRs across Kubeflow Hub and MCP server: OCI layer packaging, model artifact resolution, and event pipelines.",
      prs: [
        {
          title: "fix(csi): pick the model artifact when a version has other artifacts",
          href: "https://github.com/kubeflow/hub/pull/3421",
          number: "#3421",
          merged: "Oct 2026",
          description:
            "Fixed model artifact resolution when multiple distinct artifacts are encapsulated in a single version.",
        },
        {
          title: "fix(async-upload): keep base image layout out of model layers",
          href: "https://github.com/kubeflow/hub/pull/3411",
          number: "#3411",
          merged: "Oct 2026",
          description:
            "Isolated base image layers during async OCI packaging to prevent image layer bloat and pollution.",
        },
        {
          title: "fix(python): decode JWT payloads as base64url",
          href: "https://github.com/kubeflow/hub/pull/3400",
          number: "#3400",
          merged: "Oct 2026",
          description:
            "Fixed JWT payload parsing by properly implementing RFC 7515 base64url decoding.",
        },
      ],
    },
    {
      org: "llvm/llvm-project",
      orgUrl: "https://github.com/llvm/llvm-project",
      logoUrl: "/logos/llvm.png",
      icon: undefined,
      description:
        "4 merged PRs in LLVM libc++ standard library implementation of ISO C++ defect reports.",
      prs: [
        {
          title: "[libc++] Implement LWG4188: ostream::sentry destructor exception handling",
          href: "https://github.com/llvm/llvm-project/pull/241194",
          number: "#241194",
          merged: "Nov 2026",
          description:
            "Guaranteed no unhandled exceptions escape during output stream synchronization in std::basic_ostream::sentry.",
        },
        {
          title: "[libc++] Mark LWG4269 as Complete and test unique_copy argument order",
          href: "https://github.com/llvm/llvm-project/pull/239085",
          number: "#239085",
          merged: "Oct 2026",
          description:
            "Added test validation verifying operand evaluation order in std::unique_copy.",
        },
      ],
    },
    {
      org: "seaweedfs/seaweedfs",
      orgUrl: "https://github.com/seaweedfs/seaweedfs",
      logoUrl: "/logos/seaweedfs.png",
      icon: undefined,
      description:
        "6 merged PRs in SeaweedFS distributed scale-out storage: S3 circuit breakers and FUSE mount safety.",
      prs: [
        {
          title: "shell: fix s3.circuitBreaker help examples and error messages",
          href: "https://github.com/seaweedfs/seaweedfs/pull/12657",
          number: "#12657",
          merged: "Nov 2026",
          description:
            "Implemented and validated shell command arguments and configuration handlers for S3 circuit breakers.",
        },
        {
          title: "mount: fail the write when swap file chunk cannot be created",
          href: "https://github.com/seaweedfs/seaweedfs/pull/12655",
          number: "#12655",
          merged: "Oct 2026",
          description:
            "Prevented silent data corruption in FUSE mounts by propagating write failures on unallocated swap chunks.",
        },
      ],
    },
    {
      org: "projectdiscovery",
      orgUrl: "https://github.com/projectdiscovery",
      logoUrl: "/logos/projectdiscovery.png",
      icon: undefined,
      description:
        "14 merged PRs in offensive security tooling (httpx, nuclei, interactsh, dsl, subfinder, naabu).",
      prs: [
        {
          title: "fix(headless): serialize screenshot network event handlers in httpx",
          href: "https://github.com/projectdiscovery/httpx/pull/2723",
          number: "#2723",
          merged: "Nov 2026",
          description:
            "Eliminated concurrency race conditions during headless Chrome DOM snapshots under high probe throughput.",
        },
        {
          title: "fix(dns): record query type of every DNS interaction in interactsh",
          href: "https://github.com/projectdiscovery/interactsh/pull/1504",
          number: "#1504",
          merged: "Oct 2026",
          description:
            "Enhanced out-of-band correlation telemetry by logging granular DNS query types for every callback.",
        },
      ],
    },
    {
      org: "kubernetes-sigs/kro",
      orgUrl: "https://github.com/kubernetes-sigs/kro",
      logoUrl: "/logos/kro.png",
      icon: undefined,
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
      logoUrl: "/logos/railgrid.png",
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
      org: "kube-rs / KubeVirt / Hyperledger",
      orgUrl: "https://github.com/kube-rs/kube",
      logoUrl: "/logos/kube-rs.png",
      icon: undefined,
      description:
        "Rust, Go and cloud/security ecosystems. Merged PRs across kube-rs, KubeVirt, Hyperledger Fabric-CA, and Hyperledger Identus.",
      prs: [
        {
          title: "Add no_spec attribute for CRDs without top-level spec in kube-rs",
          href: "https://github.com/kube-rs/kube/pull/2071",
          number: "#2071",
          merged: "2026",
          description:
            "Added no_spec derive attribute for CustomResourceDefinition synthesis in Rust.",
        },
        {
          title: "Unify stream controller trigger runtime bounds in kube-rs",
          href: "https://github.com/kube-rs/kube/pull/2076",
          number: "#2076",
          merged: "2026",
          description:
            "Unified runtime trait bounds across kube-rs stream controller triggers.",
        },
        {
          title: "Verify anti-affinity pod spreading for KubeVirt infra deployments",
          href: "https://github.com/kubevirt/kubevirt/pull/19685",
          number: "#19685",
          merged: "2026",
          description:
            "Added verification that KubeVirt infrastructure deployments spread pods via anti-affinity.",
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
