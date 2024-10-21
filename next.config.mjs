import rehypePrism from "rehype-prism-plus";
import createMDX from "@next/mdx";
 
/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
}
 
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
})
 
export default withMDX(nextConfig)