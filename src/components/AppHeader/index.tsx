import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Logo } from "../../assets";

function AppHeader() {
  const imgRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (imgRef.current) {
        console.log("Image reference after 10 milliseconds:", imgRef.current);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {["sm"].map((expand, index) => (
        <Navbar
          key={`navbar-${expand}-${index}`}
          expand={expand as any}
          className="border border-success mb-3 row p-0 m-0 "
          style={{ height: "auto", maxHeight:"9vh"}}
        >
          <Container fluid >
            <Navbar.Brand href="#">
              <img
                src={Logo as any}
                style={{ width: "auto", height: "5vh" }}
                ref={imgRef}
              />
            </Navbar.Brand>
            <Navbar.Toggle
            // className="border border-none"
            //   aria-controls={`offcanvasNavbar-expand-${expand}-${index}`}
            style={{outline:"none !important"}}
            >Swipe</Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}-${index}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}-${index}`}
              placement="end"
              style={{width:"15%", background:"rgb(38, 38, 38,0.5)"}}
            >
              <Offcanvas.Header closeButton className="border border-none">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}-${index}`}
                >
                  <img src={Logo as any} style={{ width: "auto", height: "5vh" }}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default AppHeader;
