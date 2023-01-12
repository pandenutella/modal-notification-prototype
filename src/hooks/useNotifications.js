import { useDispatch, useSelector } from "react-redux";
import {
  findAll,
  selectNotifications,
  setVisibleKeys,
} from "../redux/slices/notifications.slice";

const useNotifications = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectNotifications);

  const initialize = () => {
    dispatch(findAll());
  };

  const showAutomatic = () => {
    const visibleKeys = data
      .filter((notification) => !notification.manual)
      .map((notification) => notification.key);

    dispatch(setVisibleKeys(visibleKeys));
  };

  const showManual = (keys) => {
    dispatch(setVisibleKeys(keys));
  };

  const hide = () => {
    dispatch(setVisibleKeys([]));
  };

  return { initialize, showAutomatic, showManual, hide };
};

export default useNotifications;
