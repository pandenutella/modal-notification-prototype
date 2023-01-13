import NotificationsTables from "../components/notification/NotificationsTable";
import useNotifications from "../hooks/useNotifications";

const NotificationsPage = () => {
  const { initialized, notifications } = useNotifications();

  return (
    <NotificationsTables
      fetching={!initialized}
      notifications={notifications}
    />
  );
};

export default NotificationsPage;
