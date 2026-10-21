export const profile = {
  name: "Divya Bahu Diwakar",
  role: "AWS & Azure Cloud Engineer",
  tagline: "Solutions Architect Professional · Cloud Migration · DevOps · Kubernetes · Cloud Security · FinOps",
  location: "Hyderabad, India",
  email: "dbd7667@gmail.com",
  phone: "+91 7667883632",
  linkedin: "linkedin.com/in/divya-bahu-diwakar-a7942a210",
  photo: "/profile/divya-profile-v3.jpg",
  resume: "/resume/Divya_Bahu_Diwakar_Resume.pdf",
  summary:
    "AWS Certified Solutions Architect Professional with 4.1+ years designing and operating scalable, secure multi-cloud infrastructure across AWS and Azure. I have migrated 70 on-premises VMware and Hyper-V servers to AWS and Azure across 6 clients using AWS Transform and Azure Migrate, cutting infrastructure costs by 15–35%. I automate remediation and cost workflows with Python and Lambda, run Well-Architected Reviews at scale, operate containerized workloads on Amazon EKS with CI/CD image pipelines into ECR, and built an internal SaaS platform that centralizes AWS governance, security assessment and FinOps reporting across 100+ client accounts.",
};

export const metrics = [
  { label: "Years in Cloud", value: "4.1", unit: "yrs" },
  { label: "AWS Accounts Governed", value: "100+", unit: "via SaaS platform" },
  { label: "Cost Savings Achieved", value: "40", unit: "%" },
  { label: "Servers Migrated to Cloud", value: "70", unit: "across 6 clients" },
];

