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
    fetching: false,
  },
  reducers: {
    findAllRequest: (state) => {
      state.data = [];
      state.fetching = true;
    },
    findAllSuccess: (state, { payload }) => {
      state.data = payload;
      state.fetching = false;
    },
    findAllFailure: (state) => {
      state.data = [];
      state.fetching = false;
    },
  },
});

export const { findAllRequest, findAllSuccess, findAllFailure } = slice.actions;
export default slice.reducer;
