import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./logo.svg";
import { links, social } from "./data";

const NavBar = () => {
  const [showLink, setShowLink] = useState(false);
  const containerLinkRef = useRef(null);
  const linkRef = useRef(null);

  const toggleShowLink = () => {
    // console.log(linkRef.current.getBoundingClientRect().height);
    setShowLink(!showLink);
  };

  const linkStyle = {
    height: showLink
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="Logo" className="logo" />
          <button type="button" className="nav-toggle" onClick={toggleShowLink}>
            <FaBars />
          </button>
        </div>
        {/* {showLink && ( */}
        {/* <div className={showLink ? "link-container show-container" : "link-container"}> */}
        <div
          className="link-container"
          ref={containerLinkRef}
          style={linkStyle}
        >
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* )} */}

        {/* ==============Social link======== */}
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
