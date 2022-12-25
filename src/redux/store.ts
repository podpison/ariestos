import { configureStore } from "@reduxjs/toolkit";
import { staticReducer } from "./reducers/static";

export const store = configureStore({
  reducer: {
    static: staticReducer,
  }
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;