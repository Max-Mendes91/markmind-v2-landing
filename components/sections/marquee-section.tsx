import {
  Sparkles,
  Layers2,
  Globe,
  Zap,
  FolderTree,
  Cpu,
  BrainCircuit,
  Shield,
} from "lucide-react"
import type { MarqueeItem } from "@/types"

const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: "AI Folder Suggestions",          Icon: Sparkles     },
  { label: "Bulk Bookmark Organizer",        Icon: Layers2      },
  { label: "Chrome Extension",              Icon: Globe        },
  { label: "Organize Hundreds at Once",      Icon: Zap          },
  { label: "Respects Your Existing Folders", Icon: FolderTree   },
  { label: "Background Processing",         Icon: Cpu          },
  { label: "Multi-Provider AI",             Icon: BrainCircuit },
  { label: "Open Source & Private",          Icon: Shield       },
]

// Duplicate for seamless loop
const MARQUEE_TRACK = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

export const MarqueeSection = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-overlay-5 py-5 bg-background">
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee">
        {MARQUEE_TRACK.map(({ label, Icon }, i) => (
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
            <span className="text-caption font-bold uppercase tracking-[0.2em] text-overlay-50 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
