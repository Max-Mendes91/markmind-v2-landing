import type { MDXComponents } from "mdx/types"
import Link from "next/link"

const LINK_CLASSES =
  "text-brand-orange underline underline-offset-4 decoration-brand-orange/30 hover:decoration-brand-orange/60 transition-colors"

const headingComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 sm:mb-6 md:mb-8">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4 md:mb-5">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-6 sm:mt-8 mb-2 sm:mb-3">
      {children}
    </h3>
  ),
}

const textComponents: MDXComponents = {
  p: ({ children }) => (
    <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed mb-4 sm:mb-5">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-white/50">{children}</em>,
  a: ({ href, children, ...rest }) => {
    if (!href) return <span>{children}</span>

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={LINK_CLASSES} {...rest}>
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASSES}
        {...rest}
      >
        {children}
      </a>
    )
  },
}

const listComponents: MDXComponents = {
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-4 sm:pl-5 md:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-white/60 text-sm sm:text-base">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-4 sm:pl-5 md:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-white/60 text-sm sm:text-base">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-brand-orange/40 pl-4 sm:pl-5 md:pl-6 my-5 sm:my-6 md:my-8 italic text-white/40">
      {children}
    </blockquote>
  ),
}

const codeComponents: MDXComponents = {
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-sm text-brand-orange font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="rounded-xl bg-white/3 border border-white/8 p-4 sm:p-5 md:p-6 overflow-x-auto mb-4 sm:mb-5 md:mb-6 text-sm backdrop-blur-sm">
      {children}
    </pre>
  ),
}

const mediaComponents: MDXComponents = {
  hr: () => <hr className="border-white/8 my-6 sm:my-8 md:my-10" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="rounded-xl border border-white/10 my-5 sm:my-6 md:my-8 w-full"
    />
  ),
}

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...headingComponents,
  ...textComponents,
  ...listComponents,
  ...codeComponents,
  ...mediaComponents,
  ...components,
})
