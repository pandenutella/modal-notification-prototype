import { useSelector } from "react-redux";
import NotificationsTables from "../components/notification/NotificationsTable";
import { selectNotifications } from "../redux/slices/notifications.slice";

const NotificationsPage = () => {
  const { initialized, data } = useSelector(selectNotifications);

  return <NotificationsTables fetching={!initialized} notifications={data} />;
};

export default NotificationsPage;
