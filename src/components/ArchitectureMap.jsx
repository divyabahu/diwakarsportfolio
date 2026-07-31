export default function ArchitectureMap() {
  return (
    <div className="arch">
      <div className="arch__label mono">multi-cloud topology · live</div>
      <svg viewBox="0 0 340 150" className="arch__svg" role="img" aria-label="Diagram of AWS and Azure regions connected through a governance and monitoring hub">
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--aws)" />
            <stop offset="100%" stopColor="var(--azure)" />
          </linearGradient>
        </defs>

        {/* edges */}
        <path d="M60,35 C110,35 130,75 170,75" className="arch__edge" />
        <path d="M60,115 C110,115 130,75 170,75" className="arch__edge" />
        <path d="M170,75 C210,75 230,35 280,35" className="arch__edge" />
        <path d="M170,75 C210,75 230,115 280,115" className="arch__edge" />

        {/* traveling packets */}
        <circle r="2.6" fill="var(--aws)" className="arch__packet arch__packet--1" />
        <circle r="2.6" fill="var(--azure)" className="arch__packet arch__packet--2" />

        {/* AWS nodes */}
        <g>
          <rect x="20" y="20" width="80" height="30" rx="6" className="arch__node arch__node--aws" />
          <text x="60" y="39" textAnchor="middle" className="arch__node-text mono">EC2 / VPC</text>
        </g>
        <g>
          <rect x="20" y="100" width="80" height="30" rx="6" className="arch__node arch__node--aws" />
          <text x="60" y="119" textAnchor="middle" className="arch__node-text mono">S3 / IAM</text>
        </g>

        {/* Hub */}
        <g>
          <rect x="140" y="60" width="60" height="30" rx="6" className="arch__node arch__node--hub" />
          <text x="170" y="79" textAnchor="middle" className="arch__node-text mono">Governance</text>
        </g>

        {/* Azure nodes */}
        <g>
          <rect x="240" y="20" width="80" height="30" rx="6" className="arch__node arch__node--azure" />
          <text x="280" y="39" textAnchor="middle" className="arch__node-text mono">VMs / VNet</text>
        </g>
        <g>
          <rect x="240" y="100" width="80" height="30" rx="6" className="arch__node arch__node--azure" />
          <text x="280" y="119" textAnchor="middle" className="arch__node-text mono">ASR / Backup</text>
        </g>
      </svg>

      <style>{`
        .arch { padding: 0 16px 18px; }
        .arch__label { font-size: 10.5px; color: var(--text-faint); margin-bottom: 8px; letter-spacing: .04em; }
        .arch__svg { width: 100%; height: auto; overflow: visible; }
        .arch__edge {
          fill: none;
          stroke: var(--border);
          stroke-width: 1.5;
        }
        .arch__node {
          fill: var(--panel-2);
          stroke: var(--border);
          stroke-width: 1;
        }
        .arch__node--aws { stroke: rgba(255,159,28,0.5); }
        .arch__node--azure { stroke: rgba(58,160,255,0.5); }
        .arch__node--hub { stroke: rgba(176,131,240,0.55); }
        .arch__node-text { font-size: 8.5px; fill: var(--text-dim); }

        .arch__packet--1 { offset-path: path('M60,35 C110,35 130,75 170,75'); animation: travel1 3.2s linear infinite; }
        .arch__packet--2 { offset-path: path('M170,75 C210,75 230,35 280,35'); animation: travel2 3.2s linear infinite 1.1s; }

        @keyframes travel1 { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        @keyframes travel2 { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          .arch__packet--1, .arch__packet--2 { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
