import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
export const selectInvestmetPortfolioItems = createDraftSafeSelector(selectSelf, state => state.static.investmentPortfolios);
export const selectJobItems = createDraftSafeSelector(selectSelf, state => state.static.jobs);
export const selectTermsAndConditionItems = createDraftSafeSelector(selectSelf, state => state.static.termsAndConditionItems);
export const selectBlogItems = createDraftSafeSelector(selectSelf, state => state.static.blog);