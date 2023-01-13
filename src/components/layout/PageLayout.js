import { Layout } from "antd";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
