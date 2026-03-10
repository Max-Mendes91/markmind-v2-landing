import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background overflow-x-clip pt-24">
      {children}
    </main>
    <Footer />
  </>
)

export default BlogLayout
