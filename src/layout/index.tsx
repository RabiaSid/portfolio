import React, { ReactNode, useState, useEffect } from "react";
import { Layout } from "antd";
import { AppBackground } from "../assets";
import AppHeader from "../components/AppHeader";

const { Header, Footer, Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  // const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const headerTimer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300); // Show header after 1 second

    // const loaderTimer = setTimeout(() => {
    //   setShowLoader(false);
    // }, 2000); // Hide loader after 1 second

    return () => {
      clearTimeout(headerTimer);
      // clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <>
      <Layout
        style={{
          background: `url(${AppBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "auto",
          height: "100vh",
          overflowY: "hidden"
        }}
      >
        <Header
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            backgroundColor: "rgb(38, 38, 38, 0.3)",
            transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 1s ease-in-out"
          }}
        >
          {headerVisible && <AppHeader />}
        </Header>

        <Content
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "auto"
          }}
        >
          {/* {showLoader ? (
            "please Wait..................." // Replace "Loader" with your actual loader component
          ) : ( */}
            {children}
          {/* )} */}
        </Content>

        <Footer
          style={{
            margin: 0,
            padding: 0
          }}
        >
          {/* <AppFooter /> */}
        </Footer>
      </Layout>
    </>
  );
}
