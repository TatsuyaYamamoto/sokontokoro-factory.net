import React, { FC } from "react"

import Footer from "./Footer"

const Layout: FC = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
