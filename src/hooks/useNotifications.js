import { useDispatch, useSelector } from "react-redux";
import {
  findAll,
  selectNotifications,
  setVisibleData,
  toggleVisibleDataChecked,
} from "../redux/slices/notifications.slice";

const getLocalStorageHiddenNotifications = () =>
  JSON.parse(localStorage.getItem("hidden-notifications")) ?? [];

const useNotifications = () => {
  const dispatch = useDispatch();
  const { data, visibleData, initialized } = useSelector(selectNotifications);

  const initialize = () => dispatch(findAll());

  const showAutomatic = () => {
    const hiddenNotifications = getLocalStorageHiddenNotifications();

    const visibleData = data
      .filter((notification) => notification.automatic)
      .filter((notification) => !hiddenNotifications.includes(notification.key))
      .map((notification) => notification.key);

    dispatch(setVisibleData(visibleData));
  };

  const showManual = (keys) => {
    const hiddenNotifications = getLocalStorageHiddenNotifications();

    const visibleData = data
      .filter((notification) => !notification.automatic)
      .filter((notification) => !hiddenNotifications.includes(notification.key))
      .filter((notification) => keys.includes(notification.key))
      .map((notification) => notification.key);

    dispatch(setVisibleData(visibleData));
  };
  const back = () => dispatch(setVisibleData([]));

  const doNotShowAgain = () => {
    const keysToHidePermanently = visibleData
      .filter((d) => d.checked)
      .map((d) => d.key);

    if (keysToHidePermanently.length) {
      const oldHiddenNotifications = getLocalStorageHiddenNotifications();

      const newHiddenNotifications = [
        ...oldHiddenNotifications,
        ...keysToHidePermanently,
      ]
        .filter((key, index, array) => array.indexOf(key) === index)
        .sort();

      localStorage.setItem(
        "hidden-notifications",
        JSON.stringify(newHiddenNotifications)
      );
    }

    dispatch(setVisibleData([]));
  };

  const toggleChecked = (key) => dispatch(toggleVisibleDataChecked(key));

  return {
    initialize,
    initialized,
    showAutomatic,
    showManual,
    back,
    doNotShowAgain,
    toggleChecked,
  };
};

export default useNotifications;
