import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api";

export type TextType = {
  name: string
  items: string[]
}

export type StartupType = {
  mainImg: string
  smallImg: string
  name: string
  heading: string
  description: string
  rtl: boolean //right to left
  year: number
  shortDescription: string
  category: string
  content: {
    texts: (TextType | string)[]
    website: string
  }
}

export type InvestmentPortfolioTeamItemType = {
  src: string
  role: string
  name: string
  linkedin: string
  description: string[]
}

export type InvestmentPortfolioType = {
  name: string
  icon: string
  description: {
    heading: string
    description: string
  };
  team: InvestmentPortfolioTeamItemType[]
}

export type JobType = {
  id: number
  portfolio: string
  name: string
  keyWords: string[]
  category: string
  publishDate: string
  applicationsCount: number
  location: string
  skills: {
    experience: string
    workLevel: string
    employeeType: string
    offerSalary: number
  }
  description: {
    overview: string[]
    jobDescription: string[]
    responsibilities: string[]
    skills: string[]
  }
}

export type TermsAndConditionItemCategoryType = {
  name: string
  items: string[]
}

export type TermsAndConditionItemType = {
  section: string
  content: TermsAndConditionItemCategoryType[]
}

export type BlogItemType = {
  id: number
  preview: string
  date: string
  name: string
  author: {
    img: string
    name: string
    profession: string
  }
  content: string[]
}

export type BlogCategoryType = {
  id: number
  category: string
  items: BlogItemType[]
}

const initialState = {
  startups: [] as StartupType[],
  investmentPortfolios: [] as InvestmentPortfolioType[],
  jobs: [] as JobType[],
  termsAndConditionItems: [] as TermsAndConditionItemType[],
  blog: [] as BlogCategoryType[],
};

export type StateKeysType = keyof typeof initialState

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}

const setStaticItems = createAction<SetStaticItemsType>('static/setItems');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;

    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    }
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});