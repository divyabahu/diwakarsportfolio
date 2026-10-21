// Hybrid multi-cloud network: users reach apps in an AWS VPC and an Azure VNet,
// the two clouds are joined by a site-to-site IPsec VPN, and on-prem VMware / Hyper-V
// servers migrate into each cloud (AWS Transform, Azure Migrate).

const P = {
  usersAws: 'M186,27 C150,32 98,48 98,82',
  usersAz: 'M214,27 C250,32 302,48 302,82',
  vpn: 'M143,222 C143,256 257,256 257,222',
  vpnBack: 'M257,222 C257,256 143,256 143,222',
  migAws: 'M130,290 C70,290 40,268 40,237',
  migAz: 'M270,290 C330,290 360,268 360,237',
}

const W = 72
const H = 20

function Node({ x, y, w = W, h = H, label, kind }) {
  return (
    <g className={`arch2__node arch2__node--${kind}`}>
      <rect x={x} y={y} width={w} height={h} rx="5" />
      <text x={x + w / 2} y={y + h / 2 + 3} textAnchor="middle" className="mono">{label}</text>
    </g>
  )
}

function Packet({ d, color, dur = 3, delay = 0 }) {
  return (
    <circle
      r="2.6"
      fill={color}
      className="arch2__packet"
      style={{ offsetPath: `path('${d}')`, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
    />
  )
}

export default function ArchitectureMap() {
  return (
    <div className="arch">
      <div className="arch__label mono">hybrid multi-cloud topology · live</div>
      <svg
        viewBox="0 0 400 318"
        className="arch__svg"
        role="img"
        aria-label="Network diagram: users reach an application load balancer in an AWS VPC and an Application Gateway in an Azure VNet. The AWS Transit Gateway and Azure VPN Gateway are linked by a site-to-site IPsec VPN, and on-premises VMware and Hyper-V servers migrate to AWS with AWS Transform and to Azure with Azure Migrate."
      >
        {/* Cloud regions */}
        <rect x="6" y="40" width="184" height="197" rx="10" className="arch2__region arch2__region--aws" />
        <text x="16" y="54" className="arch2__region-label arch2__region-label--aws mono">AWS · ap-south-1</text>
        <rect x="14" y="62" width="168" height="128" rx="8" className="arch2__net" />
        <text x="22" y="74" className="arch2__net-label mono">VPC 10.0.0.0/16</text>

        <rect x="210" y="40" width="184" height="197" rx="10" className="arch2__region arch2__region--azure" />
        <text x="220" y="54" className="arch2__region-label arch2__region-label--azure mono">Azure · Central India</text>
        <rect x="218" y="62" width="168" height="128" rx="8" className="arch2__net" />
        <text x="226" y="74" className="arch2__net-label mono">VNet 10.1.0.0/16</text>

        {/* Edges */}
        <path d={P.usersAws} className="arch2__edge arch2__edge--traffic" />
        <path d={P.usersAz} className="arch2__edge arch2__edge--traffic" />
        <path d="M98,102 L57,116 M98,102 L139,116 M57,136 L57,152 M139,136 L139,152 M143,190 L143,202" className="arch2__edge" />
        <path d="M302,102 L261,116 M302,102 L343,116 M261,136 L261,152 M343,136 L343,152 M257,190 L257,202" className="arch2__edge" />
        <path d={P.vpn} className="arch2__edge arch2__edge--vpn" />
        <path d={P.migAws} className="arch2__edge arch2__edge--mig" />
        <path d={P.migAz} className="arch2__edge arch2__edge--mig" />

        {/* Users */}
        <g className="arch2__node arch2__node--users">
          <rect x="150" y="6" width="100" height="21" rx="10.5" />
          <text x="200" y="20" textAnchor="middle" className="mono">users · internet</text>
        </g>

        {/* AWS */}
        <Node x={62} y={82} label="ALB + WAF" kind="aws" />
        <Node x={21} y={116} label="EC2 ASG" kind="aws" />
        <Node x={103} y={116} label="EKS" kind="aws" />
        <Node x={21} y={152} label="RDS" kind="aws" />
        <Node x={103} y={152} label="S3" kind="aws" />
        <Node x={14} y={202} w={78} label="CloudWatch" kind="gov" />
        <Node x={104} y={202} w={78} label="Transit GW" kind="aws" />

        {/* Azure */}
        <Node x={266} y={82} label="App GW + WAF" kind="azure" />
        <Node x={225} y={116} label="VM Scale Set" kind="azure" />
        <Node x={307} y={116} label="Private EP" kind="azure" />
        <Node x={225} y={152} label="Azure SQL" kind="azure" />
        <Node x={307} y={152} label="Blob Storage" kind="azure" />
        <Node x={218} y={202} w={78} label="VPN Gateway" kind="azure" />
        <Node x={308} y={202} w={78} label="Defender" kind="gov" />

        {/* Link + migration labels */}
        <text x="200" y="262" textAnchor="middle" className="arch2__link-label mono">site-to-site IPsec VPN</text>
        <text x="92" y="264" textAnchor="middle" className="arch2__mig-label mono">AWS Transform</text>
        <text x="308" y="264" textAnchor="middle" className="arch2__mig-label mono">Azure Migrate</text>

        {/* On-prem */}
        <g className="arch2__node arch2__node--onprem">
          <rect x="130" y="272" width="140" height="36" rx="7" />
          <text x="200" y="287" textAnchor="middle" className="mono">on-prem data centre</text>
          <text x="200" y="300" textAnchor="middle" className="mono arch2__sub">VMware · Hyper-V</text>
        </g>

        {/* Moving traffic */}
        <Packet d={P.usersAws} color="var(--aws)" dur={2.6} />
        <Packet d={P.usersAz} color="var(--azure)" dur={2.6} delay={1.3} />
        <Packet d={P.vpn} color="var(--violet)" dur={2.2} />
        <Packet d={P.vpnBack} color="var(--pink)" dur={2.2} delay={1.1} />
        <Packet d={P.migAws} color="var(--green)" dur={3.4} />
        <Packet d={P.migAz} color="var(--green)" dur={3.4} delay={1.7} />
      </svg>

      <div className="arch2__legend mono">
        <span><i style={{ background: 'var(--aws)' }} />AWS</span>
        <span><i style={{ background: 'var(--azure)' }} />Azure</span>
        <span><i style={{ background: 'var(--violet)' }} />VPN link</span>
        <span><i style={{ background: 'var(--green)' }} />migration</span>
      </div>

      <style>{`
        .arch { padding: 0 16px 18px; }
        .arch__label { font-size: 10.5px; color: var(--text-faint); margin-bottom: 8px; letter-spacing: .04em; }
        .arch__svg { width: 100%; height: auto; overflow: visible; display: block; }

        .arch2__region { stroke-width: 1.2; stroke-dasharray: 5 4; }
        .arch2__region--aws { fill: rgba(255,169,56,0.06); stroke: rgba(255,169,56,0.6); }
        .arch2__region--azure { fill: rgba(77,181,255,0.06); stroke: rgba(77,181,255,0.6); }
        .arch2__region-label { font-size: 8.5px; font-weight: 600; letter-spacing: .03em; }
        .arch2__region-label--aws { fill: var(--aws); }
        .arch2__region-label--azure { fill: var(--azure); }
        .arch2__net { fill: rgba(255,255,255,0.025); stroke: rgba(255,255,255,0.14); stroke-width: 1; stroke-dasharray: 2 3; }
        .arch2__net-label { font-size: 7px; fill: var(--text-faint); }

        .arch2__edge { fill: none; stroke: rgba(180,193,216,0.35); stroke-width: 1.2; }
        .arch2__edge--traffic { stroke: rgba(180,193,216,0.45); }
        .arch2__edge--vpn { stroke: var(--violet); stroke-width: 1.6; stroke-dasharray: 4 3; animation: arch2-dash 1.2s linear infinite; }
        .arch2__edge--mig { stroke: var(--green); stroke-width: 1.4; stroke-dasharray: 5 4; animation: arch2-dash 1.6s linear infinite; }

        .arch2__node rect { stroke-width: 1.1; }
        .arch2__node text { font-size: 8px; fill: var(--text); }
        .arch2__node--aws rect { fill: rgba(255,169,56,0.14); stroke: var(--aws); }
        .arch2__node--azure rect { fill: rgba(77,181,255,0.14); stroke: var(--azure); }
        .arch2__node--gov rect { fill: rgba(187,142,255,0.14); stroke: var(--violet); }
        .arch2__node--users rect { fill: rgba(255,116,192,0.14); stroke: var(--pink); }
        .arch2__node--onprem rect { fill: rgba(62,224,161,0.12); stroke: var(--green); }
        .arch2__node--onprem .arch2__sub { fill: var(--text-dim); font-size: 7.5px; }

        .arch2__link-label { font-size: 7.5px; fill: var(--violet); }
        .arch2__mig-label { font-size: 7.5px; fill: var(--green); }

        .arch2__packet { offset-rotate: 0deg; animation-name: arch2-travel; animation-timing-function: linear; animation-iteration-count: infinite; opacity: 0; }
        @keyframes arch2-travel {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes arch2-dash { to { stroke-dashoffset: -18; } }

        .arch2__legend { display: flex; flex-wrap: wrap; gap: 6px 14px; margin-top: 10px; font-size: 10px; color: var(--text-dim); }
        .arch2__legend span { display: inline-flex; align-items: center; gap: 6px; }
        .arch2__legend i { width: 8px; height: 8px; border-radius: 2px; display: inline-block; }

        @media (prefers-reduced-motion: reduce) {
          .arch2__packet { animation: none; opacity: 0; }
          .arch2__edge--vpn, .arch2__edge--mig { animation: none; }
        }
      `}</style>
    </div>
  )
}
