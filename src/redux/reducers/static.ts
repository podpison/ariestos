import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api";

export type StartupType = {
  mainImg: string
  smallImg: string
  name: string
  heading: string
  description: string
  rtl: boolean //right to left
}

export type InvestmentPortfolioType = {
  name: string;
  icon: string;
  description: {
    heading: string;
    description: string;
  };
  team: {
    leader: {
      src: string;
      name: string;
    };
    co: {
      src: string;
      name: string;
    };
    marketing: {
      src: string;
      name: string;
    };
    technician: {
      src: string;
      name: string;
    };
  };
}

const initialState = {
  startups: [] as StartupType[],
  investmentPortfolios: [] as InvestmentPortfolioType[]
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