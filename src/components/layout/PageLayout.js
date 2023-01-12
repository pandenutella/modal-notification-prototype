import { Layout } from "antd";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout.Content style={{ padding: 20 }}>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default PageLayout;