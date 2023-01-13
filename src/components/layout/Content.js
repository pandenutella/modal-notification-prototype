import { Layout } from "antd";

const Content = ({ children }) => {
  return (
    <Layout.Content
      style={{
        minWidth: 900,
        maxWidth: 900,
        paddingTop: 20,
        margin: "auto",
      }}
    >
      {children}
    </Layout.Content>
  );
};

export default Content;
