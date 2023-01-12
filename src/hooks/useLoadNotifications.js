import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { findAll } from "../redux/slices/notifications.slice";

const useLoadNotifications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAll());
  }, []);
};

export default useLoadNotifications;
