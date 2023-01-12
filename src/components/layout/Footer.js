import { GithubOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(moment().format("yyyy"));
  }, []);

  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      © {year}{" "}
      <Typography.Link href="https://github.com/pandenutella">
        <GithubOutlined /> pandenutella
      </Typography.Link>
      . All rights reserved.
    </Layout.Footer>
  );
};

export default Footer;
