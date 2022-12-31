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
  heading: string
  text: string[]
}

export type TermsAndConditionItemType = {
  section: string
  content: TermsAndConditionItemCategoryType[]
}
const boba = [
  {
    section: 'Introduction.',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
  {
    section: 'Pixirhy Services.',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
  {
    section: 'What personal data do we collect and why.',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
  {
    section: 'Security Of Your Data.',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
  {
    section: 'International Transfers',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
  {
    section: 'Security Of Your Data',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
  {
    section: 'Your Rights.',
    content: [
      {
        heading: 'General',
        text: [
          'We may collect your personal data from direct and indirect interactions with you to provide our services as agreed by you or to fulfill our contractual obligations with you.',
          'In this regard we may gather personal data that may include your:',
          'Name, address, nationality, email address, telephone number, bank account details, job title, name of employer, bank account details, tax ID or your national insurance number, forms of identification.',
          'We may use this information to:',
          'Set up meetings with you, maintain a record of your contacts, respond to your enquiries and fulfill your requests, assist you with your transactions or provide you with investor related services.',
          'The use and processing of your personal data is necessary for our legitimate interests in providing our services, carrying out of administrative duties, the running of our business and in order to make or advise on investment decisions.'
        ],
      },
      {
        heading: 'Communications And Correspondence',
        text: [
          'In the course of communications or correspondence with you we may need to collect your personal data in order to develop our services and offerings and inform our marketing strategy.',
          'providing our services, administrative purposes, making or advising on investment decisions, performance of contractual relationships, to comply with relevant regulations and laws, tax and compliance obligations including anti money laundering regulations and criminal background checks.',
          'running our business, administrative purposes, to enable performance of contractual relations, allow us to progress your potential employment or internship job career.'
        ],
      },
    ]
  },
]
const initialState = {
  startups: [] as StartupType[],
  investmentPortfolios: [] as InvestmentPortfolioType[],
  jobs: [] as JobType[],
  termsAndConditionItems: boba as TermsAndConditionItemType[]
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