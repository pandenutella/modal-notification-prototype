import { configureStore } from "@reduxjs/toolkit";
import notifications from "./slices/notifications.slice";

const store = configureStore({
  reducer: {
    notifications,
  },
});

export default store;
