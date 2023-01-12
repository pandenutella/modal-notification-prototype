import { Layout } from "antd";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header></Layout.Header>
      <Layout.Content></Layout.Content>
      <Footer />
    </Layout>
  );
};

export default App;
