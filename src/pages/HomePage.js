import { Button } from "antd";
import useNotifications from "../hooks/useNotifications";

const HomePage = () => {
  const { showManual } = useNotifications();

  const handleClick = () => showManual("template");

  return <Button onClick={handleClick}>Display Template Notification</Button>;
};

export default HomePage;
