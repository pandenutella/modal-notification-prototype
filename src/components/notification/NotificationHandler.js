import { Checkbox, Modal, Tabs, Typography } from "antd";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import useNotifications from "../../hooks/useNotifications";
import { selectNotifications } from "../../redux/slices/notifications.slice";

const NotificationHandler = () => {
  const { data, visibleData } = useSelector(selectNotifications);
  const { doNotShowAgain, back, toggleChecked } = useNotifications();

  const visibleKeys = visibleData.map((d) => d.key);
  const visibleDataString = visibleData
    .map((d) => `${d.key}:${d.checked}`)
    .join(";");

  const handleCheck = (key) => () => toggleChecked(key);

  const items = useMemo(() => {
    return data
      .filter((notification) => visibleKeys.includes(notification.key))
      .map((notification) => {
        const checked = visibleData.find(
          (d) => d.key === notification.key
        ).checked;

        return {
          key: notification.key,
          label: notification.name,
          children: (
            <>
              <Typography.Paragraph>
                {notification.description}
              </Typography.Paragraph>
              <Checkbox
                checked={checked}
                onChange={handleCheck(notification.key)}
              >
                Do not show this again
              </Checkbox>
            </>
          ),
        };
      });
  }, [visibleDataString]);

  const handleOk = () => doNotShowAgain();
  const handleCancel = () => back();

  return (
    <Modal
      title="Notifications"
      open={visibleKeys.length}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
    >
      <Tabs tabPosition="left" size="small" items={items} />
    </Modal>
  );
};

export default NotificationHandler;