export const services = [
  {
    id: "aws",
    name: "AWS Platform",
    status: "operational",
    detail: "EC2 · VPC · IAM · S3 · Route53 · Lambda · CloudTrail · EKS · ECR · Secrets Manager",
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
    detail: "GitHub Actions · Docker · Kubernetes · EKS · ECR",
    accent: "green",
  },
  {
    id: "migration",
    name: "Cloud Migration",
    status: "operational",
    detail: "AWS Transform · Azure Migrate · VMware ESXi · Hyper-V · Lift-and-Shift",
    accent: "aws",
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
      "ACM", "VPN", "WorkSpaces", "EKS", "ECR", "Secrets Manager",
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
    title: "Cloud Migration & Virtualization",
    mono: "migrate --plan",
    items: [
      "AWS Transform", "AWS Transform Discovery Tools", "Azure Migrate", "Lift-and-Shift",
      "On-Premises to Cloud", "VMware ESXi", "Microsoft Hyper-V",
    ],
  },
  {
    title: "DevOps & Automation",
    mono: "devops --toolchain",
    items: ["Docker", "Kubernetes", "Amazon EKS", "Amazon ECR", "GitHub Actions", "CI/CD", "CloudFormation", "Python"],
  },
  {
    title: "Product Development",
    mono: "stack --product",
    items: ["React 18", "Node.js", "Express.js", "SQL Server", "Amazon RDS", "Stripe API", "PDFKit"],
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
      "Led migration of 27 on-premises VMware servers to AWS through AWS Transform, using its discovery tools for server inventory and assessment.",
      "Executed Lift-and-Shift migration of 7 on-premises Microsoft Hyper-V servers into Amazon EC2 with AWS Transform, including post-migration validation.",
      "Delivered migration of 36 VMware servers to Microsoft Azure using Azure Migrate, covering discovery, assessment, replication and cutover.",
      "Completed 70 server migrations across 6 client engagements within a 2-hour RTO and 45-minute RPO, cutting infrastructure costs by 15–35%.",
      "Automated cloud remediation workflows with Python, AWS Lambda and CloudFormation, cutting manual operational effort.",
      "Conducted AWS Well-Architected Framework Reviews across 40+ client accounts, improving compliance and securing AWS credits.",
      "Administered CloudWatch, EventBridge, SES, SNS, Cost Explorer, Compute Optimizer, VPN, API Gateway, Organizations, ACM, CloudTrail, WorkSpaces and Directory Services, sustaining 97.3% patch compliance across managed environments.",
      "Deployed and operated containerized workloads on Amazon EKS, managing cluster upgrades, node groups, autoscaling and workload migrations from standalone Docker hosts, with CI/CD image pipelines into Amazon ECR.",
      "Managed Azure Virtual Machines, VNets, Defender, Azure Site Recovery, WAF, Private Endpoints, Backup and Active Directory across multiple client tenants.",
      "Built FinOps optimization strategies automating EC2 scheduling and usage monitoring, achieving up to 40% infrastructure cost savings.",
      "Strengthened cloud security governance with IAM, GuardDuty, Inspector and Security Hub aligned to CIS and PCI-DSS benchmarks, lifting average Security Hub compliance scores from 52% to 94% across audited accounts.",
      "Configured load balancers, auto scaling groups, SSL certificates and hybrid networking for production workloads.",
      "Established CI/CD pipelines with GitHub Actions across dev and production environments.",
      "Migrated production servers from AWS to Azure via Lift-and-Shift using Azure Migrate, and led containerization initiatives with Docker, Kubernetes and Amazon EKS/ECR for hybrid modernization.",
      "Enabled disaster recovery and backup automation with Azure Recovery Services Vault, achieving recovery time objectives as low as 1 hour 22 minutes.",
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
    name: "AWS Cloud Monitoring & Well-Architected Review Platform",
    tag: "Internal SaaS Product",
    description:
      "Architected an enterprise-grade platform giving Infosprint centralized monitoring and governance over 100+ client AWS accounts from a single console — automated discovery across EC2, VPCs, IAM, Security Groups, GuardDuty and Billing, multi-account Well-Architected Reviews, scheduled FinOps and security reports, Stripe-billed subscriptions across four pricing tiers, and one-click PDF report delivery.",
    stack: ["React 18", "Node.js/Express", "Amazon RDS", "AWS", "Stripe", "Secrets Manager", "PDFKit"],
  },
  {
    name: "On-Premises to AWS & Azure Migration Program",
    tag: "Cloud Migration",
    description:
      "Moved 70 on-premises servers to the cloud across 6 client engagements: 27 VMware servers to AWS with AWS Transform and its discovery tools, 7 Microsoft Hyper-V servers into Amazon EC2 with AWS Transform, and 36 VMware servers to Azure with Azure Migrate. Every cutover stayed within a 2-hour RTO and 45-minute RPO, and clients cut infrastructure costs by 15–35%.",
    stack: ["AWS Transform", "Azure Migrate", "VMware ESXi", "Hyper-V", "Amazon EC2", "Azure VMs"],
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
      "Integrated Azure Site Recovery and Recovery Services Vault for point-in-time recovery, achieving recovery time objectives as low as 1 hour 22 minutes, and led AWS-to-Azure lift-and-shift migrations via Azure Migrate for enterprise production workloads.",
    stack: ["Azure Site Recovery", "Recovery Services Vault", "Azure Migrate"],
  },
  {
    name: "EKS & ECR Container Platform",
    tag: "Modernization",
    description:
      "Migrated legacy workloads from standalone Docker hosts onto Amazon EKS, building CI/CD image pipelines into Amazon ECR with vulnerability scanning, lifecycle policies and staged promotion — establishing the production container platform for hybrid-cloud modernization.",
    stack: ["Amazon EKS", "Amazon ECR", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    code: "SAP-C02",
    level: "Professional",
    badge: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/sap-badge-resized.f4bc5c3ada8e5e5fa65328952172d792be1c721e.png",
    image: "/certifications/aws-sap.png",
    issued: "December 4, 2024",
    expires: "December 4, 2027",
    validation: "e89bcf2e0d4642658fb93f38aa395bef",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    code: "SAA-C03",
    level: "Associate",
    badge: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/saa-badge-resized.81aa49f64034b69db1ee58c09661659d0a1edab4.png",
    image: "/certifications/aws-saa.png",
    issued: "January 23, 2024",
    expires: "January 23, 2027",
    validation: "2c7bd444d6e841f0a21c0fb3a394a3d2",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    level: "Foundational",
    badge: "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/certification/approved/images/certification-badges/clf-badge-resized.fa975e48492d6866112b17ff5009f37052c9e515.png",
    image: "/certifications/aws-clf.png",
    issued: "October 12, 2023",
    expires: "October 12, 2026",
    validation: "8LQB19820BE41QG7",
  },
  {
    name: "AWS Well-Architected Best Practices",
    code: "WAR",
    level: "Training Completion",
    image: "/certifications/aws-war.png",
    issued: "January 10, 2025",
  },
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
  {
    school: "Banshi Dhari High School",
    degree: "Intermediate",
    period: "2016 — 2018",
  },
  {
    school: "S.T Karens High School",
    degree: "Matriculation",
    period: "2015 — 2016",
  },
];
