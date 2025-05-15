import type React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../index.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-[80px] md:pt-[90px]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
