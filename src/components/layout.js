/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useRef} from "react";
import PropTypes from "prop-types"
import { gsap } from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./styles/style.css"
import "./layout.css"

gsap.registerPlugin(Draggable, ScrollTrigger);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div class="container">
        <div class="bottom-container">
            <div class="half1"></div>
            <div class="half2"></div>
        </div>
        <div class="top-container">
            <section class="slide slide1"><p>s1</p></section>
            <section class="slide slide2"><p>s2</p></section>
            <section class="slide slide3"><p>s3</p></section> 
        </div>

        <div class="drag-proxy"></div>
    </div>
    </>
  )
}


//end
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
