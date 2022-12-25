import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
export const selectCustomerItems = createDraftSafeSelector(selectSelf, state => state.static.startups);