import { ORANGE, SLATE } from "@/lib/tokens"

const COLLECTION_GROUPS = [
  { name: "Research", color: ORANGE, tags: ["#brain", "#papers", "#notes"], delay: "0s" },
  { name: "Design", color: SLATE, tags: ["#ux", "#figma"], delay: "0.8s" },
] as const

export const BentoCollectionsMock = () => (
  <div className="w-full flex flex-col gap-3 p-1">
    {COLLECTION_GROUPS.map(({ name, color, tags, delay }) => (
      <div
        key={name}
        className="animate-note-appear"
        style={{ animationDelay: delay, animationDuration: "5s" }}
      >
        <div className="text-note font-black uppercase tracking-widest mb-1.5" style={{ color, opacity: 0.7 }}>
          {name}
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-note font-bold"
              style={{ background: `${color}10`, border: `1px solid ${color}22`, color }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
    <div className="text-micro text-white/55 font-bold uppercase tracking-widest mt-1">
      14 notes auto-grouped
    </div>
  </div>
)
