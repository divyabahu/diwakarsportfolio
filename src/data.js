export const profile = {
  name: "Divya Bahu Diwakar",
  role: "AWS & Azure Cloud Engineer",
  tagline: "Solutions Architect Professional · DevOps · Kubernetes · Cloud Security · FinOps",
  location: "Hyderabad, India",
  email: "dbd7667@gmail.com",
  phone: "+91 7667883632",
  linkedin: "linkedin.com/in/divya-bahu-diwakar-a7942a210",
  summary:
    "AWS Certified Solutions Architect Professional with 3+ years designing scalable, secure multi-cloud infrastructure across AWS and Azure. I automate remediation and cost workflows with Python and Lambda, run Well-Architected Reviews at scale, and lead disaster-recovery and Kubernetes modernization initiatives — turning cloud sprawl into governed, cost-efficient platforms.",
};

export const metrics = [
  { label: "Years in Cloud", value: "3+", unit: "yrs" },
  { label: "WAR Reviews Delivered", value: "40+", unit: "accounts" },
  { label: "Cost Savings Achieved", value: "40", unit: "%" },
  { label: "AWS Certifications", value: "4", unit: "active" },
];

export const services = [
  {
    id: "aws",
    name: "AWS Platform",
    status: "operational",
    detail: "EC2 · VPC · IAM · S3 · Route53 · Lambda · CloudTrail",
    accent: "aws",
  },
  {
    id: "azure",
    name: "Azure Platform",
    status: "operational",
    detail: "VMs · VNets · Defender · ASR · Storage · Azure AD",
    accent: "azure",
  },
  {
    id: "devops",
    name: "CI/CD & DevOps",
    status: "operational",
    detail: "GitHub Actions · Docker · Kubernetes",
    accent: "green",
  },
  {
    id: "security",
    name: "Cloud Security & FinOps",
    status: "operational",
    detail: "GuardDuty · Security Hub · Cost Explorer · CIS / PCI-DSS",
    accent: "violet",
  },
];

export const skillGroups = [
  {
    title: "Cloud Platforms",
    mono: "platforms",
    items: ["AWS", "Microsoft Azure"],
  },
  {
    title: "AWS Services",
    mono: "aws --list-services",
    items: [
      "EC2", "VPC", "IAM", "S3", "Route53", "Lambda", "CloudWatch", "SNS",
      "SES", "EventBridge", "API Gateway", "CloudTrail", "Organizations",
      "ACM", "VPN", "WorkSpaces",
    ],
  },
  {
    title: "Azure Services",
    mono: "az --list-services",
    items: [
      "Virtual Machines", "VNets", "WAF", "Defender", "Azure Site Recovery",
      "Storage Accounts", "Azure Backup", "Private Endpoints", "Azure AD",
    ],
  },
  {
    title: "DevOps & Automation",
    mono: "devops --toolchain",
    items: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "CloudFormation", "Python"],
  },
  {
    title: "Programming & Systems",
    mono: "stack --core",
    items: ["Python", "Core Java", "HTML", "CSS", "JavaScript", "React.js", "Linux", "Windows Server"],
  },
];

export const experience = [
  {
    company: "Infosprint Technologies Pvt. Ltd.",
    role: "Cloud Consultant",
    period: "Jan 2023 — Present",
    location: "Hyderabad, India",
    points: [
      "Designed and deployed end-to-end AWS architecture across EC2, VPC, Route53 and S3, ensuring scalability, high availability and secure operations.",
      "Automated cloud remediation workflows with Python, AWS Lambda and CloudFormation, cutting manual operational effort.",
      "Conducted AWS Well-Architected Framework Reviews across 40+ client accounts, improving compliance and securing AWS credits.",
      "Administered CloudWatch, EventBridge, SES, SNS, Cost Explorer, Compute Optimizer, VPN, API Gateway, Organizations, ACM, CloudTrail, WorkSpaces and Directory Services.",
      "Managed Azure Virtual Machines, VNets, Defender, Azure Site Recovery, WAF, Private Endpoints, Backup and Active Directory across multiple client tenants.",
      "Built FinOps optimization strategies automating EC2 scheduling, achieving up to 40% infrastructure cost savings.",
      "Implemented cloud security governance with IAM, GuardDuty, Inspector and Security Hub, aligned to CIS and PCI-DSS benchmarks.",
      "Configured load balancers, auto scaling groups, SSL certificates and hybrid networking for production workloads.",
      "Established CI/CD pipelines with GitHub Actions across dev and production environments.",
      "Led lift-and-shift migrations from AWS to Azure via Azure Migrate, and containerization PoCs with Docker and Kubernetes for hybrid modernization.",
      "Partnered directly with clients on governance, tagging policy, compliance tracking and cost-visibility dashboards.",
    ],
  },
  {
    company: "SVDIGISOL Pvt. Ltd.",
    role: "Software Developer Intern",
    period: "Aug 2022 — Dec 2022",
    location: "India",
    points: [
      "Built single-page e-commerce web apps with HTML, CSS, JavaScript and React.js — product listing, cart and routing.",
      "Optimized front-end rendering performance through efficient state management and reusable component design.",
      "Contributed to feature-enhancement discussions, delivering quality code within agile sprints.",
    ],
  },
];

export const projects = [
  {
    name: "AWS Well-Architected Reviews at Scale",
    tag: "Cloud Governance",
    description:
      "Ran structured Well-Architected Framework reviews across 40+ client AWS accounts, mapping findings to the five pillars and translating them into prioritized remediation roadmaps and secured AWS credits.",
    stack: ["AWS WAR", "Trusted Advisor", "Cost Explorer", "CloudFormation"],
  },
  {
    name: "Multi-Client FinOps Automation",
    tag: "Cost Optimization",
    description:
      "Automated EC2 scheduling and usage monitoring across client accounts to eliminate idle spend, pairing Compute Optimizer recommendations with Lambda-driven remediation — delivering up to 40% infrastructure cost savings.",
    stack: ["Lambda", "Python", "Compute Optimizer", "Cost Explorer"],
  },
  {
    name: "Hybrid Cloud Disaster Recovery",
    tag: "Business Continuity",
    description:
      "Integrated Azure Site Recovery and Recovery Services Vault for point-in-time recovery, and led AWS-to-Azure lift-and-shift migrations via Azure Migrate for enterprise production workloads.",
    stack: ["Azure Site Recovery", "Recovery Services Vault", "Azure Migrate"],
  },
  {
    name: "Kubernetes Containerization PoC",
    tag: "Modernization",
    description:
      "Led proof-of-concept initiatives containerizing legacy workloads with Docker and orchestrating them on Kubernetes, laying the groundwork for hybrid-cloud modernization.",
    stack: ["Docker", "Kubernetes", "GitHub Actions"],
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Professional", code: "SAP-C02", level: "Professional" },
  { name: "AWS Certified Solutions Architect – Associate", code: "SAA-C03", level: "Associate" },
  { name: "AWS Certified Cloud Practitioner", code: "CLF-C02", level: "Foundational" },
  { name: "AWS Well-Architected Review", code: "WAR", level: "Specialty" },
];

export const education = [
  {
    school: "BITS Pilani — Work Integrated Learning Program",
    degree: "Master of Technology, Cloud Computing",
    period: "2026 — 2028",
  },
  {
    school: "C.V. Raman Global University, Bhubaneswar",
    degree: "Bachelor of Technology, Mechanical Engineering",
    period: "2018 — 2022",
  },
];
