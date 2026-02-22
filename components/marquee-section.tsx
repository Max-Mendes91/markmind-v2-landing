import {
  Bookmark,
  BrainCircuit,
  Layers2,
  Zap,
  Globe,
  Shield,
  Search,
  CheckCircle2,
} from "lucide-react"

const ITEMS = [
  { label: "Instant Capture",         Icon: Bookmark       },
  { label: "AI Organization",         Icon: BrainCircuit   },
  { label: "Smart Collections",       Icon: Layers2        },
  { label: "Zero Friction",           Icon: Zap            },
  { label: "Browser Native",          Icon: Globe          },
  { label: "Distraction Free",        Icon: Shield         },
  { label: "Thought Retrieval",       Icon: Search         },
  { label: "Works Everywhere",        Icon: CheckCircle2   },
]

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS]

export function MarqueeSection() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 py-5 bg-black">
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-black to-transparent" />

      <div className="flex w-max animate-marquee">
        {TRACK.map(({ label, Icon }, i) => (
          <div
            key={i}
            className="relative flex items-center gap-2.5 mx-6 px-4 py-2 shrink-0"
          >
            {/* Corner brackets */}
            <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-brand-orange/25" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-brand-orange/25" />
            <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-brand-orange/25" />
            <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-brand-orange/25" />

            <Icon className="w-3.5 h-3.5 text-brand-orange/70 shrink-0" />
            <span className="text-caption font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
