import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS, type Document } from "@contentful/rich-text-types"
import Link from "next/link"
import Image from "next/image"

const LINK_CLASSES =
  "text-brand-orange underline underline-offset-4 decoration-brand-orange/30 hover:decoration-brand-orange/60 transition-colors"

const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="font-bold text-white">{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => (
      <em className="italic text-white/50">{text}</em>
    ),
    [MARKS.CODE]: (text) => (
      <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-sm text-brand-orange font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => (
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 sm:mb-6 md:mb-8">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4 md:mb-5">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-6 sm:mt-8 mb-2 sm:mb-3">
        {children}
      </h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed mb-4 sm:mb-5">
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <ul className="list-disc list-outside pl-4 sm:pl-5 md:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-white/60 text-sm sm:text-base">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <ol className="list-decimal list-outside pl-4 sm:pl-5 md:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-white/60 text-sm sm:text-base">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node, children) => (
      <li className="leading-relaxed">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node, children) => (
      <blockquote className="border-l-2 border-brand-orange/40 pl-4 sm:pl-5 md:pl-6 my-5 sm:my-6 md:my-8 italic text-white/40">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="border-white/8 my-6 sm:my-8 md:my-10" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields
      const url = (file.url as string).startsWith("//")
        ? `https:${file.url}`
        : (file.url as string)
      const imgDetails = file.details?.image
      return (
        <Image
          src={url}
          alt={(title as string) ?? ""}
          width={imgDetails?.width ?? 1200}
          height={imgDetails?.height ?? 630}
          className="rounded-xl border border-white/10 my-5 sm:my-6 md:my-8 w-full h-auto"
        />
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const href = node.data.uri as string
      if (href.startsWith("/")) {
        return (
          <Link href={href} className={LINK_CLASSES}>
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
        >
          {children}
        </a>
      )
    },
  },
}

/** Render a Contentful Rich Text document to React elements */
export const renderRichText = (document: Document): React.ReactNode =>
  documentToReactComponents(document, renderOptions)
