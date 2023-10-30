import { ReactNode } from "react";
import { Layout } from "antd";
import { AppBackground } from "../assets";
import AppHeader from "../components/AppHeader";

const { Header, Footer, Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Layout
        style={{
          background: `url(${AppBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "auto",
          height:"100vh"
        }}
      >
        <Header
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            backgroundColor: `rgb(38, 38, 38,0.5)`,
            // border:"1px solid red",
          }}
          // className="position-fixed fixed-top"
        >
          <AppHeader />
        </Header>

        <Content
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "auto",
            // backgroundColor: "white",
          }}
        >
          {/* <PagesMenu /> */}
          {children}
        </Content>
        {/* <BackToTop /> */}
        <Footer
          style={{
            margin: 0,
            padding: 0,
            // width: "auto",
            // // background: `url(${FooterSectionImage})`,
            // backgroundAttachment: " fixed",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }}
        >
          {/* <AppFooter /> */}
        </Footer>
      </Layout>
    </>
  );
}
