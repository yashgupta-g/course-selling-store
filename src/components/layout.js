/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./RESUABLE/Footer"
const Layout = ({ children }) => {

  return (
    <div>
        <main>{children}</main>
        <Footer>
          
        </Footer>
      </div>
  )
}

export default Layout
