import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
