import type { CornersProps } from "@/types"

export const Corners = ({ color }: CornersProps) => {
  const s = { borderColor: color }
  const b = "absolute w-3 h-3 opacity-25"
  return (
    <>
      <span className={`${b} top-2 left-2   border-t border-l`} style={s} />
      <span className={`${b} top-2 right-2  border-t border-r`} style={s} />
      <span className={`${b} bottom-2 left-2  border-b border-l`} style={s} />
      <span className={`${b} bottom-2 right-2 border-b border-r`} style={s} />
    </>
  )
}
