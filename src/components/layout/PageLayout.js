import { Layout } from "antd";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header></Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
