import { Button, Space, Typography } from "antd";
import useNotifications from "../hooks/useNotifications";

const HomePage = () => {
  const { notifications, showManual } = useNotifications();

  const manualNotifications = notifications.filter(
    (notification) => !notification.automatic
  );

  const handleClick = (key) => () => showManual(key);

  return (
    <>
      <Typography.Paragraph>
        Click to trigger the following Manual Notification(s):
      </Typography.Paragraph>
      <Space>
        {manualNotifications.map((notification) => (
          <Button
            key={notification.key}
            onClick={handleClick(notification.key)}
          >
            {notification.name}
          </Button>
        ))}
      </Space>
    </>
  );
};

export default HomePage;
