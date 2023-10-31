import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../button/primary-button";
import AnimeButton from "../button/anime-button";
import Button from "react-bootstrap/Button";

function AppHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const imgRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (imgRef.current) {
        console.log("Image reference after 10 milliseconds:", imgRef.current);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        className=" mb-3 row p-0 m-0 d-flex align-items-center justify-content-between"
        style={{ height: "auto", maxHeight: "9vh" }}
      >
        {/* <Container fluid> */}
        <div className="row m-0 p-0 d-flex align-items-center justify-content-center">
          <div className="col-8 col-md-4 col-lg-3 ">
            <Navbar.Brand
              href="#"
              className="row m-0 p-0 d-flex align-items-center"
            >
              <div className="col-2">
                <img
                  src={Logo as any}
                  style={{ width: "auto", height: "5vh" }}
                  ref={imgRef}
                />
              </div>
              <div className="col-10">
                <h1 className="Heading-white-lg">Rabia Azhar</h1>
              </div>
            </Navbar.Brand>
          </div>
          <div className="col-md-8 col-lg-9 d-none d-md-block">
            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
              <Nav.Link>
                <Link className="Header-item" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="Header-item" to="/work">
                  Work
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="Header-item" to="/tool">
                  Tools
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="Header-item" to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="d-none d-lg-block">
                <AnimeButton
                  title="Let's Talk"
                  className="Header-item-2"
                  onClick={() => navigate("/contact")}
                  // to=""
                >
                  <Link
                    className="d-none d-md-block border-none Header-item"
                    // onClick={() => navigate('/become-a-member')}
                    to="/contact"
                  ></Link>
                </AnimeButton>
              </Nav.Link>
            </Nav>
          </div>
          <div className="col d-block d-md-none text-end">
            <Button variant="primary" onClick={handleShow}>
              Launch
            </Button>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              style={{ width: "auto", background: "rgb(38, 38, 38,0.9)" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Navbar.Brand
                    href="#"
                    className="row m-0 p-0 d-flex align-items-center"
                  >
                    <div className="col-2">
                      <img
                        src={Logo as any}
                        style={{ width: "auto", height: "5vh" }}
                        ref={imgRef}
                      />
                    </div>
                    <div className="col-10">
                      <h1 className="Heading-white-lg">Rabia Azhar</h1>
                    </div>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                  <Nav.Link>
                    <Link className="Header-item" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="Header-item" to="/work">
                      Work
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="Header-item" to="/tool">
                      Tools
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="Header-item" to="/about">
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="">
                    <AnimeButton
                      title="Let's Talk"
                      className="Header-item-2"
                      onClick={() => navigate("/contact")}
                      // to=""
                    >
                      <Link
                        className="d-none d-md-block border-none Header-item"
                        // onClick={() => navigate('/become-a-member')}
                        to="/contact"
                      ></Link>
                    </AnimeButton>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default AppHeader;
