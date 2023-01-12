import { createSlice } from "@reduxjs/toolkit";
import firebaseClient from "../../client/firebase.client";

export const findAll = () => (dispatch) => {
  dispatch(findAllRequest());

  firebaseClient
    .get("/notifications.json")
    .then((response) => {
      const notifications = [];
      if (response.data) {
        Object.entries(response.data).forEach(([key, value]) => {
          notifications.push({ id: key, ...value });
        });
      }

      dispatch(findAllSuccess(notifications));
    })
    .catch(() => {
      dispatch(findAllFailure());
    });
};

const slice = createSlice({
  name: "notifications",
  initialState: {
    data: [],
    visibleData: [],
    initialized: false,
  },
  reducers: {
    findAllRequest: (state) => {
      state.data = [];
      state.visibleData = [];
      state.initialized = false;
    },
    findAllSuccess: (state, { payload }) => {
      state.data = payload;
      state.visibleData = [];
      state.initialized = true;
    },
    findAllFailure: (state) => {
      state.data = [];
      state.visibleData = [];
      state.initialized = false;
    },
    setVisibleData: (state, { payload }) => {
      state.visibleData = payload.map((key) => ({ key, checked: false }));
    },
    toggleVisibleDataChecked: (state, { payload }) => {
      state.visibleData = state.visibleData.map((notification) => {
        if (notification.key !== payload) return notification;

        return { ...notification, checked: !notification.checked };
      });
    },
  },
});

export const selectNotifications = (state) => state.notifications;

export const {
  findAllRequest,
  findAllSuccess,
  findAllFailure,
  setVisibleData,
  toggleVisibleDataChecked,
} = slice.actions;
export default slice.reducer;
