import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  { key: "home", label: <Link to="/home">Home</Link> },
  {
    key: "notifications",
    label: <Link to="/notifications">Notifications</Link>,
  },
];

const Header = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" items={items} />
    </Layout.Header>
  );
};

export default Header;
