import React, {useRef,useState, useEffect} from "react";
import PropTypes from "prop-types"
import { gsap } from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./styles/style.css"
import "./layout.css"
import { useHorizontalScroll } from "./UseHorizontalScroll"
import HorizontalScroll from 'react-scroll-horizontal'



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
    
  const scrollRef = useHorizontalScroll();
  const [height, width] = useWindowSize();

  if(width < 720){
    //mobile
    return (
      <>
        <div className="container">
          <div className="bottom-container">
              <div className="half1"></div>
              <div className="half2"></div>
          </div>
          <div ref={scrollRef} className="topcontainer">
              <div className="slide slide1"><p>s1-m</p></div>
              <div className="slide slide2">
                <div className="half about"></div>
                <div className="half"></div>
              </div>
              <div className="slide slide3"><p>s3-m</p></div>
          </div>
      </div>
      </>
    )
  }else if(width >= 720){
    //desktop
    return (
      <>
        <div className="container">
          <div className="bottom-container">
              <div className="half1"></div>
              <div className="half2"></div>
          </div>
          <div ref={scrollRef} className="topcontainer">
            <HorizontalScroll reverseScroll = {true}>
              <div className="slide slide1"><p>s1</p></div>
              <div className="slide slide2">
                <div className="half about"></div>
                <div className="half"></div>
              </div>
              <div className="slide slide3"><p>s3</p></div>
            </HorizontalScroll> 
          </div>
      </div>
      </>
    )}

  
}

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

//end
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

