import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import Anim from './Animation';
import { ImBlog } from "react-icons/im";


function NavigationBar() {
  const [expand, updateExpanded] = React.useState(false);
  const [navColour, updateNavbar] = React.useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
    expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? "sticky" : "navbar"}
  >
    <Container>
      <Navbar.Brand href="/" className="d-flex">
      {' BK.'}<Anim/>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
          <Navbar.Collapse className="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">

              {/* Home Button */}
              <Nav.Item>
                <Nav.Link href="#home">
                  <AiOutlineHome style={{ marginBottom: "2px" ,marginRight:"10px"}} />
                  Home
                </Nav.Link>
              </Nav.Item>

              {/* About Me Button */}

              <Nav.Item>
                <Nav.Link href="#about">
                  <AiOutlineUser style={{ marginBottom: "2px" ,marginRight:"10px"}} />
                  About Me
                </Nav.Link>
              </Nav.Item>

              {/* Projects Button */}
              <Nav.Item>
                <Nav.Link href="#projects">
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" ,marginRight:"10px"}} />
                  Projects
                </Nav.Link>
              </Nav.Item>

              {/* Resume Button */}
              <Nav.Item>
                <Nav.Link href="#resume">
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" ,marginRight:"10px"}} />
                  Resume
                </Nav.Link>
              </Nav.Item>

              {/* Blogs */}
              <Nav.Item>
                <Nav.Link href="#blogs">
                  <ImBlog style={{ marginBottom: "2px",marginRight:"10px" }} />
                  Blogs
                </Nav.Link>
              </Nav.Item>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;