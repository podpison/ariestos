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

const biba = [
  {
    id: 0,
    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Human Resources',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 1,
    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Human Resources',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 2,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Human Resources',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },

  {
    id: 3,

    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Data Science',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 4,

    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Data Science',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 5,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Data Science',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },

  {
    id: 6,

    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Finance',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 7,

    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Finance',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 8,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Finance',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },

  {
    id: 9,

    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Operations',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 10,

    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Operations',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 11,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Operations',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },

  {
    id: 12,

    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Business development',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 13,

    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Business development',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 14,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Business development',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },

  {
    id: 15,

    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Software',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 16,

    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Software',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 17,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Software',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },

  {
    id: 18,

    portfolio: 'Kawaski',
    name: 'Sales intern - right hand to the COO.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Marketing',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 19,

    portfolio: 'Cypher',
    name: 'head of growth - medical device startup',
    keyWords: ['full time', 'remote', 'business develepoment'],
    category: 'Marketing',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
  {
    id: 20,

    portfolio: 'Ordix',
    name: 'Software Developer - Robot Systems.',
    keyWords: ['Internship', 'Paris @agronavo', 'marketing'],
    category: 'Marketing',
    publishDate: 'Dec 27 2022',
    location: 'Silicon valley - California, USA',
    skills: {
      experience: 'Minimum 1 year',
      workLevel: 'Senior level',
      employeeType: 'Full time job',
      offerSalary: 2750
    },
    description: {
      overview: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.'
      ],
      jobDescription: [
        'We are now looking for our Head of Growth.',
        'This position is for you, if you: are excited to bring a new treatments to the world for diseases that affect billions of people worldwide. want to work in the intersection of medical technology, digital health, hardware, psychology and artificial intelligence.',
        'have a strong passion and integrity for what you do and want to challenge the way we treat mental health problems today. enjoy being one of the first employees in a startup with truly global potential and ambitions, and be a part of shaping the culture and future of the company. are a natural leader that will scale with the organisation as it grows.'
      ],
      responsibilities: [
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
        'Deeply understand our customers, our product, and our business strategies. Together with CEO and small team establish strategy and OKRs for all growth marketing programs and monitor investments to deliver improved ROI performance. Owning and driving budgets across the channel mix.',
      ],
      skills: [
        'creative',
        'integrity',
        'intellectual breadth',
        'ability to admin when wrong',
        'ability to work in a diverse team',
        'sense of humor',
        'emotional openness'
      ]
    },
  },
]

const initialState = {
  startups: [] as StartupType[],
  investmentPortfolios: [] as InvestmentPortfolioType[],
  jobs: biba as JobType[]
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