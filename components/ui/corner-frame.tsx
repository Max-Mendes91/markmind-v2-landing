export const CornerFrame = ({ children }: { children: React.ReactNode }) => {
  const corner = "absolute w-4 h-4 border-brand-orange/60"
  return (
    <div className="relative inline-flex items-center justify-center p-3">
      <span className={`${corner} top-0 left-0 border-t border-l corner-pulse`} style={{ animationDelay: "0s" }} />
      <span className={`${corner} top-0 right-0 border-t border-r corner-pulse`} style={{ animationDelay: "0.3s" }} />
      <span className={`${corner} bottom-0 left-0 border-b border-l corner-pulse`} style={{ animationDelay: "0.6s" }} />
      <span className={`${corner} bottom-0 right-0 border-b border-r corner-pulse`} style={{ animationDelay: "0.9s" }} />
      {children}
    </div>
  )
}
